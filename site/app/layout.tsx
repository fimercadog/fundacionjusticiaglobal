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
  'Fundación Justicia Global prepara una plataforma digital para acercar derechos humanos, acompañamiento jurídico y gestión social a más comunidades.';

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
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  category: 'nonprofit',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Fundación Justicia Global',
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  description,
  areaServed: 'CO',
  knowsAbout: [
    'Derechos humanos',
    'Acompañamiento jurídico',
    'Gestión social',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'información',
    url: 'https://wa.me/573183993023',
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
