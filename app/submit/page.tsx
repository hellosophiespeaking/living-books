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

export default function SubmitBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [yourName, setYourName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [code, setCode] = useState('')

  async function handleSubmit() {
    if (!title || !author || !yourName) {
      setMessage('Please fill in all required fields.')
      return
    }

    const newCode = await generateCode()
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    const { error: insertError } = await supabase
      .from('books')
      .insert({
        title,
        author,
        description,
        slug,
        code: newCode,
        status: 'pending',
      })

    if (insertError) {
      setMessage('Something went wrong. Please try again.')
      return
    }

    await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'new_book',
        title,
        author,
        code: newCode,
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
          <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px'}}>Write this code inside the front cover of your book before releasing it into the world.</p>
          <div style={{border: '1px solid #8D3F2F', padding: '32px', marginBottom: '32px'}}>
            <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px'}}>Your book code</p>
            <p style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', letterSpacing: '0.1em'}}>{code}</p>
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
        <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', marginBottom: '8px'}}>Submit a book</h1>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px'}}>
          Every book submitted becomes part of the Living Books archive. You will receive a unique code to write inside the cover before releasing it.
        </p>
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <input
            type="text"
            placeholder="Book title *"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}}
          />
          <input
            type="text"
            placeholder="Author *"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}}
          />
          <textarea
            placeholder="A short description of the book"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={4}
            style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%', resize: 'none'}}
          />
          <input
            type="text"
            placeholder="Your name *"
            value={yourName}
            onChange={e => setYourName(e.target.value)}
            style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}}
          />
          <button
            onClick={handleSubmit}
            style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '16px 32px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', border: 'none', cursor: 'pointer', marginTop: '4px'}}
          >
            Submit book
          </button>
        </div>
        {message && (
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', marginTop: '16px'}}>{message}</p>
        )}
      </div>
    </main>
  )
}