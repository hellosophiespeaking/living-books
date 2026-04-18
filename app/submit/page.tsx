'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

async function generateCode() {
  const { data } = await supabase
    .from('books')
    .select('code')
    .order('created_at', { ascending: false })
    .limit(1)

  if (!data || data.length === 0) return 'LB-00001'

  const last = data[0].code
  const num = parseInt(last.replace('LB-', '')) + 1
  return `LB-${String(num).padStart(5, '0')}`
}

async function getCoordinates(location: string) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${token}&limit=1`
  )
  const data = await response.json()
  if (data.features && data.features.length > 0) {
    const [longitude, latitude] = data.features[0].center
    return { latitude, longitude }
  }
  return null
}

async function getBookCover(title: string, author: string) {
  try {
    const query = encodeURIComponent(`${title} ${author}`)
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=1`)
    const data = await response.json()
    if (data.items && data.items[0]?.volumeInfo?.imageLinks?.thumbnail) {
      return data.items[0].volumeInfo.imageLinks.thumbnail.replace('http://', 'https://')
    }
  } catch (e) {
    return null
  }
  return null
}

export default function SubmitBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [yourName, setYourName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [newsletter, setNewsletter] = useState(false)
  const [journeyTracking, setJourneyTracking] = useState(false)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [code, setCode] = useState('')

  async function handleSubmit() {
    if (!title || !author || !yourName || !email || !location) {
      setMessage('Please fill in all required fields.')
      return
    }

    const newCode = await generateCode()
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + newCode.toLowerCase()

    const coverUrl = await getBookCover(title, author)

    const { error: insertError, data: newBook } = await supabase
      .from('books')
      .insert({
        title,
        author,
        description,
        slug,
        code: newCode,
        email,
        location,
        cover_url: coverUrl,
        newsletter_opt_in: newsletter,
        journey_tracking_opt_in: journeyTracking,
      })
      .select()
      .single()

    if (insertError) {
      setMessage('Something went wrong: ' + insertError.message)
      return
    }

    const coords = await getCoordinates(location)
    await supabase.from('journeys').insert({
      book_id: newBook.id,
      reader_name: yourName,
      location,
      latitude: coords?.latitude,
      longitude: coords?.longitude,
    })

    await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'new_book',
        title,
        author,
        code: newCode,
        email,
        yourName,
        location,
        newsletter,
      })
    })

    setCode(newCode)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen" style={{backgroundColor: '#FAF6EE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px'}}>
        <a href="/">
          <img src="/Logo_Chocolate.png" alt="Living Books" style={{height: '32px', marginBottom: '48px'}} />
        </a>
        <div style={{width: '100%', maxWidth: '400px', textAlign: 'center'}}>
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px'}}>Your book is registered</p>
          <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', marginBottom: '16px'}}>{title}</h1>
          <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', lineHeight: '1.6', marginBottom: '8px'}}>Write this inside the front cover of your book before releasing it into the world:</p>
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', lineHeight: '1.8', marginBottom: '32px', fontStyle: 'italic'}}>
            "I am not lost — I am living. Track my journey at livingbooksarchive.com using code {code}"
          </p>
          <div style={{border: '1px solid #8D3F2F', padding: '32px', marginBottom: '32px'}}>
            <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px'}}>Your book code</p>
            <p style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', letterSpacing: '0.1em'}}>{code}</p>
          </div>
          <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '13px', lineHeight: '1.6', marginBottom: '32px'}}>We've sent your book code to {email}.</p>
          <div style={{marginBottom: '32px', padding: '24px', border: '1px solid #C6D8FF', backgroundColor: '#FFFBCA'}}>
            <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '13px', lineHeight: '1.6', marginBottom: '16px'}}>
              Living Books is community-funded. If you'd like to help keep the books travelling, consider a small contribution.
            </p>
            <a href="https://ko-fi.com/livingbooks" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', backgroundColor: '#533021', color: '#FAF6EE', padding: '12px 24px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'none'}}>Keep the books travelling</a>
          </div>
          <a href="/library" style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', textDecoration: 'underline'}}>
            View the library
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: '#FAF6EE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px'}}>
      <a href="/">
        <img src="/Logo_Chocolate.png" alt="Living Books" style={{height: '32px', marginBottom: '48px'}} />
      </a>
      <div style={{width: '100%', maxWidth: '480px'}}>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px'}}>Release a book</p>
        <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', marginBottom: '8px'}}>Register a book</h1>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px'}}>
          Every book registered becomes part of the Living Books archive. You will receive a unique code to write inside the cover before releasing it into the world.
        </p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <input type="text" placeholder="Book title *" value={title} onChange={e => setTitle(e.target.value)} style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}} />
          <input type="text" placeholder="Author *" value={author} onChange={e => setAuthor(e.target.value)} style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}} />
          <textarea placeholder="A short description of the book" value={description} onChange={e => setDescription(e.target.value)} rows={4} style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%', resize: 'none'}} />
          <input type="text" placeholder="Your name *" value={yourName} onChange={e => setYourName(e.target.value)} style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}} />
          <input type="email" placeholder="Your email *" value={email} onChange={e => setEmail(e.target.value)} style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}} />
          <input type="text" placeholder="Your location (city, country) *" value={location} onChange={e => setLocation(e.target.value)} style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}} />
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px'}}>
            <label style={{display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer'}}>
              <input type="checkbox" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} style={{accentColor: '#533021', width: '16px', height: '16px'}} />
              <span style={{fontFamily: 'Toren', fontSize: '13px', color: '#533021', lineHeight: '1.5'}}>Keep me updated with Living Books news</span>
            </label>
            <label style={{display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer'}}>
              <input type="checkbox" checked={journeyTracking} onChange={e => setJourneyTracking(e.target.checked)} style={{accentColor: '#533021', width: '16px', height: '16px'}} />
              <span style={{fontFamily: 'Toren', fontSize: '13px', color: '#533021', lineHeight: '1.5'}}>Notify me when this book finds its next reader</span>
            </label>
          </div>
          <button onClick={handleSubmit} style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '16px 32px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', border: 'none', cursor: 'pointer', marginTop: '8px'}}>
            Register book
          </button>
        </div>
        {message && <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', marginTop: '16px'}}>{message}</p>}
      </div>
    </main>
  )
}