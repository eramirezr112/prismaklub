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
      release: 'New EP out Septiembre 2026',
    },
    about: {
      title: 'About Prismaklub',
      subtitle: 'Born in Costa Rica, 2025',
      intro: 'PRISMAKLUB is a Costa Rican band born in 2025 that builds its sound at the intersection of rock, pop, and indie, carrying the imprint of classic britpop. Their proposal combines memorable melodies, guitars that converse with one another, and a rhythmic foundation that naturally sustains every song.',
      body: 'Their lyrics explore love, identity, and questions without easy answers. Less than a year after forming, the band presents Deja De Correr, their debut EP: five songs that reveal different perspectives on the same experience, much like a prism breaks down light into different colors.',
      body2: 'Some bands are formed. Some bands just appear. PRISMAKLUB is the second kind.',
      body3: 'Formed in Costa Rica in 2025, the four members of PRISMAKLUB share a single obsession: writing honest songs that transform the hardest-to-name feelings into stories anyone can relate to.',
      body4: 'Their sound takes elements from the greats of classic rock—The Beatles, Queen, Steely Dan—and filters them through the energy and texture of Britpop, building something that sounds familiar while keeping its own distinct identity. The name says it all: a prism takes light and breaks it down into its parts. PRISMAKLUB\'s songs do the same with the human experience.',
      body5: 'Each track is a different angle on the themes that matter most: love that transforms, heartbreak that leaves a mark, and the constant search for who you are when no one is watching.',
      body6: 'There are no easy answers here; only guitars that question, voices that confess, and rhythms that don\'t stop. In August 2026, the band presents Deja De Correr, their debut EP recorded at Brilljam Studios: five songs that mark the beginning of a proposal with a clear identity.',
      body7: 'PRISMAKLUB is just beginning its journey, but it knows the direction it wants to take.',
      membersTitle: 'The Band',
      quoteText: '"Music knows no borders — only feeling."',
      quoteAuthor: '— Prismaklub',
      pressKit: 'Download Press Kit',
      pressDesc: 'High-res photos, bio, and technical rider.',
    },
    music: {
      title: 'Discography',
      subtitle: 'Listen to our latest work',
      releaseTitle: '"Deja de Correr"',
      releaseDesc: 'Deja De Correr was recorded analogously, with the band playing live in the room—capturing the real interaction among the four musicians before adding overdubs where the song called for it. It is a method that prioritizes the energy of the moment over studio perfection: layers of guitar that build the space of each song, vocal harmonies that tense and relax, and a rhythm section that breathes along with the music rather than simply holding it up.',
      releaseDesc2: 'The EP was produced by David García, who sought to keep that live-performance immediacy intact in the final recording without losing warmth or texture. The result balances moments of intensity with more intimate passages, always keeping emotion and performance at the center—nothing is superfluous.',
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
      release: 'Nuevo EP — Septiembre 2026',
    },
    about: {
      title: 'Sobre Prismaklub',
      subtitle: 'Nacidos en Costa Rica, 2025',
      intro: 'PRISMAKLUB es una banda costarricense nacida en 2025 que construye su sonido en la intersección del rock, el pop y el indie, con la huella del britpop clásico. Su propuesta combina melodías memorables, guitarras que dialogan entre sí y una base rítmica que sostiene cada canción con naturalidad.',
      body: 'Sus letras exploran el amor, la identidad y las preguntas sin respuesta fácil. A menos de un año de su formación, la banda presenta Deja De Correr, su EP debut: cinco canciones que revelan distintas perspectivas sobre una misma experiencia, como un prisma descompone la luz en diferentes colores.',
      body2: 'PRISMAKLUB no nació de un plan de negocio. Nació porque cuatro músicos ya compartían la misma obsesión y necesitaban un lugar donde hacerla sonar.',
      body3: 'Formada en Costa Rica en 2025, los cuatro integrantes de PRISMAKLUB comparten una misma obsesión: escribir canciones honestas que transforman los sentimientos más difíciles de nombrar en historias con las que cualquiera pueda identificarse.',
      body4: 'Su sonido toma elementos de los grandes del rock clásico -The Beatles, Queen, Steely Dan- y lo filtra a través de la energía y textura del britpop, construyendo algo que suena familiar, sin dejar de lado su identidad propia. El nombre lo dice todo: un prisma toma la luz y la descompone en sus partes. Las canciones de PRISMAKLUB hacen lo mismo con la experiencia humana.',
      body5: 'Cada track es un ángulo distinto sobre los temas que más importan: el amor que transforma, el desamor que deja huella, la búsqueda constante de quién eres cuando nadie te está mirando.',
      body6: 'No hay respuestas fáciles aquí; solo guitarras que preguntan, voces que confiesan y ritmos que no paran. En septiembre de 2026, la banda presenta Deja De Correr, su EP debut grabado en Brilljam Studios: cinco canciones que marcan el inicio de una propuesta con identidad clara.',
      body7: 'PRISMAKLUB apenas comienza su recorrido, pero sabe la dirección en la que lo quiere llevar.',
      membersTitle: 'La Banda',
      quoteText: '"La música no tiene fronteras — solo tiene sentimiento."',
      quoteAuthor: '— Prismaklub',
      pressKit: 'Descargar Press Kit',
      pressDesc: 'Fotos de alta resolución, bio y rider técnico.',
    },
    music: {
      title: 'Discografía',
      subtitle: 'Escucha nuestro trabajo más reciente',
      releaseTitle: '"Deja de Correr"',      
      releaseDesc: 'Deja De Correr se grabó de forma analógica, con la banda tocando en vivo en sala -capturando la interacción real entre los cuatro músicos antes de sumar overdubs donde la canción lo pedía. Es un método que prioriza la energía del momento sobre la perfección de estudio: capas de guitarra que construyen el espacio de cada canción, armonías vocales que se tensan y relajan, y una sección rítmica que respira junto a la música en lugar de simplemente sostenerla.',
      releaseDesc2: 'El EP fue producido por David García, quien buscó mantener intacta esa inmediatez del directo en la grabación final, sin perder calidez ni textura. El resultado equilibra momentos de intensidad con pasajes más íntimos, siempre con la emoción y la interpretación como centro, nada sobra.',
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
