export const revalidate = 0

import { supabase } from './lib/supabase'

async function getBookCount() {
  const { count } = await supabase
    .from('books')
    .select('*', { count: 'exact', head: true })
  return count || 0
}

export default async function Home() {
  const bookCount = await getBookCount()

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

      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '32px 32px 64px', position: 'relative', overflow: 'hidden', minHeight: '500px'}}>

        <style>{`
          @keyframes drift {
            0% { transform: translate(-150%, 80%) rotate(-5deg); }
            50% { transform: translate(80%, -80%) rotate(5deg); }
            100% { transform: translate(-150%, 80%) rotate(-5deg); }
          }
        `}</style>

        <div style={{position: 'absolute', width: '30vw', maxWidth: '300px', opacity: 0.15, pointerEvents: 'none', zIndex: 0, animation: 'drift 25s ease-in-out infinite', left: '50%', top: '50%'}}>
          <img src="/favicon.svg" style={{width: '100%', height: 'auto'}} />
        </div>

        <div style={{position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px'}}>
            A travelling book community
          </p>
          <h1 style={{fontFamily: 'Archivo', color: '#533021', fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: '1', marginBottom: '24px', maxWidth: '800px'}}>
            Books should never sit still.
          </h1>
          <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '16px', maxWidth: '420px', lineHeight: '1.7', marginBottom: '40px', textAlign: 'center', margin: '0 auto 40px'}}>
            A global community where books live full lives — read, experienced and released.
          </p>

          <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '40px', backgroundColor: '#FFFBCA', padding: '12px 24px'}}>
            <span style={{fontFamily: 'Archivo', color: '#533021', fontSize: '24px', fontWeight: '800'}}>{bookCount}</span>
            <span style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', letterSpacing: '0.1em'}}>books currently travelling</span>
          </div>

          <div style={{marginTop: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
            <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase'}}>Have a book code?</p>
            <form action="/find" method="GET" style={{display: 'flex', gap: '12px'}}>
              <input
                name="code"
                placeholder="LB-00001"
                style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '12px 16px', fontFamily: 'Toren', fontSize: '13px', color: '#533021', outline: 'none', width: '140px', textAlign: 'center', letterSpacing: '0.1em'}}
              />
              <button type="submit" style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer'}}>
                Find book
              </button>
            </form>
          </div>
        </div>
      </section>

      <section style={{backgroundColor: '#FAF6EE', padding: '64px 32px'}}>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '16px'}}>Get involved</p>
        <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', textAlign: 'center', marginBottom: '48px'}}>Three ways to participate</h2>
        <div style={{maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px'}}>

          <div style={{backgroundColor: '#FFFFFF', padding: '32px', borderTop: '3px solid #C6D8FF'}}>
            <p style={{fontFamily: 'Toren', color: '#195693', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px'}}>01 — Find</p>
            <h3 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '24px', marginBottom: '12px'}}>Found a book?</h3>
            <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px'}}>Enter the LB code from inside the cover to see where this book has been — and add your chapter to its story.</p>
            <form action="/find" method="GET" style={{display: 'flex', gap: '12px'}}>
              <input
                name="code"
                placeholder="LB-00001"
                style={{border: '1px solid #8D3F2F', backgroundColor: 'transparent', padding: '10px 14px', fontFamily: 'Toren', fontSize: '13px', color: '#533021', outline: 'none', flex: 1, textAlign: 'center', letterSpacing: '0.1em'}}
              />
              <button type="submit" style={{backgroundColor: '#195693', color: '#FAF6EE', padding: '10px 16px', fontFamily: 'Toren', fontSize: '13px', border: 'none', cursor: 'pointer', letterSpacing: '0.05em'}}>
                Find
              </button>
            </form>
          </div>

          <div style={{backgroundColor: '#FFFFFF', padding: '32px', borderTop: '3px solid #8D3F2F'}}>
            <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px'}}>02 — Release</p>
            <h3 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '24px', marginBottom: '12px'}}>Register a book</h3>
            <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px'}}>Register your book, get a unique LB code, write it inside the cover and release it into the world.</p>
            <a href="/submit" style={{display: 'inline-block', backgroundColor: '#533021', color: '#FAF6EE', padding: '12px 24px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'none'}}>
              Register a book
            </a>
          </div>

          <div style={{backgroundColor: '#FFFFFF', padding: '32px', borderTop: '3px solid #FFFBCA', borderTopColor: '#533021'}}>
            <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px'}}>03 — Send</p>
            <h3 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '24px', marginBottom: '12px'}}>Send a book</h3>
            <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px'}}>Browse books available to be posted. Claim one and it will find its way to you — no matter where you are.</p>
            <a href="/send" style={{display: 'inline-block', backgroundColor: '#533021', color: '#FAF6EE', padding: '12px 24px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'none'}}>
              Browse available books
            </a>
          </div>

        </div>
      </section>

      <section style={{backgroundColor: '#C6D8FF', padding: '64px 32px'}}>
        <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', textAlign: 'center', marginBottom: '48px'}}>
          How books travel
        </h2>
        <div style={{maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '32px', textAlign: 'center'}}>
          {[
            { step: "01", label: "Read" },
            { step: "02", label: "Experience" },
            { step: "03", label: "Record" },
            { step: "04", label: "Release" },
          ].map(({ step, label }) => (
            <div key={step} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
              <span style={{fontFamily: 'LaBelle', color: '#8D3F2F', fontSize: '16px'}}>{step}</span>
              <span style={{fontFamily: 'Archivo', color: '#533021', fontSize: '24px'}}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#FFFBCA', padding: '64px 32px', textAlign: 'center'}}>
        <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', marginBottom: '16px'}}>Support the community!</h2>
        <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '15px', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto 32px'}}>
          I built this because I couldn't stop wondering where my books ended up. If you love it too, please consider supporting with a few dollars — it helps keep the lights on and the books moving.
        </p>
        <a href="https://ko-fi.com/livingbooks" target="_blank" rel="noopener noreferrer" style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '16px 32px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block'}}>💰 = 📚✈️</a>
      </section>

      <footer style={{textAlign: 'center', padding: '48px 32px', fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px'}}>
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