'use client';

import {
  Briefcase,
  ClipboardList,
  GraduationCap,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { useEffect } from 'react';
import type { CSSProperties } from 'react';

const phone = '573162462649';
const whatsappUrl =
  `https://wa.me/${phone}?text=Hola%2C%20quiero%20recibir%20orientaci%C3%B3n%20de%20la%20Fundaci%C3%B3n%20Justicia%20Global.`;
const email = 'fundacionjusticiaglobal@gmail.com';
const mailtoUrl = `mailto:${email}?subject=Informaci%C3%B3n%20Fundaci%C3%B3n%20Justicia%20Global`;
const nit = '901.516.277-7';
const siteHost = 'fundacionjusticiaglobal.org';

// The foundation's 4 registered pillars (CIIU 7020, 8559, 6910, 9499).
const services = [
  {
    title: 'Educación Continuada',
    body: 'Diseñamos y ejecutamos programas de formación, diplomados, seminarios y talleres en derechos humanos, sostenibilidad y participación ciudadana para comunidades, servidores públicos y líderes sociales.',
    tone: 'bg-[#5e982f]',
    icon: GraduationCap,
  },
  {
    title: 'Consultoría de Gestión',
    body: 'Asesoramos a entidades públicas, privadas y de la sociedad civil en la implementación y evaluación de estándares de derechos humanos, debida diligencia, gobernanza y responsabilidad social empresarial.',
    tone: 'bg-[#f7931d]',
    icon: Briefcase,
  },
  {
    title: 'Formulación y Gestión de Proyectos',
    body: 'Estructuramos y ejecutamos proyectos de desarrollo social, humanitario y ambiental ante organismos de cooperación, para mejorar las condiciones de vida de las poblaciones objetivo.',
    tone: 'bg-[#1f3d1a]',
    icon: ClipboardList,
  },
  {
    title: 'Auditoría Social de Impacto y Cumplimiento Normativo',
    body: 'Realizamos auditorías sociales, veedurías ciudadanas y análisis jurídicos sobre la gestión pública y privada, verificando el cumplimiento de estándares de derechos humanos y transparencia.',
    tone: 'bg-[#c9701a]',
    icon: ShieldCheck,
  },
];

const ciiuCodes = [
  '7020 — Actividades de consultoría de gestión',
  '8559 — Otros tipos de educación n.c.p.',
  '6910 — Actividades jurídicas',
  '9499 — Actividades de otras asociaciones n.c.p.',
];

const commitment =
  'Promover los derechos humanos, la transparencia y la justicia social para construir un mundo más equitativo y sostenible.';

// Organizational structure — real leadership, published for public contact.
const team = [
  {
    name: 'Jonatan Mercado Alcina',
    role: 'Dirección General',
    email: 'direccion.general@fundacionjusticiaglobal.org',
    lead: true,
  },
  {
    name: 'Liyis Gómez',
    role: 'Asesora de Relaciones Internacionales y de Proyectos',
    email: 'relaciones.internacionales@fundacionjusticiaglobal.org',
    lead: false,
  },
  {
    name: null,
    role: 'Asistente de Dirección General',
    email: 'asistente.direccion@fundacionjusticiaglobal.org',
    lead: false,
  },
  {
    name: 'Jerónimo Botero Varela',
    role: 'Director de Relaciones Públicas y Proyección Social',
    email: 'relaciones.publicas@fundacionjusticiaglobal.org',
    lead: false,
  },
  {
    name: 'Julio Mendoza Soto',
    role: 'Director de Proyectos y Consultorías',
    email: 'proyectos.consultorias@fundacionjusticiaglobal.org',
    lead: false,
  },
  {
    name: 'Abril García Caro',
    role: 'Directora de Investigaciones y Educación Continua',
    email: 'investigaciones.educacion@fundacionjusticiaglobal.org',
    lead: false,
  },
  {
    name: 'Jose Luis Sanchez',
    role: 'Coordinación de Promoción Institucional',
    email: 'promocion.institucional@fundacionjusticiaglobal.org',
    lead: false,
  },
] as const;

const experienceBullets = [
  'Registrada bajo el marco CIIU 7020, 8559, 6910 y 9499',
  'Entidad sin ánimo de lucro: excedentes 100% reinvertidos en su objeto social',
  'Presencia en Colombia con proyección internacional',
];

// Borrador: reemplazar con testimonios reales (con consentimiento) antes de publicar.
const impact = [
  {
    quote:
      'Sentí que finalmente alguien escuchaba mi caso y me explicaba mis derechos con claridad.',
    role: 'Persona acompañada, orientación jurídica',
  },
  {
    quote:
      'El acompañamiento de la Fundación le dio a nuestra comunidad herramientas reales para exigir transparencia.',
    role: 'Líder comunitario, fortalecimiento social',
  },
  {
    quote:
      'Gracias a la auditoría pudimos identificar y corregir procesos que afectaban a la comunidad.',
    role: 'Servidor público, prevención de corrupción',
  },
];

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
];

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#f7931d]">
      <span className="h-px w-8 bg-[#f7931d]/60" />
      {children}
    </div>
  );
}

