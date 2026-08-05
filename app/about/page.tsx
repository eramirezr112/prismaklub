'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { useLang } from '@/lib/i18n';

const MEMBERS = [
  {
    name: 'David García',
    role: 'Batería · Voz',
    roleEn: 'Drums · Lead Vocals',
    photo: '/assets/WEB y PRESSKIT/DSC03649.jpg',
  },
  {
    name: 'Gabriel Lara',
    role: 'Guitarra Eléctrica',
    roleEn: 'Electric Guitar',
    photo: '/assets/WEB y PRESSKIT/DSC03689.jpg',
  },
  {
    name: 'Ariel Badilla',
    role: 'Bajo · Voz',
    roleEn: 'Bass · Vocals',
    photo: '/assets/WEB y PRESSKIT/DSC03651.jpg',
  },
  {
    name: 'Esteban Ramírez',
    role: 'Guitarra · Voz',
    roleEn: 'Guitar · Vocals',
    photo: '/assets/WEB y PRESSKIT/DSC03678.jpg',
  },
];

export default function AboutPage() {
  const { t, locale } = useLang();

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        aria-label="About hero"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/assets/WEB y PRESSKIT/DSC03733.jpg"
            alt=""
            fill
            className="object-cover grayscale opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/80 to-[#0E0E0E]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B1A1A]/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4"
          >
            {t.about.membersTitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Milker'] text-5xl md:text-7xl text-[#F0EAD2] leading-tight max-w-2xl"
          >
            {t.about.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#B8AF9A] mt-3 text-lg"
          >
            {t.about.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────── */}
      <section className="py-20 px-6" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="left" className="space-y-6">
            <p className="text-[#F0EAD2] text-xl leading-relaxed font-medium">
              {t.about.intro}
            </p>
            <p className="text-[#B8AF9A] leading-relaxed">{t.about.body}</p>
            <p className="text-[#B8AF9A] leading-relaxed">{t.about.body2}</p>
            <p className="text-[#B8AF9A] leading-relaxed">{t.about.body3}</p>
            <p className="text-[#B8AF9A] leading-relaxed">{t.about.body4}</p>
            <p className="text-[#B8AF9A] leading-relaxed">{t.about.body5}</p>

            {/* Blockquote */}
            <blockquote className="border-l-2 border-[#8B1A1A] pl-6 mt-8">
              <p className="text-[#F0EAD2] text-lg italic">
                {t.about.quoteText}
              </p>
              <footer className="text-[#8B1A1A] text-sm mt-2 tracking-wide">
                {t.about.quoteAuthor}
              </footer>
            </blockquote>
          </AnimatedSection>

          <AnimatedSection direction="right" className="space-y-4">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/assets/WEB y PRESSKIT/DSC03757.jpg"
                alt="Prismaklub — foto de banda"
                width={1600}
                height={2000}
                className="block w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-[#8B1A1A]/20" />
            </div>

            {/* Influences */}
            <div className="bg-[#181818] border border-[#272727] p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8B1A1A] mb-3">
                {locale === "en" ? "Influences" : "Influencias"}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "The Beatles",
                  "Steely Dan",
                  "Classic Rock",
                  "Latin Soul",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#B8AF9A] border border-[#272727] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <section
              className="pt-16 pb-16 border-b border-[#1A1A1A]"
              aria-label="Music header"
            >
              <div className="relative z-10 max-w-7xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-['Milker'] text-5xl md:text-7xl text-[#F0EAD2]"
                >
                  {locale === "en" ? "The Sound" : "El sonido"}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-[#B8AF9A] mt-3 text-lg"
                >
                  {locale === "en"
                    ? "Rock with melodies that stick, pop without compromise, and one foot always planted in britpop. PRISMAKLUB sounds like what might happen if The Beatles and Steely Dan had grown up listening to Oasis: layered guitars searching for each other, vocal harmonies that pull and release, and a rhythm section that gives everything exactly the space it needs to breathe. Nothing extra. Nothing missing."
                    : "Rock con melodías que no se olvidan, pop sin concesiones y un pie siempre puesto en el britpop. PRISMAKLUB suena como si The Beatles y Steely Dan hubieran crecido escuchando Oasis: capas de guitarras que se buscan, armonías vocales que se tensan y relajan, y una sección rítmica que da el espacio exacto para que todo respire. Nada sobra. Nada falta."}
                </motion.p>
              </div>
            </section>

          </AnimatedSection>
        </div>
      </section>

      {/* ── MEMBERS ──────────────────────────────────────── */}
      <section
        className="py-20 px-6 bg-[#181818]"
        aria-labelledby="members-heading"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4">
              {t.about.membersTitle}
            </p>
            <h2
              id="members-heading"
              className="font-['Milker'] text-4xl md:text-5xl text-[#F0EAD2]"
            >
              {locale === "en" ? "The Musicians" : "Los Músicos"}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {MEMBERS.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={`${member.name} — ${locale === "en" ? member.roleEn : member.role}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/90 via-[#0E0E0E]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-['Milker'] text-[#F0EAD2] text-lg leading-tight">
                      {member.name}
                    </p>
                    <p className="text-[#8B1A1A] text-xs tracking-wide mt-0.5">
                      {locale === "en" ? member.roleEn : member.role}
                    </p>
                  </div>
                  {/* Red accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B1A1A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS KIT ─────────────────────────────────────── */}
      <section className="py-20 px-6" aria-label="Press kit">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="border border-[#272727] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#8B1A1A]/40 transition-colors duration-300">
              <div className="flex items-center gap-5">
                <Image
                  src="/ico-prismaklub-1.png"
                  alt="Prismaklub icon"
                  width={56}
                  height={56}
                  className="opacity-70"
                />
                <div>
                  <p className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-1">
                    Press
                  </p>
                  <h3 className="font-['Milker'] text-2xl text-[#F0EAD2]">
                    Press Kit
                  </h3>
                  <p className="text-[#B8AF9A] text-sm mt-1">
                    {t.about.pressDesc}
                  </p>
                </div>
              </div>
              <a
                href="mailto:contacto@prismaklub.com?subject=Press Kit"
                className="inline-flex items-center justify-center px-8 py-3 border border-[#8B1A1A] text-[#F0EAD2] text-sm font-semibold tracking-wide hover:bg-[#8B1A1A] transition-all duration-200 cursor-pointer whitespace-nowrap min-h-[44px]"
              >
                {t.about.pressKit}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
