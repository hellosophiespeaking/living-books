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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" style={{width: '100%', height: 'auto'}}>
            <defs><style>{`.st0 { fill: #195693; }`}</style></defs>
            <g>
              <path className="st0" d="M355.8,330.84v35.87c1.69-.56,3.47-1.1,5.34-1.6v-36.33c-1.83.65-3.59,1.33-5.34,2.06ZM355.8,448.25v35.88c1.69-.56,3.47-1.1,5.34-1.6v-36.33c-1.83.65-3.59,1.33-5.34,2.04ZM919.01,77.48H358.47c-1.47,0-2.66,1.2-2.66,2.68v227.85c1.69-.56,3.47-1.12,5.34-1.61V82.82h555.2v834.35H361.14v-353.55c-1.83.65-3.59,1.33-5.34,2.04v354.18c0,1.48,1.2,2.68,2.66,2.68h560.54c1.48,0,2.68-1.2,2.68-2.68V80.16c0-1.48-1.2-2.68-2.68-2.68ZM361.14,504.92c-1.83.63-3.59,1.33-5.34,2.04v35.88c1.69-.56,3.47-1.1,5.34-1.6v-36.33ZM355.8,389.54v35.88c1.69-.56,3.47-1.1,5.34-1.6v-36.33c-1.83.65-3.59,1.33-5.34,2.04Z"/>
              <path className="st0" d="M324.09,342.45c-1.72.39-3.52.75-5.4,1.06,2.55,5.4,3.99,11.44,3.99,17.8,0,6.96-1.72,13.55-4.75,19.32,2.37-.48,4.57-1.05,6.67-1.67,2.2-5.46,3.43-11.41,3.43-17.65,0-6.71-1.41-13.1-3.94-18.86ZM315.05,461.49c-2.2.31-4.53.56-6.98.75,8.93,7.62,14.6,18.98,14.6,31.65,0,1.04-.04,2.06-.11,3.07,1.9-.5,3.7-1.06,5.43-1.65h0c.01-.48.03-.94.03-1.41,0-12.56-4.95-23.97-12.97-32.4Z"/>
            </g>
            <g>
              <path className="st0" d="M900.15,534.39c-.33,0-.67-.06-.99-.19l-429.99-170.77c-.92-.37-1.57-1.22-1.67-2.21-.1-.99.35-1.95,1.18-2.5l87.88-58.22c.91-.59,2.07-.59,2.96,0l342.11,228.98c1.14.76,1.52,2.26.88,3.47-.48.9-1.4,1.43-2.37,1.43ZM475.9,360.35l401.87,159.6-319.74-214-82.13,54.41Z"/>
              <path className="st0" d="M900.15,534.39H377.3c-.9,0-1.74-.45-2.23-1.21-.49-.75-.58-1.7-.22-2.53l53.89-124.19c.53-1.21,1.86-1.85,3.14-1.52l468.95,124.19c1.3.34,2.14,1.6,1.97,2.93-.17,1.33-1.31,2.33-2.65,2.33ZM381.38,529.04h498.23l-446.88-118.35-51.36,118.35Z"/>
              <path className="st0" d="M470.16,420.51c-1.48,0-2.67-1.19-2.67-2.67v-56.89c0-1.48,1.19-2.67,2.67-2.67s2.67,1.19,2.67,2.67v56.89c0,1.48-1.19,2.67-2.67,2.67Z"/>
              <path className="st0" d="M491.16,572.09c-1.07,0-2.04-.63-2.46-1.63l-16.03-37.7c-.58-1.36.06-2.93,1.42-3.51,1.35-.57,2.93.06,3.51,1.42l15.26,35.91,407.05-37.53c1.45-.08,2.77.95,2.91,2.42.13,1.47-.95,2.77-2.42,2.91l-408.99,37.7c-.08,0-.16,0-.24,0Z"/>
            </g>
            <g>
              <path className="st0" d="M491.16,337.25c-24.94,0-37.59-5.56-49.83-10.93-12.27-5.39-23.86-10.49-47.68-10.49s-35.41,5.09-47.68,10.49c-12.24,5.37-24.89,10.93-49.83,10.93s-37.56-5.56-49.79-10.93c-12.26-5.39-23.85-10.49-47.65-10.49s-35.39,5.09-47.66,10.49c-12.23,5.37-24.88,10.93-49.81,10.93s-37.57-5.56-49.8-10.93c-12.26-5.39-23.84-10.49-47.64-10.49-1.48,0-2.67-1.19-2.67-2.67s1.19-2.67,2.67-2.67c24.92,0,37.56,5.56,49.79,10.93,12.26,5.39,23.85,10.49,47.65,10.49s35.39-5.09,47.66-10.49c12.23-5.37,24.88-10.93,49.81-10.93s37.57,5.56,49.79,10.93c12.26,5.39,23.84,10.49,47.64,10.49s35.41-5.09,47.68-10.49c12.24-5.37,24.89-10.93,49.83-10.93s37.59,5.56,49.82,10.93c12.27,5.39,23.87,10.49,47.68,10.49,1.48,0,2.67,1.19,2.67,2.67s-1.19,2.67-2.67,2.67Z"/>
              <path className="st0" d="M491.16,395.96c-24.94,0-37.59-5.56-49.83-10.93-12.27-5.39-23.86-10.49-47.68-10.49s-35.41,5.09-47.68,10.49c-12.24,5.37-24.89,10.93-49.83,10.93s-37.56-5.56-49.79-10.93c-12.26-5.39-23.85-10.49-47.65-10.49s-35.39,5.09-47.66,10.49c-12.23,5.37-24.88,10.93-49.81,10.93s-37.57-5.56-49.8-10.93c-12.26-5.39-23.84-10.49-47.64-10.49-1.48,0-2.67-1.19-2.67-2.67s1.19-2.67,2.67-2.67c24.92,0,37.56,5.56,49.79,10.93,12.26,5.39,23.85,10.49,47.65,10.49s35.39-5.09,47.66-10.49c12.23-5.37,24.88-10.93,49.81-10.93s37.57,5.56,49.79,10.93c12.26,5.39,23.84,10.49,47.64,10.49s35.41-5.09,47.68-10.49c12.24-5.37,24.89-10.93,49.83-10.93s37.59,5.56,49.82,10.93c12.27,5.39,23.87,10.49,47.68,10.49,1.48,0,2.67,1.19,2.67,2.67s-1.19,2.67-2.67,2.67Z"/>
              <path className="st0" d="M491.16,454.67c-24.94,0-37.59-5.56-49.83-10.93-12.27-5.39-23.86-10.49-47.68-10.49s-35.41,5.09-47.68,10.49c-12.24,5.37-24.89,10.93-49.83,10.93s-37.56-5.56-49.79-10.93c-12.26-5.39-23.85-10.49-47.65-10.49s-35.39,5.09-47.66,10.49c-12.23,5.37-24.88,10.93-49.81,10.93s-37.57-5.56-49.8-10.93c-12.26-5.39-23.84-10.49-47.64-10.49-1.48,0-2.67-1.19-2.67-2.67s1.19-2.67,2.67-2.67c24.92,0,37.56,5.56,49.79,10.93,12.26,5.39,23.85,10.49,47.65,10.49s35.39-5.09,47.66-10.49c12.23-5.37,24.88-10.93,49.81-10.93s37.57,5.56,49.79,10.93c12.26,5.39,23.84,10.49,47.64,10.49s35.41-5.09,47.68-10.49c12.24-5.37,24.89-10.93,49.83-10.93s37.59,5.56,49.82,10.93c12.27,5.39,23.87,10.49,47.68,10.49,1.48,0,2.67,1.19,2.67,2.67s-1.19,2.67-2.67,2.67Z"/>
              <path className="st0" d="M491.16,513.38c-24.94,0-37.59-5.56-49.83-10.93-12.27-5.39-23.86-10.49-47.68-10.49s-35.41,5.09-47.68,10.49c-12.24,5.37-24.89,10.93-49.83,10.93s-37.56-5.56-49.79-10.93c-12.26-5.39-23.85-10.49-47.65-10.49s-35.39,5.09-47.66,10.49c-12.23,5.37-24.88,10.93-49.81,10.93s-37.57-5.56-49.8-10.93c-12.26-5.39-23.84-10.49-47.64-10.49-1.48,0-2.67-1.19-2.67-2.67s1.19-2.67,2.67-2.67c24.92,0,37.56,5.56,49.79,10.93,12.26,5.39,23.85,10.49,47.65,10.49s35.39-5.09,47.66-10.49c12.23-5.37,24.88-10.93,49.81-10.93s37.57,5.56,49.79,10.93c12.26,5.39,23.84,10.49,47.64,10.49s35.41-5.09,47.68-10.49c12.24-5.37,24.89-10.93,49.83-10.93s37.59,5.56,49.82,10.93c12.27,5.39,23.87,10.49,47.68,10.49,1.48,0,2.67,1.19,2.67,2.67s-1.19,2.67-2.67,2.67Z"/>
              <path className="st0" d="M491.16,572.09c-24.94,0-37.59-5.56-49.83-10.93-12.27-5.39-23.86-10.49-47.68-10.49s-35.41,5.09-47.68,10.49c-12.24,5.37-24.89,10.93-49.83,10.93s-37.56-5.56-49.79-10.93c-12.26-5.39-23.85-10.49-47.65-10.49s-35.39,5.09-47.66,10.49c-12.23,5.37-24.88,10.93-49.81,10.93s-37.57-5.56-49.8-10.93c-12.26-5.39-23.84-10.49-47.64-10.49-1.48,0-2.67-1.19-2.67-2.67s1.19-2.67,2.67-2.67c24.92,0,37.56,5.56,49.79,10.93,12.26,5.39,23.85,10.49,47.65,10.49s35.39-5.09,47.66-10.49c12.23-5.37,24.88-10.93,49.81-10.93s37.57,5.56,49.79,10.93c12.26,5.39,23.84,10.49,47.64,10.49s35.41-5.09,47.68-10.49c12.24-5.37,24.89-10.93,49.83-10.93s37.59,5.56,49.82,10.93c12.27,5.39,23.87,10.49,47.68,10.49,1.48,0,2.67,1.19,2.67,2.67s-1.19,2.67-2.67,2.67Z"/>
            </g>
          </svg>
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
        <div style={{maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center'}}>
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
        <h2 style={{fontFamily: 'Archivo', color: '#533021', fontSize: '36px', marginBottom: '16px'}}>Support the community ☕</h2>
        <p style={{fontFamily: 'Toren', color: '#533021', fontSize: '15px', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto 32px'}}>
          I built this because I couldn't stop wondering where my books ended up. If you love it too, buy me a coffee — it helps keep the lights on and the books moving.
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