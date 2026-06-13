import { supabase } from '../../lib/supabase'
import ReflectionForm from '../../lib/ReflectionForm'
import BookMap from '../../lib/BookMap'

export const revalidate = 0
  const { slug } = await params
  const { data: book } = await supabase
    .from('books')
    .select('*, journeys(*), reflections(*)')
    .eq('slug', slug)
    .single()

  if (!book) return <p>Book not found.</p>

  return (
    <main className="min-h-screen" style={{backgroundColor: '#FAF6EE'}}>

      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px'}}>
        <a href="/">
          <img src="/Logo_Chocolate.png" alt="Living Books" style={{height: '32px'}} />
        </a>
        <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
          <a href="/about" style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', textDecoration: 'none'}}>About</a>
          <a href="/library" style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', textDecoration: 'none'}}>Library</a>
          <a href="https://instagram.com/livingbooksarchive" target="_blank" rel="noopener noreferrer" style={{color: '#533021'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </nav>

      <section style={{padding: '48px 32px', maxWidth: '680px', margin: '0 auto'}}>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px'}}>A living book</p>
        <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: 'clamp(36px, 6vw, 60px)', lineHeight: '1.05', marginBottom: '8px'}}>{book.title}</h1>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '16px', marginBottom: '32px'}}>{book.author}</p>

        {book.cover_url && (
          <img
            src={book.cover_url}
            alt={book.title}
            style={{width: '120px', marginBottom: '32px', display: 'block'}}
          />
        )}

        {book.description && (
          <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '15px', lineHeight: '1.6', marginBottom: '48px'}}>{book.description}</p>
        )}

        <BookMap journeys={book.journeys || []} />

        <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '28px', marginTop: '48px', marginBottom: '24px'}}>Stops along the way</h2>
        {book.journeys && book.journeys.length > 0 ? (
          <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
            {book.journeys.map((journey: any, index: number) => (
              <div key={journey.id} style={{display: 'flex', gap: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8D3F2F', marginTop: '4px', flexShrink: 0}}></div>
                  {index < book.journeys.length - 1 && (
                    <div style={{width: '1px', flex: 1, backgroundColor: '#C6D8FF', marginTop: '4px'}}></div>
                  )}
                </div>
                <div style={{paddingBottom: '24px'}}>
                  <p style={{fontFamily: 'Archivo', color: '#533021', fontSize: '18px', marginBottom: '2px'}}>{journey.reader_name}</p>
                  <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px'}}>{journey.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '15px'}}>This book's journey is just beginning.</p>
        )}

        {book.reflections && book.reflections.length > 0 && (
          <>
            <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '28px', marginTop: '56px', marginBottom: '24px'}}>Reflections</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              {book.reflections.map((reflection: any) => (
                <div key={reflection.id} style={{backgroundColor: '#FFFFFF', padding: '24px', borderLeft: '3px solid #C6D8FF'}}>
                  <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '15px', lineHeight: '1.6'}}>{reflection.content}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <ReflectionForm bookId={book.id} />

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