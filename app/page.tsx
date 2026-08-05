'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Calendar, Music, ChevronRight, Disc3 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLang } from '@/lib/i18n';

const BAND_PHOTOS = [
  '/assets/WEB y PRESSKIT/DSC03570.jpg',
  '/assets/WEB y PRESSKIT/DSC03593.jpg',
  '/assets/WEB y PRESSKIT/DSC03634.jpg',
  '/assets/WEB y PRESSKIT/DSC03638.jpg',
  '/assets/WEB y PRESSKIT/DSC03700.jpg',
  '/assets/WEB y PRESSKIT/DSC03707.jpg',
];

const UPCOMING_EVENTS = [
  { date: 'JUN 25', venue: 'Concierto de Lanzamiento', city: 'San José, CR', sold: false },
];

export default function HomePage() {
  const { t } = useLang();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ['0%', '20%']);
  const bgOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-dvh flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Parallax background */}
        <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0">
          <Image
            src="/assets/WEB y PRESSKIT/DSC03733.jpg"
            alt="Prismaklub en vivo"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/70 via-[#0E0E0E]/20 to-[#0E0E0E]" />
          {/* Crimson vignette */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8B1A1A]/20 via-transparent to-transparent" />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Release badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#8B1A1A]/80 border border-[#8B1A1A] px-4 py-1.5 text-[#F0EAD2] text-xs font-semibold tracking-widest uppercase mb-8"
          >
            <Disc3 size={11} aria-hidden="true" />
            {t.hero.release}
          </motion.div>

          {/* Logo in hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6"
          >
            <Image
              src="/logo-prisma.png"
              alt="Prismaklub"
              width={700}
              height={96}
              className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto h-auto object-contain"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#B8AF9A] text-base md:text-lg max-w-md mx-auto mb-4 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-[#8B1A1A] text-xs font-semibold tracking-[0.4em] uppercase mb-10"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/events"
              className="px-8 py-4 bg-[#8B1A1A] text-[#F0EAD2] font-semibold text-sm tracking-widest uppercase hover:bg-[#A52020] transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              {t.hero.cta}
            </Link>
            <Link
              href="/music"
              className="px-8 py-4 border border-[#F0EAD2]/25 text-[#F0EAD2] font-semibold text-sm tracking-widest uppercase hover:border-[#F0EAD2]/70 transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
            <ArrowDown size={20} className="text-[#8B1A1A]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── EVENTS TICKER ────────────────────────────────── */}
      {UPCOMING_EVENTS.length > 0 && (
        <section className="bg-[#8B1A1A] py-4 px-6 overflow-hidden" aria-label="Próximos eventos">
          <div className="max-w-7xl mx-auto flex items-center gap-8 overflow-x-auto">
            {UPCOMING_EVENTS.map((ev, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <Calendar size={13} className="text-[#F0EAD2]/70" aria-hidden="true" />
                <span className="font-semibold text-[#F0EAD2] text-sm tracking-wide">{ev.date}</span>
                <span className="text-[#F0EAD2]/80 text-sm">{ev.venue}</span>
                <span className="text-[#F0EAD2]/50 text-xs">{ev.city}</span>
              </div>
            ))}
            <Link
              href="/events"
              className="shrink-0 flex items-center gap-1 text-[#F0EAD2] font-semibold text-sm hover:gap-2 transition-all duration-200 ml-4 cursor-pointer group"
            >
              Ver todos <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}

      {/* ── ABOUT PREVIEW ─────────────────────────────────── */}
      <section className="py-28 px-6" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/assets/WEB y PRESSKIT/DSC03570.jpg"
                alt="Prismaklub — foto de banda"
                width={1200}
                height={1600}
                className="block w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-[#8B1A1A]/30" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B1A1A]" />
              {/* Icon watermark */}
              <div className="absolute top-4 right-4 opacity-40">
                <Image src="/ico-prismaklub-2.png" alt="" width={40} height={40} aria-hidden="true" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <p className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4">
              {t.about.membersTitle}
            </p>
            <h2
              id="about-heading"
              className="font-['Milker'] text-4xl md:text-5xl text-[#F0EAD2] leading-tight mb-4"
            >
              {t.about.title}
            </h2>
            <p className="text-[#B8AF9A] text-lg leading-relaxed mb-4 font-medium">
              {t.about.intro}
            </p>
            <p className="text-[#B8AF9A] leading-relaxed mb-8">{t.about.body}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#8B1A1A] font-semibold text-sm tracking-wide hover:gap-3 transition-all duration-200 cursor-pointer group"
            >
              {t.about.subtitle}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PHOTO GRID ───────────────────────────────────── */}
      <section className="py-2 px-2" aria-label="Galería de fotos">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {BAND_PHOTOS.map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.05} className="overflow-hidden aspect-square relative group">
              <Image
                src={src}
                alt={`Prismaklub foto ${i + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 33vw, 17vw"
              />
              <div className="absolute inset-0 bg-[#8B1A1A]/0 group-hover:bg-[#8B1A1A]/10 transition-all duration-300" />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── EPK RELEASE ──────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#181818]" aria-labelledby="music-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4">
                <Music size={11} className="inline mr-2" aria-hidden="true" />
                {t.music.title}
              </p>
              <h2 id="music-heading" className="font-['Milker'] text-4xl md:text-5xl text-[#F0EAD2] mb-4">
                {t.music.releaseTitle}
              </h2>
              <p className="text-[#B8AF9A] leading-relaxed mb-8">{t.music.releaseDesc}</p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/music"
                  className="px-6 py-3 bg-[#8B1A1A] text-[#F0EAD2] font-semibold text-sm tracking-wide hover:bg-[#A52020] transition-colors duration-200 cursor-pointer min-h-[44px] flex items-center"
                >
                  {t.music.listenSpotify}
                </Link>
                <Link
                  href="/music"
                  className="px-6 py-3 border border-[#272727] text-[#B8AF9A] font-semibold text-sm tracking-wide hover:border-[#8B1A1A] hover:text-[#F0EAD2] transition-all duration-200 cursor-pointer min-h-[44px] flex items-center"
                >
                  {t.music.listenYoutube}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative aspect-square bg-[#1F1F1F] border border-[#272727] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/20 to-transparent" />
                <Image
                  src="/ico-prismaklub-1.png"
                  alt="Prismaklub — ícono de la banda"
                  width={240}
                  height={240}
                  className="relative z-10 w-1/2 h-auto object-contain"
                />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="font-['Milker'] text-[#F0EAD2] text-lg tracking-widest">DEJA DE CORRER</p>
                  <p className="text-[#8B1A1A] text-xs tracking-widest uppercase mt-1">JUL · 2026</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── EVENTS ───────────────────────────────────────── */}
      <section className="py-28 px-6" aria-labelledby="events-heading">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4">Live</p>
              <h2 id="events-heading" className="font-['Milker'] text-4xl md:text-5xl text-[#F0EAD2]">
                {t.events.title}
              </h2>
            </div>
            <Link
              href="/events"
              className="text-[#B8AF9A] hover:text-[#F0EAD2] text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer flex items-center gap-1 group"
            >
              {t.events.subtitle}
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="border-t border-[#1E1E1E] py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#111111] transition-colors duration-200 px-4 -mx-4">
              <div className="flex items-center gap-6">
                <span className="font-['Milker'] text-2xl text-[#8B1A1A] min-w-[60px]">JUN 25</span>
                <div className="w-px h-12 bg-[#272727] hidden md:block" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#F0EAD2] text-lg">{t.events.launch}</p>
                  <p className="text-[#B8AF9A] text-sm">San José, Costa Rica</p>
                </div>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border border-[#8B1A1A] text-[#F0EAD2] px-5 py-2.5 hover:bg-[#8B1A1A] transition-all duration-200 cursor-pointer min-h-[44px]"
              >
                {t.events.tickets}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BOOKING CTA ──────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#181818]" aria-labelledby="booking-cta">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="border border-[#8B1A1A]/40 p-12 relative">
            <div className="absolute top-0 left-8 right-8 h-px bg-[#8B1A1A]" aria-hidden="true" />
            <p className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4">Booking</p>
            <h2 id="booking-cta" className="font-['Milker'] text-3xl md:text-4xl text-[#F0EAD2] mb-4">
              {t.contact.title}
            </h2>
            <p className="text-[#B8AF9A] mb-8">{t.contact.subtitle}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#8B1A1A] text-[#F0EAD2] font-semibold text-sm tracking-widest uppercase hover:bg-[#A52020] transition-all duration-200 cursor-pointer min-h-[44px]"
            >
              {t.nav.contact}
            </Link>
            <div className="absolute bottom-0 left-8 right-8 h-px bg-[#8B1A1A]" aria-hidden="true" />
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
