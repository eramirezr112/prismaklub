'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa6';
import { useLang } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLang();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/music', label: t.nav.music },
    { href: '/events', label: t.nav.events },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/contact', label: t.nav.contact },
  ];

  const socials = [
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/prismaklubcr' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@prismaklub' },
    //{ icon: FaSpotify, label: 'Spotify', href: 'https://open.spotify.com' },
    { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61581907203890' },
  ];

  return (
    <footer className="border-t border-[#272727] bg-[#0E0E0E] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Image
              src="/logo-prisma.png"
              alt="Prismaklub"
              width={160}
              height={22}
              className="h-6 w-auto object-contain mb-4"
            />
            <p className="text-[#B8AF9A] text-sm leading-relaxed">{t.footer.tagline}</p>
            <a
              href="mailto:contacto@prismaklub.com"
              className="inline-flex items-center gap-2 text-[#B8AF9A] hover:text-[#F0EAD2] text-sm mt-3 transition-colors duration-200 cursor-pointer"
            >
              <Mail size={12} />
              contacto@prismaklub.com
            </a>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <div className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[#B8AF9A] hover:text-[#F0EAD2] transition-colors duration-200 w-fit"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#B8AF9A] uppercase mb-4">
              Síguenos
            </p>
            <div className="flex gap-3 mb-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-[#272727] flex items-center justify-center text-[#B8AF9A] hover:text-[#F0EAD2] hover:border-[#8B1A1A] hover:bg-[#8B1A1A]/20 transition-all duration-200 cursor-pointer"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
            {/* Icon */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#B8AF9A] hover:text-[#F0EAD2] transition-colors duration-200 cursor-pointer text-sm">
              <Image
                src="/ico-prismaklub-2.png"
                alt="Prismaklub icon"
                width={48}
                height={48}
                className="opacity-30 hover:opacity-60 transition-opacity duration-300"
              />
            </Link>
          </div>
        </div>

        <div className="border-t border-[#1A1A1A] pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#555]">
            © {new Date().getFullYear()} Prismaklub. {t.footer.rights}
          </p>
          <p className="text-xs text-[#555]">San José, Costa Rica</p>
        </div>
      </div>
    </footer>
  );
}
