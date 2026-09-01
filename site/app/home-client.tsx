'use client';

import {
  CheckCircle2,
  Globe2,
  HeartHandshake,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const launchDate = new Date('2026-09-16T00:00:00-05:00').getTime();

const phone = '573162462649';
const whatsappUrl =
  `https://wa.me/${phone}?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20la%20plataforma%20de%20Fundaci%C3%B3n%20Justicia%20Global.`;
const email = 'fundacionjusticiaglobal@gmail.com';
const mailtoUrl = `mailto:${email}?subject=Informaci%C3%B3n%20plataforma%20Fundaci%C3%B3n%20Justicia%20Global`;
const nit = '901.516.277-7';

const focusAreas = [
  'Derechos humanos',
  'Gestión social',
  'Acompañamiento jurídico',
];

const countdownUnits = [
  { label: 'días', ms: 1000 * 60 * 60 * 24, mod: Infinity },
  { label: 'horas', ms: 1000 * 60 * 60, mod: 24 },
  { label: 'min', ms: 1000 * 60, mod: 60 },
  { label: 'seg', ms: 1000, mod: 60 },
];

function getCountdown() {
  const distance = Math.max(launchDate - Date.now(), 0);

  return countdownUnits.map((unit) => ({
    label: unit.label,
    value: Math.floor((distance / unit.ms) % unit.mod),
  }));
}

export default function HomeClient() {
  // Start null so server and first client render match; fill in after mount to
  // avoid a Date.now() hydration mismatch on the seconds digit.
  const [milestones, setMilestones] = useState<
    { label: string; value: number }[] | null
  >(null);

  useEffect(() => {
    setMilestones(getCountdown());
    const timer = window.setInterval(() => {
      setMilestones(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const display =
    milestones ?? countdownUnits.map((unit) => ({ label: unit.label, value: -1 }));

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faf3] text-[#30313a]">
      <section className="relative isolate flex min-h-screen flex-col bg-[radial-gradient(circle_at_18%_20%,rgba(255,145,23,0.28),transparent_30%),linear-gradient(135deg,#86b83d_0%,#5e982f_42%,#f7931d_100%)]">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_46%,rgba(255,255,255,0.15)_46.3%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute right-[-12vw] top-[-12vw] -z-10 h-[42vw] w-[42vw] rounded-full border-52 border-white/18" />
        <div className="absolute bottom-[-16vw] left-[44%] -z-10 h-[34vw] w-[34vw] rounded-full border-44 border-white/15" />

        <header className="mx-auto flex w-full max-w-7xl items-center px-6 py-7 sm:px-10 lg:px-14">
          <a className="flex items-center gap-3" href="#" aria-label="Fundación Justicia Global">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-white shadow-[0_14px_35px_rgba(72,88,39,0.18)]">
              <img
                src="/logo.png"
                alt="Fundación Justicia Global"
                width={48}
                height={48}
                className="h-full w-full scale-110 object-cover"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#55565f]">
                Fundación
              </span>
              <span className="block text-lg font-black uppercase tracking-[0.08em] text-[#8fbb36] sm:text-xl">
                Justicia Global
              </span>
            </span>
          </a>
        </header>

        <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-6 pb-16 pt-8 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8fbb36]/25 bg-white/78 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#638c28] shadow-[0_12px_30px_rgba(80,112,38,0.08)] backdrop-blur">
              <Globe2 className="h-4 w-4" />
              Muy pronto
            </div>
            <h1 className="text-2xl font-black leading-tight tracking-normal text-[#2e3037] sm:text-3xl lg:text-[2.15rem] lg:leading-[1.2]">
              Promovemos los derechos humanos y la responsabilidad social
              empresarial mediante auditorías y consultorías especializadas,
              orientadas a garantizar justicia, transparencia e integridad,
              combatir la corrupción y reducir la desigualdad, fortaleciendo a
              comunidades vulnerables y servidores públicos en Colombia y a nivel
              global.
            </h1>

            <div
              id="contacto"
              className="mt-9 flex w-full max-w-xl flex-col gap-3 rounded-[8px] border border-white/80 bg-white/88 p-3 shadow-[0_24px_70px_rgba(51,69,35,0.16)] backdrop-blur sm:flex-row sm:items-center"
            >
              <p className="min-h-12 flex-1 rounded-[6px] border border-[#dbe6cb] bg-[#fbfdf8] px-4 py-3 text-sm font-semibold leading-6 text-[#4c4d56]">
                Escríbenos para recibir información sobre el lanzamiento.
              </p>
              <a
                href={mailtoUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-[#8fbb36] px-6 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_14px_24px_rgba(143,187,54,0.25)] transition hover:bg-[#7ca62e]"
              >
                <Mail className="h-4 w-4" />
                Correo
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-4 gap-3">
              {display.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[8px] border border-white/70 bg-white/60 px-3 py-4 text-center shadow-[0_16px_45px_rgba(67,82,45,0.09)] backdrop-blur"
                >
                  <span className="block text-2xl font-black text-[#f7931d] sm:text-3xl">
                    {item.value < 0 ? '--' : String(item.value).padStart(2, '0')}
                  </span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-[#6b6c73]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-160">
            <div className="absolute inset-x-8 -bottom-8.5 h-28 rounded-full bg-[#3f5528]/20 blur-3xl" />
            <div className="relative ml-auto grid min-h-140 max-w-107.5 place-items-center rounded-[42px] border-10 border-[#2f3138] bg-[#fdfefa] p-5 shadow-[0_38px_90px_rgba(42,46,31,0.32)] sm:rotate-3">
              <div className="absolute top-5 h-5 w-28 rounded-full bg-[#2f3138]" />
              <div className="h-full w-full rounded-[28px] bg-[#f8fbf2] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a7b82]">
                      Panel FJG
                    </p>
                    <h2 className="mt-1 text-2xl font-black text-[#30313a]">
                      Ruta de atención
                    </h2>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f7931d]/14">
                    <ShieldCheck className="h-6 w-6 text-[#f7931d]" />
                  </span>
                </div>

                <div className="mt-6 rounded-[8px] bg-white p-4 shadow-[0_14px_34px_rgba(75,94,47,0.12)]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#8fbb36]/16">
                      <HeartHandshake className="h-6 w-6 text-[#8fbb36]" />
                    </span>
                    <div>
                      <p className="text-sm font-black text-[#30313a]">
                        Comunidad asignada
                      </p>
                      <p className="text-xs font-medium text-[#777982]">
                        Seguimiento activo
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 h-2 rounded-full bg-[#e8efd8]">
                    <div className="h-2 w-[72%] rounded-full bg-[#8fbb36]" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {focusAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 rounded-[8px] border border-[#e3ebd5] bg-white/80 px-4 py-3"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#8fbb36]" />
                      <span className="text-sm font-bold text-[#4c4d56]">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[8px] bg-[#30313a] p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/56">
                    Impacto previsto
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-3xl font-black text-[#f7931d]">
                        300+
                      </span>
                      <span className="text-xs text-white/70">orientaciones</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-black text-[#8fbb36]">
                        12
                      </span>
                      <span className="text-xs text-white/70">programas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <footer className="bg-[#30313a] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <p className="font-semibold">
            Fundación Justicia Global · NIT {nit}
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-1 text-white/80">
            <a className="font-semibold hover:text-white" href={mailtoUrl}>
              {email}
            </a>
            <a
              className="font-semibold hover:text-white"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp +57 316 246 2649
            </a>
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
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.45)] transition hover:bg-[#1ebe5d]"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.36.101 11.944c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.454h.006c6.585 0 11.946-5.36 11.949-11.945a11.821 11.821 0 00-3.499-8.404z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
