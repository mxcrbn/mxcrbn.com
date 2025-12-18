import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://mxcrbn.com'),
  title: "Welcome - mxcrbn",
  description: "Welcome! I'm Max, a YC alum turned VC focused on commercial open source software. I publish thoughts about open source & startups.",
  keywords: ["Max Corbani", "mxcrbn", "Y Combinator", "VC", "venture capital", "open source", "OSS", "infrastructure", "devtools", "startups"],
  authors: [{ name: "Max Corbani" }],
  creator: "Max Corbani",
  publisher: "Max Corbani",
  icons: {
    icon: '/favicon.png',
    apple: '/webclip.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mxcrbn.com',
    siteName: 'Max Corbani',
    title: 'Welcome - mxcrbn',
    description: "Welcome! I'm Max, a YC alum turned VC focused on commercial open source software. I publish thoughts about open source & startups.",
    images: [{
      url: '/og-home.png',
      width: 1200,
      height: 627,
      alt: 'Max Corbani',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mxcrbn',
    creator: '@mxcrbn',
    title: 'Welcome - mxcrbn',
    description: "Welcome! I'm Max, a YC alum turned VC focused on commercial open source software.",
    images: ['/og-home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // You'll need to add this after Google Search Console setup
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Max Corbani",
    "alternateName": "mxcrbn",
    "url": "https://mxcrbn.com",
    "image": "https://mxcrbn.com/webclip.png",
    "jobTitle": "Venture Capitalist",
    "description": "YC alum turned VC, focused on commercial open source software, infra and devtools.",
    "sameAs": [
      "https://x.com/mxcrbn",
      "https://www.linkedin.com/in/mxcrbn"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Y Combinator"
    },
    "knowsAbout": ["Open Source Software", "Venture Capital", "Infrastructure", "Developer Tools", "Startups"]
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSansMono.css" />
        <link rel="canonical" href="https://mxcrbn.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <div style={{ marginTop: '6vh' }}></div>
        <div className="w-full flex justify-center">
          <main className="w-full py-12 pt-24" style={{ paddingLeft: '15%', paddingRight: '15%', maxWidth: '2000px' }}>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
