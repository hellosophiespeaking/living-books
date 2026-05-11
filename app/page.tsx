export default function Home() {
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
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <a href="/library" style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '16px 32px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block'}}>
              Explore the library
            </a>
            <a href="/submit" style={{border: '1px solid #533021', color: '#533021', padding: '16px 32px', fontFamily: 'Toren', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block'}}>
              Release a book
            </a>
          </div>

          <div style={{marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
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

      <section style={{padding: '80px 32px', backgroundColor: '#FAF6EE'}}>
        <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', textAlign: 'center', marginBottom: '16px'}}>
          Three ways to join
        </h2>
        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '15px', textAlign: 'center', marginBottom: '56px'}}>
          Everyone has a role to play.
        </p>
        <div style={{maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px'}}>

          <div style={{backgroundColor: '#FFFFFF', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <span style={{fontFamily: 'LaBelle', color: '#8D3F2F', fontSize: '14px', letterSpacing: '0.1em'}}>01</span>
            <h3 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '26px', margin: 0}}>Found a book?</h3>
            <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', lineHeight: '1.7', margin: 0, flexGrow: 1}}>
              If you've picked up a Living Book — at a street library, a café, or from a friend — enter the code inside the cover. Record where you found it. The journey continues.
            </p>
            <a href="/" style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'underline'}}>
              Enter your code above ↑
            </a>
          </div>

          <div style={{backgroundColor: '#FFFBCA', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <span style={{fontFamily: 'LaBelle', color: '#8D3F2F', fontSize: '14px', letterSpacing: '0.1em'}}>02</span>
            <h3 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '26px', margin: 0}}>Have a book to release?</h3>
            <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', lineHeight: '1.7', margin: 0, flexGrow: 1}}>
              Register your book, write the code inside the cover, and set it free — at a street library, a charity shop, or by sending it directly to someone who requests it.
            </p>
            <a href="/submit" style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'underline'}}>
              Register a book →
            </a>
          </div>

          <div style={{backgroundColor: '#C6D8FF', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <span style={{fontFamily: 'LaBelle', color: '#8D3F2F', fontSize: '14px', letterSpacing: '0.1em'}}>03</span>
            <h3 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '26px', margin: 0}}>Want a book sent to you?</h3>
            <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '14px', lineHeight: '1.7', margin: 0, flexGrow: 1}}>
              Browse books whose owners are willing to post them on. Request one — just leave your name and address. The owner will send it your way, and the book travels on.
            </p>
            <a href="/library?available=true" style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'underline'}}>
              Browse available books →
            </a>
          </div>

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