import { supabase } from '../lib/supabase'
import Link from 'next/link'
export const revalidate = 0
export default async function Library() {
  const { data: books } = await supabase.from('books').select('*').order('created_at', { ascending: false })

  return (
    <main className="min-h-screen" style={{backgroundColor: '#FAF6EE'}}>

      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px'}}>
        <a href="/">
          <img src="/Logo_Chocolate.png" alt="Living Books" style={{height: '32px'}} />
        </a>
        <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
          <a href="/about" style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', textDecoration: 'none'}}>About</a>
          <span style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px'}}>Library</span>
          <a href="https://instagram.com/livingbooksarchive" target="_blank" rel="noopener noreferrer" style={{color: '#533021'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </nav>

      <section style={{padding: '48px 32px', maxWidth: '1000px', margin: '0 auto'}}>
        <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '48px', marginBottom: '8px'}}>The library</h1>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px', marginBottom: '48px'}}>Every book here is alive. Each one is on a journey.</p>

        {books && books.length > 0 ? (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px'}}>
            {books.map((book) => (
              <Link key={book.id} href={`/book/${book.slug}`} style={{textDecoration: 'none'}}>
                <div style={{backgroundColor: '#FFFFFF', padding: '24px', cursor: 'pointer', borderLeft: '3px solid #C6D8FF'}}>
                  <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '22px', marginBottom: '4px'}}>{book.title}</h2>
                  <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px'}}>{book.author}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p style={{fontFamily: 'Archivo', color: '#8D3F2F', fontSize: '24px', textAlign: 'center', padding: '96px 0'}}>
            The first book is yet to begin its journey.
          </p>
        )}
      </section>

      <footer style={{textAlign: 'center', padding: '48px 32px', fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', marginTop: '48px'}}>
        <p style={{marginBottom: '16px'}}>A life beyond the page.</p>
        <a href="https://instagram.com/livingbooksarchive" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#8D3F2F', textDecoration: 'none'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
          @livingbooksarchive
        </a>
      </footer>

    </main>
  )
}