'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Locale = 'en' | 'es';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      music: 'Discography',
      events: 'Shows',
      gallery: 'Gallery',
      contact: 'Contact',
      booking: 'Book Us',
    },
    hero: {
      tagline: 'Rock from Costa Rica',
      subtitle: 'The same light, seen from every angle. Rock with melodies that stick.',
      cta: 'See Upcoming Shows',
      ctaSecondary: 'Listen Now',
      release: 'New EPK out July 2026',
    },
    about: {
      title: 'About Prismaklub',
      subtitle: 'Born in Costa Rica, 2025',
      intro: 'PRISMAKLUB is a Costa Rican band born in 2025, building their sound at the crossroads of rock, pop, and indie — with the unmistakable fingerprint of classic britpop. Guitars that talk to each other, voices that confess, bass and drums holding everything together.',
      body: 'Their songs explore love, identity, and the questions that don\'t have easy answers. Less than a year into their existence, the band releases Deja De Correr, their debut EP: five songs that work like a prism — the same light, seen from every angle.',
      body2: 'Some bands are formed. Some bands just appear. PRISMAKLUB is the second kind.',
      body3: 'Born in Costa Rica in 2025, the four members of PRISMAKLUB share a single obsession: finding in music the place where the hardest feelings to name finally take shape. Their sound draws from the great rock classics — The Beatles, Queen, Steely Dan — and filters them through the energy and texture of britpop, building something that feels at once familiar and impossible to pin down.',
      body4: 'The name says it all: a prism takes light and breaks it apart. PRISMAKLUB\'s songs do the same with human experience. Each track is a different angle on the things that matter most — love that changes you, heartbreak that teaches you, the endless search for who you are when no one\'s watching. There are no easy answers here — just guitars that question, voices that confess, and rhythms that won\'t stop.',
      body5: 'In July 2026, the band releases Deja De Correr, their debut EP recorded at Brilljam Studios: five songs that work as a statement of intent. An introduction, yes — but also a promise. PRISMAKLUB is here, and they\'re just getting started.',
      membersTitle: 'The Band',
      quoteText: '"Music knows no borders — only feeling."',
      quoteAuthor: '— Prismaklub',
      pressKit: 'Download Press Kit',
      pressDesc: 'High-res photos, bio, and technical rider.',
    },
    music: {
      title: 'Discography',
      subtitle: 'Listen to our latest work',
      releaseTitle: '"Deja de Correr" — EPK',
      releaseDesc: 'First EP: five songs that work as a statement of intent. An introduction, yes — but also a promise. PRISMAKLUB is here, and they\'re just getting started. Recorded at Brilljam Studios, their official release is in July 2026',
      listenSpotify: 'Listen on Spotify',
      listenYoutube: 'Watch on YouTube',
      albumsTitle: 'Releases',
      comingSoon: 'Coming Soon',
    },
    events: {
      title: 'Upcoming Shows',
      subtitle: 'Catch us live',
      launch: 'Launch Concert',
      launchDesc: 'Our debut live show — an event that marks a milestone in our career.',
      tickets: 'Get Tickets',
      soldOut: 'Sold Out',
      noEvents: 'No upcoming shows right now. Check back soon.',
      privateTitle: 'Book Us for Your Event',
      privateDesc: 'Available for private events, weddings, festivals, and more. Contact us for a quote.',
      privateBtn: 'Contact Us',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Moments from the stage and beyond',
    },
    contact: {
      title: 'Book Us',
      subtitle: 'Bookings, press & collaborations',
      name: 'Your Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent! We\'ll be in touch soon.',
      error: 'Something went wrong. Please try again.',
      subjects: ['Booking Inquiry', 'Press & Media', 'Collaboration', 'Other'],
      responseTime: 'Response time',
      responseDesc: 'We reply within 24–48 business hours. For urgent matters, reach us on Instagram.',
      basedIn: 'Based in',
    },
    footer: {
      tagline: 'Rock from Costa Rica to the world.',
      rights: 'All rights reserved.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      music: 'Discografía',
      events: 'Shows',
      gallery: 'Galería',
      contact: 'Contacto',
      booking: 'Contrátanos',
    },
    hero: {
      tagline: 'Rock desde Costa Rica',
      subtitle: 'La misma luz vista desde todos sus ángulos. Rock con melodías que no se olvidan.',
      cta: 'Ver Próximos Shows',
      ctaSecondary: 'Escúchanos',
      release: 'Nuevo EPK — Julio 2026',
    },
    about: {
      title: 'Sobre Prismaklub',
      subtitle: 'Nacidos en Costa Rica, 2025',
      intro: 'PRISMAKLUB es una banda costarricense nacida en 2025 que construye su sonido en la intersección del rock, el pop y el indie, con la huella del britpop clásico. Guitarras que dialogan, voces que confiesan, bajo y batería que lo sostienen todo.',
      body: 'Sus canciones exploran el amor, la identidad y las preguntas sin respuesta fácil. A menos de un año de su formación, la banda presenta Deja De Correr, su EP debut: cinco canciones que funcionan como un primer prisma —la misma luz vista desde todos sus ángulos.',
      body2: 'Hay bandas que se forman. Hay bandas que aparecen. PRISMAKLUB pertenece al segundo tipo.',
      body3: 'Nacidos en Costa Rica en 2025, los cuatro integrantes de PRISMAKLUB comparten una misma obsesión: encontrar en la música el lugar donde los sentimientos más difíciles de nombrar finalmente cobran forma. Su sonido bebe de los grandes del rock clásico —The Beatles, Queen, Steely Dan— y lo filtra a través de la energía y la textura del britpop, construyendo algo que suena a la vez familiar e imposible de encasillar.',
      body4: 'El nombre lo dice todo: un prisma toma la luz y la descompone en sus partes. Las canciones de PRISMAKLUB hacen lo mismo con la experiencia humana. Cada track es un ángulo distinto sobre los temas que más importan: el amor que transforma, el desamor que enseña, la búsqueda constante de quién eres cuando nadie te está mirando. No hay respuestas fáciles aquí —solo guitarras que preguntan, voces que confiesan y ritmos que no paran.',
      body5: 'En julio de 2026, la banda lanza Deja De Correr, su primer EP grabado en Brilljam Studios: cinco canciones que funcionan como una declaración de intenciones. Una presentación, sí, pero también una promesa. PRISMAKLUB está aquí, y apenas empieza.',
      membersTitle: 'La Banda',
      quoteText: '"La música no tiene fronteras — solo tiene sentimiento."',
      quoteAuthor: '— Prismaklub',
      pressKit: 'Descargar Press Kit',
      pressDesc: 'Fotos de alta resolución, bio y rider técnico.',
    },
    music: {
      title: 'Discografía',
      subtitle: 'Escucha nuestro trabajo más reciente',
      releaseTitle: '"Deja de Correr" — EPK',      
      releaseDesc: 'Primer EP: cinco canciones que funcionan como una declaración de intenciones. Una presentación, sí, pero también una promesa. PRISMAKLUB está aquí, y apenas empieza. Grabado en Brilljam Studio, su lanzamiento oficial es en Julio 2026',
      listenSpotify: 'Escuchar en Spotify',
      listenYoutube: 'Ver en YouTube',
      albumsTitle: 'Lanzamientos',
      comingSoon: 'Próximamente',
    },
    events: {
      title: 'Próximos Shows',
      subtitle: 'Véanos en vivo',
      launch: 'Concierto de Lanzamiento',
      launchDesc: 'Nuestro primer show en vivo — un hito en nuestra carrera.',
      tickets: 'Comprar Boletos',
      soldOut: 'Agotado',
      noEvents: 'No hay shows próximos por el momento. ¡Vuelve pronto!',
      privateTitle: '¿Quieres Contratarnos?',
      privateDesc: 'Disponibles para eventos privados, bodas, festivales y más. Escríbenos para cotización.',
      privateBtn: 'Contáctanos',
    },
    gallery: {
      title: 'Galería',
      subtitle: 'Momentos del escenario y más allá',
    },
    contact: {
      title: 'Contrátanos',
      subtitle: 'Contrataciones, prensa y colaboraciones',
      name: 'Tu Nombre',
      email: 'Correo Electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado! Nos pondremos en contacto pronto.',
      error: 'Algo salió mal. Por favor intenta de nuevo.',
      subjects: ['Solicitud de Contratación', 'Prensa y Medios', 'Colaboración', 'Otro'],
      responseTime: 'Tiempo de respuesta',
      responseDesc: 'Respondemos dentro de 24–48 horas hábiles. Para urgencias, escríbenos por Instagram.',
      basedIn: 'Ubicados en',
    },
    footer: {
      tagline: 'Rock desde Costa Rica para el mundo.',
      rights: 'Todos los derechos reservados.',
    },
  },
} as const;

export type Translations = typeof translations.en | typeof translations.es;

interface LangContextType {
  locale: Locale;
  t: Translations;
  toggle: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');
  const toggle = () => setLocale(l => (l === 'en' ? 'es' : 'en'));
  return (
    <LangContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}
