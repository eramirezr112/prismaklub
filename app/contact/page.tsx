'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { useLang } from '@/lib/i18n';
import { Send, CheckCircle, Share2, Play, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const { t, locale } = useLang();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Replace with real endpoint (Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#1A1A1A]" aria-label="Contact header">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#8B1A1A] text-xs font-semibold uppercase tracking-[0.4em] mb-4"
          >
            Booking & Press
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-['Milker'] text-5xl md:text-7xl text-[#F0EAD2]"
          >
            {t.contact.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#B8AF9A] mt-3 max-w-xl"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-6 py-20" aria-label="Formulario de contacto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Form */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20 border border-[#8B1A1A]/40"
                role="status"
                aria-live="polite"
              >
                <CheckCircle size={48} className="text-[#8B1A1A] mb-4" aria-hidden="true" />
                <h3 className="font-['Milker'] text-2xl text-[#F0EAD2] mb-2">
                  {locale === 'en' ? 'Sent!' : '¡Enviado!'}
                </h3>
                <p className="text-[#B8AF9A]">{t.contact.success}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-[#B8AF9A] mb-2">
                      {t.contact.name} <span aria-label="requerido" className="text-[#8B1A1A]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-[#181818] border border-[#272727] text-[#F0EAD2] px-4 py-3 text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors duration-200 placeholder:text-[#444] min-h-[44px]"
                      placeholder={locale === 'en' ? 'Your name' : 'Tu nombre'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-[#B8AF9A] mb-2">
                      {t.contact.email} <span aria-label="requerido" className="text-[#8B1A1A]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-[#181818] border border-[#272727] text-[#F0EAD2] px-4 py-3 text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors duration-200 placeholder:text-[#444] min-h-[44px]"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-widest text-[#B8AF9A] mb-2">
                    {t.contact.subject} <span aria-label="requerido" className="text-[#8B1A1A]">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-[#181818] border border-[#272727] text-[#F0EAD2] px-4 py-3 text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors duration-200 cursor-pointer min-h-[44px]"
                  >
                    <option value="" disabled>
                      {locale === 'en' ? 'Select...' : 'Seleccionar...'}
                    </option>
                    {t.contact.subjects.map((s: string) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-[#B8AF9A] mb-2">
                    {t.contact.message} <span aria-label="requerido" className="text-[#8B1A1A]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-[#181818] border border-[#272727] text-[#F0EAD2] px-4 py-3 text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors duration-200 resize-none placeholder:text-[#444]"
                    placeholder={locale === 'en' ? 'Tell us about your event or inquiry...' : 'Cuéntanos sobre tu evento o consulta...'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B1A1A] text-[#F0EAD2] font-semibold text-sm tracking-widest uppercase hover:bg-[#A52020] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer min-h-[44px]"
                  aria-busy={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>{t.contact.sending}</>
                  ) : (
                    <><Send size={14} aria-hidden="true" /> {t.contact.send}</>
                  )}
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Info panel */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2 space-y-8">

            {/* Email */}
            <div className="border-l-2 border-[#8B1A1A] pl-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8B1A1A] mb-3">Email</p>
              <a
                href="mailto:contacto@prismaklub.com"
                className="flex items-center gap-2 text-[#F0EAD2] hover:text-[#8B1A1A] transition-colors duration-200 cursor-pointer"
              >
                <Mail size={14} aria-hidden="true" />
                contacto@prismaklub.com
              </a>
            </div>

            {/* Phone */}
            <div className="border-l-2 border-[#272727] pl-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8AF9A] mb-3">
                {locale === 'en' ? 'Phone' : 'Teléfono'}
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+50670747956"
                  className="flex items-center gap-2 text-[#B8AF9A] hover:text-[#F0EAD2] transition-colors duration-200 cursor-pointer text-sm"
                >
                  <Phone size={13} aria-hidden="true" />
                  David García · +506 7074-7956
                </a>
                <a
                  href="tel:+50688761823"
                  className="flex items-center gap-2 text-[#B8AF9A] hover:text-[#F0EAD2] transition-colors duration-200 cursor-pointer text-sm"
                >
                  <Phone size={13} aria-hidden="true" />
                  Esteban Ramírez · +506 8876-1823
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="border-l-2 border-[#272727] pl-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8AF9A] mb-3">
                {locale === 'en' ? 'Social' : 'Redes Sociales'}
              </p>
              <div className="space-y-3">
                {[
                  { icon: Share2, label: 'Instagram', handle: '@prismaklub', href: 'https://instagram.com/prismaklub' },
                  { icon: Play, label: 'YouTube', handle: '@prismaklub', href: 'https://youtube.com/@prismaklub' },
                ].map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#B8AF9A] hover:text-[#F0EAD2] transition-colors duration-200 cursor-pointer text-sm"
                    aria-label={`${label}: ${handle}`}
                  >
                    <Icon size={13} aria-hidden="true" /> {handle}
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="border-l-2 border-[#272727] pl-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8AF9A] mb-3">
                {t.contact.basedIn}
              </p>
              <p className="text-[#F0EAD2] text-sm">San José, Costa Rica</p>
              <p className="text-[#555] text-xs mt-1">
                {locale === 'en'
                  ? 'Available for national and international tours.'
                  : 'Disponibles para tours nacionales e internacionales.'}
              </p>
            </div>

            {/* Response time */}
            <div className="bg-[#181818] border border-[#272727] p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8B1A1A] mb-2">
                {t.contact.responseTime}
              </p>
              <p className="text-[#B8AF9A] text-sm leading-relaxed">{t.contact.responseDesc}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
