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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/assets/logo.png" sizes="any" />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
