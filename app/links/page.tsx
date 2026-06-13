export default function Links() {
  return (
    <main style={{backgroundColor: '#FAF6EE', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px', position: 'relative', overflow: 'hidden'}}>

      <style>{`
        @keyframes drift {
          0% { transform: translate(-150%, 80%) rotate(-5deg); }
          50% { transform: translate(80%, -80%) rotate(5deg); }
          100% { transform: translate(-150%, 80%) rotate(-5deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .link-btn {
          display: block;
          width: 100%;
          padding: 20px 32px;
          font-family: 'Toren', monospace;
          font-size: 15px;
          letter-spacing: 0.1em;
          text-decoration: none;
          text-align: center;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .link-btn:hover {
          transform: translateY(-2px);
          opacity: 0.85;
        }
        .link-btn:active {
          transform: translateY(0px);
        }
      `}</style>

      <div style={{position: 'absolute', width: '30vw', maxWidth: '300px', opacity: 0.1, pointerEvents: 'none', zIndex: 0, animation: 'drift 25s ease-in-out infinite', left: '50%', top: '50%'}}>
        <img src="/favicon.svg" style={{width: '100%', height: 'auto'}} />
      </div>

      <div style={{position: 'relative', zIndex: 1, width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', animation: 'fadeUp 0.6s ease forwards'}}>
        
        <a href="/">
          <img src="/Logo_Chocolate.png" alt="Living Books" style={{height: '40px', marginBottom: '8px'}} />
        </a>

        <p style={{fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center'}}>
          Not lost. Just living.
        </p>

        <a href="/submit" className="link-btn" style={{backgroundColor: '#533021', color: '#FAF6EE'}}>
          📖 Register a book
        </a>

        <a href="/library" className="link-btn" style={{backgroundColor: '#C6D8FF', color: '#533021'}}>
          🗺️ Explore the library
        </a>

        <a href="https://ko-fi.com/livingbooks" target="_blank" rel="noopener noreferrer" className="link-btn" style={{backgroundColor: '#FFFBCA', color: '#533021'}}>
          ⭐ Support the community
        </a>

        <a href="https://instagram.com/livingbooksarchive" target="_blank" rel="noopener noreferrer" style={{marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Toren', color: '#8D3F2F', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.05em'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
          @livingbooksarchive
        </a>

      </div>
    </main>
  )
}