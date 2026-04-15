'use client'
import { useState } from 'react'
import { supabase } from './supabase'

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

export default function ReflectionForm({ bookId }: { bookId: string }) {
  const [content, setContent] = useState('')
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit() {
    const coords = await getCoordinates(location)

    const { error: journeyError, data: journey } = await supabase
      .from('journeys')
      .insert({
        book_id: bookId,
        reader_name: name,
        location,
        latitude: coords?.latitude,
        longitude: coords?.longitude
      })
      .select()
      .single()

    if (journeyError) {
      setMessage('Something went wrong. Please try again.')
      return
    }

    const { error: reflectionError } = await supabase
      .from('reflections')
      .insert({ book_id: bookId, journey_id: journey.id, content })

    if (reflectionError) {
      setMessage('Something went wrong. Please try again.')
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{marginTop: '56px', paddingTop: '40px', borderTop: '1px solid #C6D8FF'}}>
        <p style={{fontFamily: 'Archivo', color: '#533021', fontSize: '24px', marginBottom: '8px'}}>Thank you for your reflection.</p>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px', marginBottom: '32px'}}>The book journeys on.</p>
        <div style={{padding: '24px', border: '1px solid #C6D8FF', backgroundColor: '#FFFBCA'}}>
          <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '13px', lineHeight: '1.6', marginBottom: '16px'}}>Living Books is community-funded. If you would like to help keep the books travelling, consider a small contribution.</p>
          <a href="https://ko-fi.com/livingbooks" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', backgroundColor: '#533021', color: '#FAF6EE', padding: '12px 24px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'none'}}>Keep the books travelling</a>
        </div>
      </div>
    )
  }

  return (
    <div style={{marginTop: '56px', paddingTop: '40px', borderTop: '1px solid #C6D8FF'}}>
      <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px'}}>Your turn</p>
      <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '28px', marginBottom: '28px'}}>Leave a reflection</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}}
        />
        <input
          type="text"
          placeholder="Your location (e.g. Melbourne, Australia)"
          value={location}
          onChange={e => setLocation(e.target.value)}
          style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}}
        />
        <textarea
          placeholder="What did this book mean to you?"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={5}
          style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%', resize: 'none'}}
        />
        <button
          onClick={handleSubmit}
          style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '16px 32px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', border: 'none', cursor: 'pointer', marginTop: '4px'}}
        >
          Submit reflection
        </button>
      </div>
      {message && (
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', marginTop: '16px'}}>{message}</p>
      )}
    </div>
  )
}