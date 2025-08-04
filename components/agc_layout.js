export default function AGCLayout({ children }) {
  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Inter, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      color: '#333'
    }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '2rem'
        }}>
          <span style={{
            fontSize: '2rem',
            marginRight: '0.5rem'
          }}>✅</span>
          <span>AGC Simulasi 303</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Selamat datang di simulasi. Pilih topik video di bawah ini:
        </p>
        <nav>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginTop: '1rem'
          }}>
            {[
              { href: '/video/jaringan-qq', label: 'Jaringan QQ' },
              { href: '/video/dpwd-crypto', label: 'Deposit/Withdraw Crypto' },
              { href: '/video/simulasi-masuk', label: 'Simulasi Masuk Bot' },
              { href: '/video/api-scraper', label: 'API Scraper' }
            ].map(({ href, label }) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <a
                  href={href}
                  style={{
                    color: '#0066cc',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main style={{ paddingTop: '1rem', borderTop: '1px solid #ccc' }}>
        {children}
      </main>
    </div>
  );
}
