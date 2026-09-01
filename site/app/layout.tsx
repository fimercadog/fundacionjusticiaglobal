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

export const metadata: Metadata = {
  title: 'Fundación Justicia Global | Próximamente',
  description:
    'Plataforma digital de Fundación Justicia Global para derechos humanos, acompañamiento jurídico y gestión social.',
  openGraph: {
    title: 'Fundación Justicia Global | Próximamente',
    description:
      'Plataforma digital para acercar derechos humanos y gestión social a más comunidades.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fundación Justicia Global | Próximamente',
    description:
      'Plataforma digital para acercar derechos humanos y gestión social a más comunidades.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
