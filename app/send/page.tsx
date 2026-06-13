'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function SendPage() {
  const [books, setBooks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<any>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function fetchBooks() {
      const { data } = await supabase
        .from('books')
        .select('*')
        .eq('available_to_send', true)
        .order('created_at', { ascending: false })
      setBooks(data || [])
      setLoading(false)
    }
    fetchBooks()
  }, [])

  async function handleClaim() {
    if (!name || !email || !address) {
      setMessage('Please fill in all fields.')
      return
    }

    const res = await fetch('/api/request-book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        bookId: selected.id,
        requesterName: name,
        requesterEmail: email,
        requesterAddress: address,
      })
    })

    const data = await res.json()

    if (!res.ok) {
      setMessage(data.error || 'Something went wrong. Please try again.')
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen" style={{backgroundColor: '#FAF6EE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px'}}>
        <a href="/">
          <img src="/Logo_Chocolate.png" alt="Living Books" style={{height: '32px', marginBottom: '48px'}} />
        </a>
        <div style={{width: '100%', maxWidth: '400px', textAlign: 'center'}}>
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px'}}>On its way</p>
          <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', marginBottom: '16px'}}>{selected.title}</h1>
          <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px'}}>
            Your request has been sent. The owner will post it to you directly. Keep an eye on your inbox for updates.
          </p>
          <a href="/library" style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', textDecoration: 'underline'}}>
            View the library
          </a>
        </div>
      </main>
    )
  }

  if (selected) {
    return (
      <main className="min-h-screen" style={{backgroundColor: '#FAF6EE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px'}}>
        <a href="/">
          <img src="/Logo_Chocolate.png" alt="Living Books" style={{height: '32px', marginBottom: '48px'}} />
        </a>
        <div style={{width: '100%', maxWidth: '480px'}}>
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px'}}>Claim this book</p>
          <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', marginBottom: '4px'}}>{selected.title}</h1>
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px', marginBottom: '32px'}}>{selected.author}</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <input
              type="text"
              placeholder="Your name *"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}}
            />
            <input
              type="email"
              placeholder="Your email *"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%'}}
            />
            <textarea
              placeholder="Your postal address *"
              value={address}
              onChange={e => setAddress(e.target.value)}
              rows={4}
              style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%', resize: 'none'}}
            />
            <button
              onClick={handleClaim}
              style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '16px 32px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', border: 'none', cursor: 'pointer', marginTop: '4px'}}
            >
              Claim book
            </button>
            <button
              onClick={() => setSelected(null)}
              style={{backgroundColor: 'transparent', color: '#8D3F2F', padding: '12px', fontFamily: 'Toren', fontSize: '13px', border: 'none', cursor: 'pointer', textDecoration: 'underline'}}
            >
              Back to available books
            </button>
          </div>
          {message && <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', marginTop: '16px'}}>{message}</p>}
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: '#FAF6EE'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px'}}>
        <a href="/">
          <img src="/Logo_Chocolate.png" alt="Living Books" style={{height: '32px'}} />
        </a>
        <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
          <a href="/about" style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', textDecoration: 'none'}}>About</a>
          <a href="/library" style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', textDecoration: 'none'}}>Library</a>
        </div>
      </nav>

      <section style={{padding: '48px 32px', maxWidth: '800px', margin: '0 auto'}}>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px'}}>Available to send</p>
        <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '48px', marginBottom: '8px'}}>Send a book</h1>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px', lineHeight: '1.6', marginBottom: '48px'}}>
          These books are looking for their next reader. Claim one and the owner will post it to you directly.
        </p>

        {loading ? (
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px'}}>Loading...</p>
        ) : books.length > 0 ? (
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {books.map((book) => (
              <div key={book.id} style={{backgroundColor: '#FFFFFF', padding: '24px', borderLeft: '3px solid #C6D8FF', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  {book.cover_url && (
                    <img src={book.cover_url} alt={book.title} style={{width: '48px', marginBottom: '8px', display: 'block'}} />
                  )}
                  <p style={{fontFamily: 'Archivo', color: '#533021', fontSize: '20px', marginBottom: '4px'}}>{book.title}</p>
                  <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', marginBottom: '4px'}}>{book.author}</p>
                  <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '12px'}}>{book.location}</p>
                </div>
                <button
                  onClick={() => setSelected(book)}
                  style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '12px 24px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', border: 'none', cursor: 'pointer', flexShrink: 0}}
                >
                  Claim
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p style={{fontFamily: 'Archivo', color: '#8D3F2F', fontSize: '24px', textAlign: 'center', padding: '96px 0'}}>
            No books available to send right now.
          </p>
        )}
      </section>
    </main>
  )
}