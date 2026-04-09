export default function About() {
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

      <section style={{padding: '48px 32px', maxWidth: '600px', margin: '0 auto'}}>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px'}}>Our story</p>
        <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: '1.05', marginBottom: '40px'}}>
          A life beyond the page.
        </h1>

        <div style={{display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'Toren', color: '#533021', fontSize: '15px', lineHeight: '1.6'}}>
          <p>
            In 2018, while travelling through London, South Africa, Italy and Budapest, 10 books were read over 7 weeks. Unable to fit them in a suitcase, they were left behind along the way. Not lost — given a new adventure. Gifted to a fellow traveller, tucked into a hostel bookshelf or placed in a street library.
          </p>
          <p>
            But the wondering never stopped. Who picked them up? Did they love or loathe the book? Did they pass it on again? Physically where is the book now?
          </p>
          <p>
            That quiet curiosity — about the lives books live after we let them go — became the seed of Living Books.
          </p>
          <p>
            Living Books is a global community where books travel between readers, carrying stories, experiences and memories with them. Each book is given a unique code. Each reader who finds it logs their experience, leaves a reflection, and releases it back into the world.
          </p>
          <p>
            The book is the main character. Readers are stewards, not owners.
          </p>
          <p>
            This is not a book swap. It is not a marketplace. It is not a review platform. It is a movement — a philosophy about what books are capable of when we stop holding on to them.
          </p>
          <p>
            Every book in the Living Books archive has a life. A journey. A timeline of the hands it has passed through and the places it has been. That history belongs to the book — and to everyone who has ever held it.
          </p>
          <p style={{fontFamily: 'Archivo', color: '#533021', fontSize: '24px', fontStyle: 'italic', marginTop: '8px'}}>
            Books should never sit still.
          </p>
        </div>

        <div style={{marginTop: '56px', paddingTop: '40px', borderTop: '1px solid #C6D8FF'}}>
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '28px'}}>Our values</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px'}}>
            {[
              { title: "Intentional living", body: "Slow, thoughtful participation. Every book released with purpose." },
              { title: "Books as living objects", body: "Books carry memory and identity. They are not static." },
              { title: "Generosity over ownership", body: "Books are shared freely. The gift is in the passing on." },
              { title: "Circular sustainability", body: "Books stay in motion. Nothing sits on a shelf gathering dust." },
              { title: "Community connection", body: "Reading is shared. Every reflection is a thread between strangers." },
            ].map(({ title, body }) => (
              <div key={title} style={{borderLeft: '2px solid #C6D8FF', paddingLeft: '16px'}}>
                <p style={{fontFamily: 'Archivo', color: '#533021', fontSize: '17px', marginBottom: '6px'}}>{title}</p>
                <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', lineHeight: '1.6'}}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop: '56px', textAlign: 'center'}}>
          <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '15px', marginBottom: '20px'}}>Ready to release a book into the world?</p>
          <a href="/submit" style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '16px 32px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block'}}>
            Release a book
          </a>
        </div>
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