function OutlinePill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/90 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white hover:bg-white/15 hover:shadow-[0_16px_36px_rgba(255,255,255,0.22)]"
    >
      {children}
    </a>
  );
}

// Material-style stagger: nth item in a group reveals slightly after the last.
function revealDelay(i: number): CSSProperties {
  return { '--reveal-delay': `${i * 90}ms` } as CSSProperties;
}

export default function HomeClient() {
  // Material-style scroll reveal: elements fade + rise into place once, the
  // first time they cross into view (see [data-reveal] rules in globals.css).
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <main id="top" className="overflow-hidden bg-[#26331c] text-white">
      <header className="sticky top-0 z-50 bg-white text-[#26331c] shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14">
          <a className="flex items-center gap-3" href="#top" aria-label="Fundación Justicia Global">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-[#26331c]">
              <img
                src="/logo.png"
                alt="Fundación Justicia Global"
                width={44}
                height={44}
                className="h-full w-full scale-110 object-cover"
              />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-[#6b6c73]">
                Fundación
              </span>
              <span className="block text-base font-black uppercase tracking-[0.06em] text-[#26331c]">
                Justicia Global
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-[#3d3f47] md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[#f7931d]">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#26331c] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_4px_12px_rgba(38,51,28,0.25)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#f7931d] hover:text-[#26331c] hover:shadow-[0_10px_24px_rgba(38,51,28,0.35)]"
          >
            Escríbenos
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-[85vh] flex-col items-center justify-center px-6 py-28 text-center sm:px-10">
        <img
          src="/images/hero-building.jpg"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#16210f]/72" />

        <p
          data-reveal
          style={revealDelay(0)}
          className="text-xs font-bold uppercase tracking-[0.4em] text-white/85"
        >
          Fundación Justicia Global
        </p>
        <span
          data-reveal
          style={revealDelay(1)}
          className="mt-4 flex items-center gap-2 text-[#f7931d]"
        >
          <span className="h-px w-10 bg-[#f7931d]/70" />
          <span className="h-1.5 w-1.5 rotate-45 border border-[#f7931d]" />
          <span className="h-px w-10 bg-[#f7931d]/70" />
        </span>

        <h1
          data-reveal
          style={revealDelay(2)}
          className="mt-6 max-w-4xl font-[family-name:var(--font-playfair)] text-4xl font-medium uppercase leading-tight text-[#eef2e0] sm:text-5xl lg:text-6xl lg:leading-[1.15]"
        >
          Por un mundo más justo, transparente e inclusivo
        </h1>

        <p
          data-reveal
          style={revealDelay(3)}
          className="mt-6 max-w-xl text-sm font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-base"
        >
          Auditorías y consultorías especializadas para comunidades y servidores públicos, en Colombia y a nivel global
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          data-reveal
          style={revealDelay(4)}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[#8fbb36] px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_18px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:bg-[#7ca62e] hover:shadow-[0_28px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(143,187,54,0.5)]"
        >
          Agendar una consulta gratuita
        </a>
      </section>

      {/* Services — 4 registered pillars */}
      <section id="servicios" data-reveal className="scroll-mt-20 bg-[#f7faf3] py-20 text-[#26331c]">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  data-reveal
                  style={revealDelay(i)}
                  className={`${service.tone} group rounded-2xl px-8 py-10 text-white shadow-[0_10px_20px_rgba(20,20,15,0.22),0_3px_6px_rgba(20,20,15,0.16)] transition-all duration-300 ease-in-out hover:-translate-y-4 hover:shadow-[0_32px_64px_rgba(20,20,15,0.4),0_10px_20px_rgba(20,20,15,0.3)]`}
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:bg-white/25">
                    <Icon className="h-7 w-7" strokeWidth={1.25} />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-xl uppercase leading-snug sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/85">
                    {service.body}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Marco legal y transparencia financiera */}
          <div
            data-reveal
            className="mt-16 grid gap-10 border-t border-[#26331c]/10 pt-12 sm:grid-cols-2"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f7931d]">
                Marco Operativo y Legal
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
                Todas nuestras actividades se realizan bajo la Clasificación
                Industrial Internacional Uniforme (CIIU) registrada por la
                fundación:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-[#4c4d56]">
                {ciiuCodes.map((code) => (
                  <li key={code}>{code}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f7931d]">
                Compromiso Social y Transparencia Financiera
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
                La Fundación es una entidad de interés general y acceso
                comunitario. Las rentas, ingresos y excedentes que se obtengan
                en el desarrollo de estos cuatro pilares se destinan e
                invierten en su totalidad en el objeto social de la entidad,
                estando expresamente prohibida la distribución de excedentes o
                remanentes bajo cualquier modalidad a sus fundadores,
                directivos o miembros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section data-reveal className="bg-[#f7faf3] py-20 text-[#26331c]">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f7931d]">
              Nuestro Equipo
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl uppercase leading-snug sm:text-4xl">
              Nuestro compromiso
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4c4d56] sm:text-base">
              {commitment}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person, i) => (
              <a
                key={person.email}
                href={`mailto:${person.email}`}
                data-reveal
                style={revealDelay(i)}
                className={`group flex min-w-0 items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_6px_14px_rgba(20,20,15,0.12),0_2px_4px_rgba(20,20,15,0.14)] transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_24px_48px_rgba(20,20,15,0.25),0_6px_12px_rgba(20,20,15,0.18)] ${person.lead ? 'sm:col-span-2 lg:col-span-3' : ''}`}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#26331c] text-sm font-black uppercase text-white shadow-[0_4px_10px_rgba(38,51,28,0.35)] transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-[#8fbb36]">
                  {(person.name ?? person.role).slice(0, 2)}
                </span>
                <span className="min-w-0 flex-1">
                  {person.name && (
                    <span className="block text-sm font-bold">{person.name}</span>
                  )}
                  <span className="block text-xs font-bold uppercase tracking-[0.06em] text-[#f7931d]">
                    {person.role}
                  </span>
                  <span className="mt-1 block text-xs wrap-break-word text-[#4c4d56] group-hover:underline">
                    {person.email}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" data-reveal className="scroll-mt-20 bg-[#26331c] pt-0">
        <div className="group relative h-[340px] w-full overflow-hidden sm:h-[420px]">
          <img
            src="/images/about-meeting.jpg"
            alt="Reunión de acompañamiento jurídico"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-14 lg:py-20">
          <div data-reveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl uppercase text-[#eef2e0] sm:text-5xl">
              Sobre Nosotros
            </h2>
            <div className="mt-8">
              <OutlinePill href={mailtoUrl}>Conócenos</OutlinePill>
            </div>
          </div>
          <div data-reveal style={revealDelay(1)} className="space-y-5 text-sm leading-relaxed text-white/80 sm:text-base">
            <p>
              Fundación Justicia Global es una organización colombiana dedicada a
              promover los derechos humanos y la responsabilidad social
              empresarial. Trabajamos junto a comunidades vulnerables y
              servidores públicos para garantizar justicia, transparencia e
              integridad en cada proceso que acompañamos.
            </p>
            <p>
              A través de auditorías y consultorías especializadas, combatimos
              la corrupción y reducimos la desigualdad, fortaleciendo
              capacidades locales con proyección nacional e internacional.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experiencia" data-reveal className="scroll-mt-20 bg-[#26331c]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-14 lg:py-24">
          <div data-reveal className="grid grid-cols-2 gap-4">
            <div className="group relative h-72 overflow-hidden rounded-2xl sm:h-96">
              <img
                src="/images/experience-gavel.jpg"
                alt="Mazo de un juez"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="group relative mt-8 h-72 overflow-hidden rounded-2xl sm:h-96">
              <img
                src="/images/experience-scales.jpg"
                alt="Balanza de la justicia"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>

          <div data-reveal style={revealDelay(1)}>
            <SectionKicker>Experiencia</SectionKicker>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl uppercase leading-tight text-[#eef2e0] sm:text-4xl">
              Una gestión que genera confianza
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/80 sm:text-base">
              Cada programa que impulsamos está diseñado con rigor técnico y
              compromiso ético, priorizando siempre a las comunidades y
              personas que representamos.
            </p>
            <ul className="mt-8 space-y-4">
              {experienceBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#8fbb36]/15 text-[#8fbb36]">
                    ✓
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.04em] text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <OutlinePill href={mailtoUrl}>Conoce nuestro trabajo</OutlinePill>
            </div>
          </div>
        </div>
      </section>

      {/* "Here for you" CTA */}
      <section data-reveal className="bg-[#26331c]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-14 lg:py-24">
          <div data-reveal>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl uppercase leading-tight text-[#eef2e0] sm:text-4xl">
              Aquí estamos para acompañarte
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              Si tus derechos han sido vulnerados o necesitas orientación
              jurídica, nuestro equipo está listo para escucharte y guiarte en
              cada paso.
            </p>
            <div className="mt-8">
              <OutlinePill href={whatsappUrl}>Escríbenos</OutlinePill>
            </div>
          </div>
          <div data-reveal style={revealDelay(1)} className="group relative h-72 overflow-hidden rounded-2xl sm:h-96">
            <img
              src="/images/cta-consult.jpg"
              alt="Revisión de un caso jurídico"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Phone banner */}
        <div data-reveal className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-14 lg:pb-24">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl bg-[#e3ecd3] px-8 py-12 text-center text-[#26331c] shadow-[0_10px_28px_rgba(227,236,211,0.25),inset_0_0_60px_rgba(60,45,20,0.12)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-[#ecf3e0] hover:shadow-[0_32px_64px_rgba(227,236,211,0.4),inset_0_0_60px_rgba(60,45,20,0.12)] sm:px-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em]">
              Escríbenos para una orientación gratuita
            </p>
            <p className="mt-4 font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl">
              +57 316 246 2649
            </p>
          </a>
        </div>
      </section>

      {/* Impact / testimonials */}
      <section data-reveal className="bg-[#26331c] pb-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          <h2 data-reveal className="text-center font-[family-name:var(--font-playfair)] text-4xl uppercase text-[#eef2e0]">
            Impacto Real
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {impact.map((item, i) => (
              <div
                key={item.role}
                data-reveal
                style={revealDelay(i)}
                className="rounded-2xl border border-white/10 bg-white/8 p-7 shadow-[0_4px_16px_rgba(143,187,54,0.12)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-white/20 hover:bg-white/14 hover:shadow-[0_20px_44px_rgba(143,187,54,0.28)]"
              >
                <span className="font-[family-name:var(--font-playfair)] text-4xl leading-none text-[#f7931d]">
                  &ldquo;
                </span>
                <p className="mt-2 text-sm italic leading-relaxed text-white/85">
                  {item.quote}
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#f7931d]">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" data-reveal className="scroll-mt-20 bg-[#182410] pt-16 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-14 text-center sm:px-10 md:grid-cols-3 md:text-left lg:px-14">
          <div data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f7931d]">
              Modalidad de atención
            </p>
            <p className="mt-4 text-sm text-white/75">Atención virtual y telefónica</p>
            <p className="mt-1 text-sm text-white/75">
              Respondemos en menos de 48 horas hábiles
            </p>
          </div>

          <div data-reveal style={revealDelay(1)} className="flex flex-col items-center">
            <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-white">
              <img
                src="/logo.png"
                alt="Fundación Justicia Global"
                width={64}
                height={64}
                className="h-full w-full scale-110 object-cover"
              />
            </span>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em]">
              Fundación Justicia Global
            </p>
          </div>

          <div data-reveal style={revealDelay(2)}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f7931d]">
              Contacto
            </p>
            <a
              href={mailtoUrl}
              className="mt-4 flex items-center justify-center gap-2 text-sm text-white/75 hover:text-white md:justify-start"
            >
              <Mail className="h-4 w-4" />
              {email}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-sm text-white/75 hover:text-white"
            >
              WhatsApp +57 316 246 2649
            </a>
            <a
              href={`https://${siteHost}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-sm text-white/75 hover:text-white"
            >
              {siteHost}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-white/50">
            © 2026 Fundación Justicia Global · NIT {nit}. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 h-14 w-14 sm:bottom-7 sm:right-7">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] [animation-delay:1s]" />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Escríbenos por WhatsApp"
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.45)] transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#1ebe5d] hover:shadow-[0_18px_40px_rgba(37,211,102,0.6)]"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.36.101 11.944c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.454h.006c6.585 0 11.946-5.36 11.949-11.945a11.821 11.821 0 00-3.499-8.404z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
