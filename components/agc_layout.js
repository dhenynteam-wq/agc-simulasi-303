export default function AGCLayout({ children }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>✅ AGC Simulasi 303</h1>
      <nav>
        <ul>
          <li><a href="/video/jaringan-qq">Jaringan QQ</a></li>
          <li><a href="/video/dpwd-crypto">Deposit/Withdraw Crypto</a></li>
          <li><a href="/video/simulasi-masuk">Simulasi Masuk Bot</a></li>
          <li><a href="/video/api-scraper">API Scraper</a></li>
        </ul>
      </nav>
      <hr />
      <main>{children}</main>
    </div>
  );
}
