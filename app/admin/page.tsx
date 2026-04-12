'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabase'
import AdminActions from '../lib/AdminActions'

const ADMIN_PASSWORD = 'livingbooks2025'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [pending, setPending] = useState<any[]>([])
  const [approved, setApproved] = useState<any[]>([])
  const [error, setError] = useState('')

  async function handleLogin() {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      const { data: pendingBooks } = await supabase
        .from('books')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false })
      const { data: approvedBooks } = await supabase
        .from('books')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false })
      setPending(pendingBooks || [])
      setApproved(approvedBooks || [])
    } else {
      setError('Incorrect password.')
    }
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen" style={{backgroundColor: '#FAF6EE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <a href="/">
          <img src="/Logo_Chocolate.png" alt="Living Books" style={{height: '32px', marginBottom: '48px'}} />
        </a>
        <div style={{width: '100%', maxWidth: '320px'}}>
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px'}}>Admin access</p>
          <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '32px', marginBottom: '24px'}}>Enter password</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '14px', color: '#533021', outline: 'none', width: '100%', marginBottom: '12px'}}
          />
          {error && <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', marginBottom: '12px'}}>{error}</p>}
          <button
            onClick={handleLogin}
            style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '14px 32px', fontFamily: 'Toren', fontSize: '13px', border: 'none', cursor: 'pointer', width: '100%', letterSpacing: '0.1em'}}
          >
            Enter
          </button>
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
        <span style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px'}}>Admin</span>
      </nav>

      <section style={{padding: '48px 32px', maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '48px', marginBottom: '8px'}}>Admin</h1>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px', marginBottom: '48px'}}>Review and approve book submissions.</p>

        <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '28px', marginBottom: '24px'}}>
          Pending approval ({pending.length})
        </h2>

        {pending.length > 0 ? (
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '64px'}}>
            {pending.map((book) => (
              <div key={book.id} style={{backgroundColor: '#FFFFFF', padding: '24px', borderLeft: '3px solid #FFFBCA', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <p style={{fontFamily: 'Archivo', color: '#533021', fontSize: '20px', marginBottom: '4px'}}>{book.title}</p>
                  <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', marginBottom: '4px'}}>{book.author}</p>
                  <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '12px'}}>{book.code}</p>
                </div>
                <AdminActions bookId={book.id} onAction={async () => {
                  const { data: p } = await supabase.from('books').select('*').eq('status', 'pending').order('created_at', { ascending: false })
                  const { data: a } = await supabase.from('books').select('*').eq('status', 'approved').order('created_at', { ascending: false })
                  setPending(p || [])
                  setApproved(a || [])
                }} />
              </div>
            ))}
          </div>
        ) : (
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '15px', marginBottom: '64px'}}>No books pending approval.</p>
        )}

        <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '28px', marginBottom: '24px'}}>
          Approved ({approved.length})
        </h2>

        {approved.length > 0 ? (
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            {approved.map((book) => (
              <div key={book.id} style={{backgroundColor: '#FFFFFF', padding: '20px 24px', borderLeft: '3px solid #C6D8FF', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <p style={{fontFamily: 'Archivo', color: '#533021', fontSize: '18px', marginBottom: '2px'}}>{book.title}</p>
                  <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px'}}>{book.author}</p>
                </div>
                <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '12px'}}>{book.code}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '15px'}}>No approved books yet.</p>
        )}
      </section>
    </main>
  )
}