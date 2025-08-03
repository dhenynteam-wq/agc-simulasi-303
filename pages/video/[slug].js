import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function VideoPage() {
  const router = useRouter();
  const { slug } = router.query;

  const pageTitle = slug
    ? decodeURIComponent(slug.replace(/-/g, " ")).replace(/\.html$/, "")
    : "Loading...";

  const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // dummy video

  return (
    <>
      <Head>
        <title>{pageTitle} | AGC Simulasi 303</title>
        <meta name="description" content={`Streaming ${pageTitle} HD online`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={`Streaming ${pageTitle} HD`} />
        <meta property="og:image" content="https://via.placeholder.com/1200x630.png?text=AGC+Simulasi+303" />
        <meta property="og:type" content="video.other" />
        <link rel="canonical" href={`https://agc-simulasi.vercel.app/video/${slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: pageTitle,
              description: `Watch ${pageTitle} in HD`,
              thumbnailUrl: "https://via.placeholder.com/1200x630.png?text=AGC+Simulasi+303",
              uploadDate: "2025-01-01T00:00:00Z",
              contentUrl: videoURL,
              embedUrl: videoURL,
              publisher: {
                "@type": "Organization",
                name: "Simulasi AGC",
                logo: {
                  "@type": "ImageObject",
                  url: "https://via.placeholder.com/150x50.png?text=Logo",
                },
              },
            }),
          }}
        />
      </Head>

      <main className="min-h-screen p-6 bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">{pageTitle}</h1>
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={videoURL}
            title={pageTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-8">
          <Link href="https://ipoderac.org" target="_blank" className="text-blue-400 underline">
            Klik di sini untuk akses mirror eksternal
          </Link>
        </div>
      </main>
    </>
  );
}

// File location: /pages/video/[slug].js
