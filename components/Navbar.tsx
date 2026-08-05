'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export default function Navbar() {
  const { t, locale, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/music', label: t.nav.music },
    { href: '/events', label: t.nav.events },
    { href: '/gallery', label: t.nav.gallery },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0E0E0E]/92 backdrop-blur-md border-b border-[#272727]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Prismaklub — inicio">
            <Image
              src="/logo-prisma.png"
              alt="Prismaklub"
              width={180}
              height={25}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Navegación principal">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  pathname === href
                    ? 'text-[#F0EAD2]'
                    : 'text-[#B8AF9A] hover:text-[#F0EAD2]'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#8B1A1A] transition-all duration-200 ${
                    pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right — lang toggle + booking CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggle}
              className="text-xs font-semibold tracking-widest text-[#B8AF9A] hover:text-[#F0EAD2] transition-colors duration-200 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={`Cambiar idioma a ${locale === 'en' ? 'Español' : 'English'}`}
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold tracking-wide border border-[#8B1A1A] text-[#F0EAD2] hover:bg-[#8B1A1A] transition-all duration-200 cursor-pointer min-h-[44px] flex items-center"
            >
              {t.nav.booking}
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              className="text-xs font-semibold tracking-widest text-[#B8AF9A] cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Cambiar idioma"
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="text-[#F0EAD2] cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0E0E0E]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            {/* Logo in mobile menu */}
            <Image
              src="/logo-prisma.png"
              alt="Prismaklub"
              width={200}
              height={28}
              className="h-8 w-auto object-contain mb-4 opacity-40"
            />

            {links.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`font-['Milker'] text-3xl tracking-widest transition-colors duration-200 ${
                    pathname === href ? 'text-[#8B1A1A]' : 'text-[#F0EAD2] hover:text-[#8B1A1A]'
                  }`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-8 py-3 border border-[#8B1A1A] text-[#F0EAD2] font-['Milker'] tracking-widest text-sm hover:bg-[#8B1A1A] transition-all duration-200"
              >
                {t.nav.booking}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
