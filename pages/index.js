import AGCLayout from '../components/agc_layout';

export default function Home() {
  return (
    <AGCLayout>
      <p>Contoh halaman utama berhasil jalan di Vercel.</p>
      <ul>
        <li><a href="/video/jaringan-qq">Jaringan QQ</a></li>
        <li><a href="/video/dpwd-crypto">Deposit/Withdraw Crypto</a></li>
        <li><a href="/video/simulasi-masuk">Simulasi Masuk Bot</a></li>
        <li><a href="/video/api-scraper">API Scraper</a></li>
      </ul>
    </AGCLayout>
  );
}

