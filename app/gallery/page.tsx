'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { useLang } from '@/lib/i18n';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PHOTOS = [
  { src: '/assets/WEB y PRESSKIT/DSC03570.jpg', alt: 'Prismaklub en vivo 1' },
  { src: '/assets/WEB y PRESSKIT/DSC03593.jpg', alt: 'Prismaklub en vivo 2' },
  { src: '/assets/WEB y PRESSKIT/DSC03634.jpg', alt: 'Prismaklub en vivo 3' },
  { src: '/assets/WEB y PRESSKIT/DSC03638.jpg', alt: 'Prismaklub en vivo 4' },
  { src: '/assets/WEB y PRESSKIT/DSC03700.jpg', alt: 'Prismaklub en vivo 5' },
  { src: '/assets/WEB y PRESSKIT/DSC03707.jpg', alt: 'Prismaklub en vivo 6' },
  { src: '/assets/WEB y PRESSKIT/DSC03709.jpg', alt: 'Prismaklub en vivo 7' },
  { src: '/assets/WEB y PRESSKIT/DSC03733.jpg', alt: 'Prismaklub en vivo 8' },
  { src: '/assets/WEB y PRESSKIT/DSC03757.jpg', alt: 'Prismaklub en vivo 9' },
  { src: '/assets/WEB y PRESSKIT/DSC03765.jpg', alt: 'Prismaklub en vivo 10' },
  { src: '/assets/WEB y PRESSKIT/DSC03766.jpg', alt: 'Prismaklub en vivo 11' },
];

export default function GalleryPage() {
  const { t, locale } = useLang();
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setSelected(i => (i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : 0));
  const next = () => setSelected(i => (i !== null ? (i + 1) % PHOTOS.length : 0));

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#1A1A1A]" aria-label="Gallery header">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4"
          >
            {locale === 'en' ? 'Photos' : 'Fotos'}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-['Milker'] text-5xl md:text-7xl text-[#F0EAD2]"
          >
            {t.gallery.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#B8AF9A] mt-3"
          >
            {t.gallery.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="px-2 py-2" aria-label="Galería fotográfica">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1">
          {PHOTOS.map((photo, i) => (
            <AnimatedSection key={i} delay={i * 0.04} className="break-inside-avoid">
              <button
                className="relative w-full overflow-hidden cursor-pointer group block focus-visible:outline-2 focus-visible:outline-[#8B1A1A]"
                onClick={() => setSelected(i)}
                aria-label={`${locale === 'en' ? 'View photo' : 'Ver foto'} ${i + 1}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={800}
                  className="w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#8B1A1A]/0 group-hover:bg-[#8B1A1A]/15 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 border border-[#F0EAD2]/60 flex items-center justify-center bg-black/20">
                    <span className="text-[#F0EAD2] text-lg leading-none" aria-hidden="true">+</span>
                  </div>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${locale === 'en' ? 'Photo' : 'Foto'} ${selected + 1} ${locale === 'en' ? 'of' : 'de'} ${PHOTOS.length}`}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={PHOTOS[selected].src}
                alt={PHOTOS[selected].alt}
                width={1200}
                height={900}
                className="w-full h-full object-contain max-h-[85vh]"
              />
            </motion.div>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 border border-[#F0EAD2]/20 flex items-center justify-center text-[#F0EAD2] hover:border-[#8B1A1A] hover:bg-[#8B1A1A] transition-all duration-200 cursor-pointer"
              aria-label={locale === 'en' ? 'Previous photo' : 'Foto anterior'}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 border border-[#F0EAD2]/20 flex items-center justify-center text-[#F0EAD2] hover:border-[#8B1A1A] hover:bg-[#8B1A1A] transition-all duration-200 cursor-pointer"
              aria-label={locale === 'en' ? 'Next photo' : 'Foto siguiente'}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-11 h-11 border border-[#F0EAD2]/20 flex items-center justify-center text-[#F0EAD2] hover:border-[#8B1A1A] hover:bg-[#8B1A1A] transition-all duration-200 cursor-pointer"
              aria-label={locale === 'en' ? 'Close' : 'Cerrar'}
            >
              <X size={18} aria-hidden="true" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#B8AF9A] text-xs tracking-widest" aria-live="polite">
              {selected + 1} / {PHOTOS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
