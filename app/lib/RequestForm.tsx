'use client'
import { useState } from 'react'
import { supabase } from './supabase'

export default function RequestForm({ bookId, bookTitle, bookOwnerEmail }: { bookId: string; bookTitle: string; bookOwnerEmail: string }) {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleRequest() {
    if (!name || !address) {
      setMessage('Please fill in your name and postal address.')
      return
    }

    setLoading(true)

    const { error } = await supabase
      .from('books')
      .update({ available_to_send: false })
      .eq('id', bookId)
      .eq('available_to_send', true)

    if (error) {
      setMessage('This book has already been requested. Try browsing for another.')
      setLoading(false)
      return
    }

    await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'book_request',
        bookTitle,
        bookOwnerEmail,
        requesterName: name,
        requesterAddress: address,
      }),
    })

    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div style={{marginTop: '56px', paddingTop: '40px', borderTop: '1px solid #C6D8FF'}}>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px'}}>Request received</p>
        <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '28px', marginBottom: '16px'}}>You're next on the journey.</h2>
        <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', lineHeight: '1.7'}}>
          The book's owner has been notified and will post it to you. Keep an eye on your letterbox.
        </p>
      </div>
    )
  }

  return (
    <div style={{marginTop: '56px', paddingTop: '40px', borderTop: '1px solid #C6D8FF'}}>
      <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px'}}>Available to send</p>
      <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '28px', marginBottom: '12px'}}>Request this book</h2>
      <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', lineHeight: '1.7', marginBottom: '28px'}}>
        The owner of this book is willing to post it on. Leave your name and address — they'll send it your way.
      </p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}}
        />
        <textarea
          placeholder={"Your full postal address\n(including postcode and country)"}
          value={address}
          onChange={e => setAddress(e.target.value)}
          rows={4}
          style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%', resize: 'none'}}
        />
        <button
          onClick={handleRequest}
          disabled={loading}
          style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '16px 32px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '4px', opacity: loading ? 0.7 : 1}}
        >
          {loading ? 'Sending request...' : 'Request this book'}
        </button>
      </div>
      {message && (
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', marginTop: '16px'}}>{message}</p>
      )}
    </div>
  )
}
