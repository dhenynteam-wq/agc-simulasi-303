export default function AGCLayout({ children }) {
  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      color: '#222',
      lineHeight: 1.6,
      maxWidth: '700px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>✅</span> <span>AGC Simulasi 303</span>
        </h1>
        <nav style={{ marginTop: '1rem' }}>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><a href="/video/jaringan-qq">Jaringan QQ</a></li>
            <li><a href="/video/dpwd-crypto">Deposit/Withdraw Crypto</a></li>
            <li><a href="/video/simulasi-masuk">Simulasi Masuk Bot</a></li>
            <li><a href="/video/api-scraper">API Scraper</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <style jsx>{`
        a {
          color: #0056b3;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}

