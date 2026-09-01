import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  HeartHandshake,
  MessageCircle,
  Scale,
  ShieldCheck,
} from 'lucide-react';

const milestones = [
  { value: '15', label: 'días' },
  { value: '08', label: 'horas' },
  { value: '16', label: 'min' },
  { value: '09', label: 'seg' },
];

const focusAreas = [
  'Derechos humanos',
  'Gestión social',
  'Acompañamiento jurídico',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faf3] text-[#30313a]">
      <section className="relative isolate flex min-h-screen flex-col bg-[radial-gradient(circle_at_18%_20%,rgba(255,145,23,0.28),transparent_30%),linear-gradient(135deg,#86b83d_0%,#5e982f_42%,#f7931d_100%)]">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_46%,rgba(255,255,255,0.15)_46.3%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute right-[-12vw] top-[-12vw] -z-10 h-[42vw] w-[42vw] rounded-full border-[52px] border-white/18" />
        <div className="absolute bottom-[-16vw] left-[44%] -z-10 h-[34vw] w-[34vw] rounded-full border-[44px] border-white/15" />

        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-14">
          <a className="flex items-center gap-3" href="#" aria-label="Fundación Justicia Global">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-[0_14px_35px_rgba(72,88,39,0.18)]">
              <Scale className="h-7 w-7 text-[#8fbb36]" strokeWidth={2.4} />
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
          <nav className="hidden items-center gap-9 text-sm font-semibold text-[#4c4d56] md:flex">
            <a href="#mision">Misión</a>
            <a href="#programas">Programas</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a
            href="#contacto"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#f7931d] px-5 text-sm font-bold text-white shadow-[0_14px_28px_rgba(247,147,29,0.26)] transition hover:bg-[#e98012]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </header>

        <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-6 pb-16 pt-8 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8fbb36]/25 bg-white/78 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#638c28] shadow-[0_12px_30px_rgba(80,112,38,0.08)] backdrop-blur">
              <Globe2 className="h-4 w-4" />
              Muy pronto
            </div>
            <h1 className="text-5xl font-black leading-[0.98] tracking-normal text-[#2e3037] sm:text-6xl lg:text-7xl">
              Una plataforma para acercar justicia social a más comunidades.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#5b5c65]">
              Estamos preparando una experiencia digital para conectar orientación,
              formación y gestión de casos con enfoque en derechos humanos.
            </p>

            <div
              id="contacto"
              className="mt-9 flex w-full max-w-xl flex-col gap-3 rounded-[8px] border border-white/80 bg-white/88 p-3 shadow-[0_24px_70px_rgba(51,69,35,0.16)] backdrop-blur sm:flex-row sm:items-center"
            >
              <p className="min-h-12 flex-1 rounded-[6px] border border-[#dbe6cb] bg-[#fbfdf8] px-4 py-3 text-sm font-semibold leading-6 text-[#4c4d56]">
                Escríbenos para recibir información sobre el lanzamiento.
              </p>
              <a
                href="https://wa.me/573183993023?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20la%20plataforma%20de%20Fundaci%C3%B3n%20Justicia%20Global."
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-[#8fbb36] px-6 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_14px_24px_rgba(143,187,54,0.25)] transition hover:bg-[#7ca62e]"
              >
                WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-4 gap-3">
              {milestones.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[8px] border border-white/70 bg-white/60 px-3 py-4 text-center shadow-[0_16px_45px_rgba(67,82,45,0.09)] backdrop-blur"
                >
                  <span className="block text-2xl font-black text-[#f7931d] sm:text-3xl">
                    {item.value}
                  </span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-[#6b6c73]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="absolute inset-x-8 bottom-[-34px] h-28 rounded-full bg-[#3f5528]/20 blur-3xl" />
            <div className="relative ml-auto grid min-h-[560px] max-w-[430px] place-items-center rounded-[42px] border-[10px] border-[#2f3138] bg-[#fdfefa] p-5 shadow-[0_38px_90px_rgba(42,46,31,0.32)] sm:rotate-3">
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
    </main>
  );
}
