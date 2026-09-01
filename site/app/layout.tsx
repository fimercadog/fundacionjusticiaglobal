import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://fundacionjusticiaglobal.org';
const title = 'Fundación Justicia Global | Próximamente';
const description =
  'Promovemos los derechos humanos y la responsabilidad social empresarial mediante auditorías y consultorías especializadas: justicia, transparencia e integridad, lucha contra la corrupción y reducción de la desigualdad en Colombia y a nivel global.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Fundación Justicia Global',
  },
  description,
  applicationName: 'Fundación Justicia Global',
  keywords: [
    'Fundación Justicia Global',
    'derechos humanos',
    'acompañamiento jurídico',
    'gestión social',
    'justicia social',
    'orientación jurídica',
    'Colombia',
  ],
  authors: [{ name: 'Fundación Justicia Global', url: siteUrl }],
  creator: 'Fundación Justicia Global',
  publisher: 'Fundación Justicia Global',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'Fundación Justicia Global',
    title,
    description,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Fundación Justicia Global — Plataforma digital próximamente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.jpg'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/logo.png',
  },
  category: 'nonprofit',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Fundación Justicia Global',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og.jpg`,
  description,
  email: 'fundacionjusticiaglobal@gmail.com',
  telephone: '+573162462649',
  taxID: '901516277-7',
  areaServed: ['CO', 'Global'],
  knowsAbout: [
    'Derechos humanos',
    'Responsabilidad social empresarial',
    'Auditorías y consultorías',
    'Transparencia y lucha contra la corrupción',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'información',
    email: 'fundacionjusticiaglobal@gmail.com',
    telephone: '+573162462649',
    availableLanguage: ['es'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <head>
        <meta name="theme-color" content="#8fbb36" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
