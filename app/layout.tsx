import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Prismaklub — Rock desde Costa Rica',
    template: '%s · Prismaklub',
  },
  description:
    'Banda de rock costarricense. Fusión de lo retro y lo moderno. Shows en vivo, música y más. · Costa Rican rock band. Retro meets modern. Live shows, music, and more.',
  keywords: ['Prismaklub', 'rock', 'Costa Rica', 'banda', 'música en vivo', 'live music', 'Deja de Correr'],
  metadataBase: new URL('https://prismaklub.com'),
  openGraph: {
    title: 'Prismaklub',
    description: 'Rock desde Costa Rica para el mundo.',
    images: ['/ico-prismaklub-1.png'],
    type: 'website',
  },
  icons: {
    icon: '/ico-prismaklub-2.png',
    apple: '/ico-prismaklub-1.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/fonts/Milker.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </head>
      <body>
        <LangProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#8B1A1A] focus:text-[#F0EAD2] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
          >
            Saltar al contenido principal
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
