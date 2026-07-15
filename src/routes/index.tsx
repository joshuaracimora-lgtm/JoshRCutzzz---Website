import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Phone, Mail } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import photo1 from "@/assets/photo-1.png";
import photo3 from "@/assets/photo-3.png";
import photo4 from "@/assets/photo-4.png";
import photo5 from "@/assets/photo-5.png";
import photo6 from "@/assets/photo-6.png";
import photo7 from "@/assets/photo-7.png";
import photo8 from "@/assets/photo-8.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Joshua Racimora — Barber | Precision Cuts & Clean Fades" },
      { name: "description", content: "Barber portfolio of Joshua Racimora. Precision cuts, clean fades, and sharp lines. Book through Instagram, phone, or email." },
      { property: "og:title", content: "Joshua Racimora — Barber" },
      { property: "og:description", content: "Precision cuts. Clean fades." },
    ],
  }),
});

const gallery = [photo1, photo3, photo4, photo5, photo6, photo7, photo8];

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between border-b-4 border-[var(--gold)] px-6 py-8 md:px-16 md:py-12">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoMark} alt="JoshRCutz logo" width={40} height={40} className="h-9 w-9 md:h-10 md:w-10" />
          <span className="font-serif-display text-2xl tracking-wider text-[var(--gold)] md:text-3xl">
            JoshRCutz
          </span>
        </div>
        <nav className="hidden gap-8 text-xs font-bold uppercase tracking-[0.25em] text-[var(--cream)] md:flex">
          <a href="#gallery" className="border-b-2 border-transparent pb-1 transition hover:border-[var(--gold)] hover:text-[var(--gold)]">Work</a>
          <a href="#about" className="border-b-2 border-transparent pb-1 transition hover:border-[var(--gold)] hover:text-[var(--gold)]">About</a>
          <a href="#contact" className="border-b-2 border-transparent pb-1 transition hover:border-[var(--gold)] hover:text-[var(--gold)]">Contact</a>
        </nav>
      </header>

      <div className="flex flex-1 flex-col justify-center py-16">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-[3px] w-16 bg-[var(--gold)]" />
          <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-[var(--gold)]">
            Barber — Portfolio
          </span>
        </div>
        <h1 className="font-serif-display text-[clamp(5rem,18vw,16rem)] leading-[0.82] text-[var(--cream)]">
          JoshR<span className="text-[var(--gold)]">Cutz</span>
        </h1>
        <div className="mt-10 flex items-center gap-4">
          <img src={logoMark} alt="" width={32} height={32} className="h-7 w-7 opacity-90" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--cream)] md:text-base">
            759 Anderson Road · Davis, CA 95616
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between text-xs font-bold uppercase tracking-[0.3em] text-[var(--cream)]">
        <span className="text-[var(--gold)]">Bay Area, CA</span>
        <a href="#gallery" className="group inline-flex items-center gap-3">
          <span>Scroll</span>
          <span className="h-[3px] w-12 bg-[var(--gold)] transition-all group-hover:w-20" />
        </a>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % gallery.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="gallery" className="border-b-4 border-[var(--gold)] px-6 py-24 md:px-16 md:py-32">
      <div className="mb-14 flex items-end justify-between">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-[var(--gold)]">
            01 — Selected Work
          </span>
          <h2 className="font-serif-display mt-4 text-7xl text-[var(--cream)] md:text-9xl">
            Featured Cuts
          </h2>
        </div>
        <span className="hidden text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)] md:block">
          {String(active + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-[var(--gold)] bg-[var(--surface)] md:aspect-[16/9]">
        {gallery.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Haircut ${i + 1}`}
            width={1280}
            height={1600}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 to-transparent" />
      </div>

      <div className="mt-8 flex gap-2">
        {gallery.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            className={`h-[3px] transition-all ${
              i === active ? "w-20 bg-[var(--gold)]" : "w-10 bg-[var(--muted-fg)]/40 hover:bg-[var(--gold)]/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b-4 border-[var(--gold)] px-6 py-24 md:px-16 md:py-32">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-[var(--gold)]">
            02 — About
          </span>
          <h2 className="font-serif-display mt-4 text-7xl text-[var(--cream)] md:text-9xl">
            My <span className="text-[var(--gold)]">Mission</span>
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="font-serif-display text-4xl leading-[1.05] text-[var(--cream)] md:text-5xl">
            The worst feeling in the world is walking out of a barbershop with a haircut you never asked for. My mission is to make sure that never happens to you.
          </p>
          <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-[var(--muted-fg)]">
            I'm not just your barber, I'm your consultant. Before I even touch the clippers, I'm listening. First, we figure out the exact cut you've been looking for, and then I'll deliver it. Fades, tapers, scissor work, curly hair, straight hair, whatever you are envisioning, I've got you.
          </p>
          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[var(--muted-fg)]">
            Years of experience gave me the precision. The professionalism came with it. You leave looking right, every time.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: Instagram, label: "Instagram", value: "@JoshR.Cutzzz", href: "https://instagram.com/JoshR.Cutzzz" },
    { icon: Phone, label: "Phone", value: "925.339.2761", href: "tel:+19253392761" },
    { icon: Mail, label: "Email", value: "joshuaracimora@gmail.com", href: "mailto:joshuaracimora@gmail.com" },
  ];

  return (
    <section id="contact" className="px-6 py-24 md:px-16 md:py-32">
      <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-[var(--gold)]">
        03 — Contact
      </span>
      <h2 className="font-serif-display mt-4 text-7xl text-[var(--cream)] md:text-[10rem]">
        Book A <span className="text-[var(--gold)]">Chair.</span>
      </h2>
      <p className="mt-6 max-w-md text-base font-medium text-[var(--muted-fg)]">
        Reach out through any channel below. Walk-ins welcome by appointment.
      </p>

      <ul className="mt-16 divide-y-2 divide-[var(--gold)]/40 border-y-4 border-[var(--gold)]">
        {links.map(({ icon: Icon, label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group relative flex items-center justify-between gap-6 px-2 py-7 transition-all duration-200 hover:bg-[var(--gold)] hover:px-6"
            >
              <div className="flex items-center gap-6">
                <Icon className="h-6 w-6 text-[var(--gold)] transition group-hover:text-[var(--background)]" strokeWidth={2.25} />
                <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-[var(--cream)] transition group-hover:text-[var(--background)]">
                  {label}
                </span>
              </div>
              <span className="font-serif-display text-3xl text-[var(--cream)] transition group-hover:text-[var(--background)] md:text-5xl">
                {value}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t-2 border-[var(--gold)]/60 pt-8 text-xs font-bold uppercase tracking-[0.3em] text-[var(--cream)] md:flex-row md:items-center">
        <span>© Joshua Racimora</span>
        <div className="flex items-center gap-3">
          <img src={logoMark} alt="" width={24} height={24} className="h-5 w-5" />
          <span className="text-[var(--gold)]">JoshRCutz</span>
        </div>
      </footer>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </main>
  );
}
