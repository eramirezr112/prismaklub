'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { useLang } from '@/lib/i18n';
import { Music, Play, ExternalLink, Disc3 } from 'lucide-react';

export default function MusicPage() {
  const { t, locale } = useLang();

  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16 px-6 border-b border-[#1A1A1A]"
        aria-label="Music header"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4"
          >
            {locale === "en" ? "Discography" : "Discografía"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-['Milker'] text-5xl md:text-7xl text-[#F0EAD2]"
          >
            {t.music.title}
          </motion.h1>
        </div>
      </section>

      {/* Featured release */}
      <section className="px-6 py-20" aria-labelledby="featured-release">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Cover art */}
          <AnimatedSection direction="left">
            <div className="relative aspect-square bg-[#181818] border border-[#272727] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/30 to-transparent" />
              <Image
                src="/assets/discografia/portada-ep-deja-de-correr.png"
                alt="Deja de Correr — portada del EP"
                width={1254}
                height={1254}
                className="relative z-10 w-full h-auto object-contain"
              />
              <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                <p className="font-['Milker'] text-[#F0EAD2] text-2xl tracking-widest">
                  DEJA DE CORRER
                </p>
                <p className="text-[#8B1A1A] text-xs tracking-[0.3em] uppercase mt-1">
                  EP · SEP · 2026
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection direction="right" delay={0.1}>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase bg-[#8B1A1A] text-[#F0EAD2] px-2 py-1 mb-4">
              <Disc3 size={10} aria-hidden="true" />{" "}
              {locale === "en" ? "New Release" : "Nuevo Lanzamiento"}
            </span>
            <h2
              id="featured-release"
              className="font-['Milker'] text-3xl md:text-4xl text-[#F0EAD2] mb-4"
            >
              {t.music.releaseTitle}
            </h2>
            <p className="text-[#B8AF9A] leading-relaxed mb-4">
              {t.music.releaseDesc}
            </p>
            <p className="text-[#B8AF9A] leading-relaxed mb-8">
              {t.music.releaseDesc2}
            </p>
            {/*
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] text-black font-semibold text-sm tracking-wide hover:bg-[#1ed760] transition-colors duration-200 cursor-pointer min-h-[44px]"
                aria-label={t.music.listenSpotify}
              >
                <Music size={14} aria-hidden="true" /> {t.music.listenSpotify}
              </a>
              <a
                href="https://youtube.com/@prismaklub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#272727] text-[#B8AF9A] font-semibold text-sm tracking-wide hover:border-[#8B1A1A] hover:text-[#F0EAD2] transition-all duration-200 cursor-pointer min-h-[44px]"
                aria-label={t.music.listenYoutube}
              >
                <Play size={14} aria-hidden="true" /> {t.music.listenYoutube}{" "}
                <ExternalLink size={11} aria-hidden="true" />
              </a>
            </div>
            */}
          </AnimatedSection>
        </div>
      </section>

      {/* Spotify embed */}
      {/*
      <section className="px-6 pb-20" aria-label="Spotify player">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="bg-[#181818] border border-[#272727] p-8">
            <p className="text-[#B8AF9A] text-sm mb-4 flex items-center gap-2">
              <Music size={13} className="text-[#1DB954]" aria-hidden="true" />
              {locale === "en" ? "Listen on Spotify" : "Escúchanos en Spotify"}
            </p>            

            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px", marginBottom: "12px" }}
              src="https://open.spotify.com/embed/track/223UJ1Bp00cc5hvc64YMkC?utm_source=generator&theme=0&si=bf928c685d244516"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px", marginBottom: "12px" }}
              src="https://open.spotify.com/embed/track/1R4tzo2Vl2u9K9k0DpALmA?utm_source=generator&theme=0&si=f0dcfeef37f2462b"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </AnimatedSection>
        </div>
      </section>
      */}
      {/* YouTube */}
      {/*
      <section
        className="px-6 py-20 bg-[#181818]"
        aria-labelledby="video-heading"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <p className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4">
              <Play size={11} className="inline mr-2" aria-hidden="true" />
              Video
            </p>
            <h2
              id="video-heading"
              className="font-['Milker'] text-3xl text-[#F0EAD2]"
            >
              {locale === "en" ? "Music Videos" : "Videos Musicales"}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-[#1F1F1F] border border-[#272727] p-2 aspect-video">              
              <iframe
                src="https://www.youtube.com/embed/QZwRdrPGwGo?si=aK8urrVxt2A9CszG"
                title={
                  locale === "en"
                    ? "No Hay Lugar — Official Video"
                    : "No Hay Lugar — Video Oficial"
                }
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-6">
            <a
              href="https://youtube.com/@prismaklub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#8B1A1A] text-[#F0EAD2] px-6 py-3 text-sm font-semibold hover:bg-[#8B1A1A] transition-all duration-200 cursor-pointer min-h-[44px]"
            >
              <Play size={14} aria-hidden="true" /> {t.music.listenYoutube}{" "}
              <ExternalLink size={11} aria-hidden="true" />
            </a>
          </AnimatedSection>
        </div>
      </section>
      */}
    </>
  );
}
