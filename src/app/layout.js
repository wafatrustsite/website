import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_INFO } from '../lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata = {
  title: {
    default: `${SITE_INFO.name} - ${SITE_INFO.tagline}`,
    template: `%s | ${SITE_INFO.name}`
  },
  description: SITE_INFO.description,
  metadataBase: new URL(SITE_INFO.url),
  openGraph: {
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    images: [
      {
        url: '/assets/hero.jpg',
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    images: ['/assets/hero.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  width: 1240,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=1240, user-scalable=yes"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var targetWidth = 1240;
                  var screenW = window.screen.width || window.innerWidth;
                  if (screenW && screenW < targetWidth) {
                    var scale = screenW / targetWidth;
                    var meta = document.querySelector('meta[name="viewport"]');
                    if (meta) {
                      meta.setAttribute('content', 'width=' + targetWidth + ', initial-scale=' + scale + ', minimum-scale=' + (scale * 0.8) + ', maximum-scale=5, user-scalable=yes');
                    }
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: SITE_INFO.name,
              url: SITE_INFO.url,
              logo: `${SITE_INFO.url}/icon-512x512.png`,
              image: `${SITE_INFO.url}/assets/hero.jpg`,
              description: SITE_INFO.description,
              telephone: SITE_INFO.phone,
              email: SITE_INFO.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: SITE_INFO.address,
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
