# Animaciones y elevación (Material-style)

Todo vive en dos archivos: `app/home-client.tsx` (marcado + lógica) y
`app/globals.css` (reglas de la animación de scroll-reveal). No se agregó
ninguna librería — es CSS + un `IntersectionObserver` de ~15 líneas.

## 1. Scroll-reveal (fade + elevación al entrar en pantalla)

**Qué hace:** cada bloque marcado con el atributo `data-reveal` empieza
invisible y desplazado hacia abajo, y se anima a su posición final la primera
vez que entra en el viewport, en cascada dentro de un mismo grupo (tarjetas,
columnas, etc).

**Cómo se aplica (3 piezas):**

1. **CSS base — `app/globals.css`** (después de `@layer base`). Define el
   estado oculto y el estado revelado, y separa el caso `prefers-reduced-motion`:

   ```css
   [data-reveal] {
     opacity: 0;
     transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
     transition-delay: var(--reveal-delay, 0ms);
   }
   [data-reveal].is-revealed {
     opacity: 1;
   }

   @media (prefers-reduced-motion: no-preference) {
     [data-reveal] {
       transform: translateY(48px);
       transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
         transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
     }
     [data-reveal].is-revealed { transform: translateY(0); }
   }
   ```

   Usa `transform` (no la propiedad `translate` suelta) a propósito: los
   `hover:-translate-y-*` de Tailwind v4 compilan a la propiedad `translate`,
   así que si el reveal también usara `translate` se pisarían entre sí. Con
   `transform` para el reveal y `translate` para el hover, nunca chocan.

2. **El observer — `app/home-client.tsx`** (dentro de `HomeClient`, vía
   `useEffect`). Un solo `IntersectionObserver` para toda la página: agrega
   `is-revealed` la primera vez que un elemento cruza el 15% de visibilidad, y
   deja de observarlo (la animación es de una sola vez, no se repite al
   volver a scrollear):

   ```tsx
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
   ```

3. **El stagger — helper `revealDelay(i)`.** Da a cada ítem `i` de un grupo un
   retraso creciente vía una custom property, para que no aparezcan todos
   pegados:

   ```tsx
   function revealDelay(i: number): CSSProperties {
     return { '--reveal-delay': `${i * 90}ms` } as CSSProperties;
   }
   ```

   Uso en JSX: `<div data-reveal style={revealDelay(i)}>` dentro de un
   `.map()`.

**Dónde está aplicado:** la raíz de cada `<section>`/`<footer>` (fade+rise del
bloque completo) **y**, adentro, sus piezas principales por separado (texto
del hero en cascada, cada tarjeta de servicio/equipo/testimonio con su propio
delay). Es decir, dos capas: el contenedor entra, y su contenido interno sigue
en cascada.

**Accesibilidad:** con `prefers-reduced-motion: reduce` (Windows: Configuración
→ Accesibilidad → Efectos visuales → Animaciones, desactivado) el `transform`
no se aplica — sigue habiendo un fade de opacidad (sin movimiento espacial,
que es lo que reduced-motion realmente evita), en vez de que el contenido
aparezca de golpe sin ninguna transición.

## 2. Elevación / micro-interacciones al hover (lenguaje Material)

No es Material Design completo (sin Roboto, sin ripple) — solo su lenguaje de
profundidad: sombras que crecen y el elemento "se levanta" al hover, con la
curva estándar de Material (`ease-in-out` de Tailwind = `cubic-bezier(0.4, 0,
0.2, 1)`, la misma curva que usa Material).

**Patrón repetido en botones/tarjetas:**

```
shadow-[resting] transition-all duration-300 ease-in-out
hover:-translate-y-N hover:shadow-[elevated]
```

**Regla importante (bug real que encontramos y corregimos): sombra negra
sobre fondo oscuro es invisible.** `rgba(0,0,0,...)` sobre `#26331c` (el verde
oscuro de las secciones) no genera contraste — la sombra se pierde. Por eso:

- Tarjetas/botones sobre fondo **claro** (`#f7faf3`, blanco): sombra oscura
  normal, `rgba(20,20,15,...)`.
- Tarjetas/botones sobre fondo **oscuro**: sombra de color (glow), no negra —
  ej. testimonios usa `rgba(143,187,54,...)` (verde marca), el banner de
  teléfono usa `rgba(227,236,211,...)` (el tono claro de su propio fondo).

**Otros toques:**
- Íconos de servicios: chip circular (`bg-white/15`) que crece y aclara al
  hover del grupo (`group-hover:scale-110`).
- Imágenes (about/experience/CTA): zoom sutil al hover vía `group` +
  `group-hover:scale-105` sobre el `<img>`.
- Esquinas: `rounded-2xl` en tarjetas/imágenes/banner (antes `rounded-sm`,
  muy recto) — es lo que más "lee" como Material a primera vista.

## Gotchas ya resueltos (para no repetirlos)

1. **`transform` vs `translate`:** ver arriba — Tailwind v4 mueve sus
   utilidades `-translate-y-*` a la propiedad CSS `translate`, no `transform`.
   Si el reveal usa `transform`, nunca compite con el hover.
2. **CSS Grid: `min-width: auto` por defecto en los ítems de grid.** Un
   `<a>`/`<div>` que es hijo directo de un `.grid` puede negarse a encogerse
   por debajo del ancho mínimo de su contenido (ej. un email largo sin
   espacios), y se desborda de su columna aunque el texto interno sí tenga
   `overflow-wrap`. Sucedió con las tarjetas de "Nuestro Equipo" en mobile.
   Fix: `min-w-0` en el ítem de grid (no solo en el wrapper de texto interno).
3. **`prefers-reduced-motion` puede estar activado sin que el usuario lo
   sepa** (viene de una config general de Windows, no de algo que la persona
   configuró a propósito para este sitio). Si el reveal se gatea 100% detrás
   de esa media query, esos usuarios ven cero animación. Mejor: fade de
   opacidad siempre, y solo el movimiento espacial (`transform`) detrás de la
   media query.
