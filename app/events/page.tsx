'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { useLang } from '@/lib/i18n';
import { Calendar, MapPin, Ticket, Clock } from 'lucide-react';
import Link from 'next/link';

const EVENTS = [
  {
    day: '19',
    month: 'NOV',
    year: '2026',
    time: '7:00 PM',
    venue: '"Deja de Correr"',
    city: 'London Room, San José, Costa Rica',
    description: 'El debut de Prismaklub en vivo. Una noche que marca el inicio de todo.',
    descriptionEn: 'Prismaklub\'s live debut. A night that marks the beginning of everything.',
    tickets: 'https://example.com/tickets',
    sold: false,
    featured: true,
  },
];

export default function EventsPage() {
  const { t, locale } = useLang();

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#1A1A1A]" aria-label="Events header">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4"
          >
            Live
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-['Milker'] text-5xl md:text-7xl text-[#F0EAD2]"
          >
            {t.events.title}
          </motion.h1>
        </div>
      </section>

      {/* Events list */}
      <section className="px-6 py-16" aria-label="Lista de eventos">
        <div className="max-w-7xl mx-auto">
          {EVENTS.length === 0 ? (
            <AnimatedSection className="text-center py-20">
              <Calendar size={48} className="text-[#272727] mx-auto mb-4" aria-hidden="true" />
              <p className="text-[#B8AF9A]">{t.events.noEvents}</p>
            </AnimatedSection>
          ) : (
            <div className="space-y-0 divide-y divide-[#1A1A1A]">
              {EVENTS.map((ev, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div
                    className={`py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-200 px-4 -mx-4 ${
                      ev.featured ? 'bg-[#181818] border-l-2 border-[#8B1A1A]' : 'hover:bg-[#111111]'
                    }`}
                  >
                    <div className="flex items-start md:items-center gap-6 md:gap-8">
                      {/* Date */}
                      <div className="text-center min-w-[52px]">
                        <p className="font-['Milker'] text-3xl text-[#8B1A1A] leading-none">{ev.day}</p>
                        <p className="text-[#555] text-xs tracking-widest uppercase">{ev.month}</p>
                        <p className="text-[#555] text-xs">{ev.year}</p>
                      </div>

                      <div className="w-px h-14 bg-[#272727] hidden md:block" aria-hidden="true" />

                      {/* Details */}
                      <div>
                        {ev.featured && (
                          <span className="inline-block text-[10px] font-semibold tracking-widest uppercase bg-[#8B1A1A] text-[#F0EAD2] px-2 py-0.5 mb-2">
                            {t.events.launch}
                          </span>
                        )}
                        <p className="font-['Milker'] text-xl md:text-2xl text-[#F0EAD2] mb-2 leading-tight">
                          {ev.venue}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-[#B8AF9A] mb-1">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-[#8B1A1A]" aria-hidden="true" />
                            {ev.city}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={12} className="text-[#8B1A1A]" aria-hidden="true" />
                            {ev.time}
                          </span>
                        </div>
                        <p className="text-[#B8AF9A]/70 text-sm">
                          {locale === 'en' ? ev.descriptionEn : ev.description}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    {/* 
                    <div className="md:shrink-0">
                      {ev.sold ? (
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#444] border border-[#272727] px-5 py-2.5">
                          {t.events.soldOut}
                        </span>
                      ) : (
                        <a
                          href={ev.tickets}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border border-[#8B1A1A] text-[#F0EAD2] px-5 py-2.5 hover:bg-[#8B1A1A] transition-all duration-200 cursor-pointer min-h-[44px]"
                        >
                          <Ticket size={12} aria-hidden="true" />
                          {t.events.tickets}
                        </a>
                      )}
                    </div>
                    */}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Private events CTA */}
      <section className="px-6 py-20 bg-[#181818]" aria-labelledby="private-events-heading">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4">
            {locale === 'en' ? 'Private Bookings' : 'Contrataciones privadas'}
          </p>
          <h2 id="private-events-heading" className="font-['Milker'] text-3xl md:text-4xl text-[#F0EAD2] mb-4">
            {t.events.privateTitle}
          </h2>
          <p className="text-[#B8AF9A] mb-8 max-w-lg mx-auto">{t.events.privateDesc}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#8B1A1A] text-[#F0EAD2] font-semibold text-sm tracking-widest uppercase hover:bg-[#A52020] transition-all duration-200 cursor-pointer min-h-[44px]"
          >
            {t.events.privateBtn}
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
