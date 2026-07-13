import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { DayataraLogo } from "@/components/DayataraLogo";
import heroImg from "@/assets/hero.jpg.asset.json";
import seniImg from "@/assets/seni.jpg.asset.json";
import umkmImg from "@/assets/umkm.jpg.asset.json";
import mudaImg from "@/assets/muda.jpg.asset.json";
import gal1 from "@/assets/gal1.jpg.asset.json";
import gal2 from "@/assets/gal2.jpg.asset.json";
import gal3 from "@/assets/gal3.jpg.asset.json";
import gal4 from "@/assets/gal4.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: heroImg.url.startsWith("http") ? heroImg.url : `https://dayataranusantara.com${heroImg.url}` },
      { name: "twitter:image", content: heroImg.url.startsWith("http") ? heroImg.url : `https://dayataranusantara.com${heroImg.url}` },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#beranda", label: "Beranda" },
  { href: "#seni", label: "Seni Budaya" },
  { href: "#umkm", label: "UMKM" },
  { href: "#muda", label: "Kreatifitas Muda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#news", label: "News" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) e.target.classList.add("is-visible");
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const dur = 1400;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          setN(Math.floor(start + (to - start) * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref} className="font-serif text-5xl font-bold text-[color:var(--gold)] md:text-6xl">
      {n}
      {suffix}
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[color:var(--navy)]/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#beranda" className="flex items-center gap-3">
          <DayataraLogo className="h-11 w-11 shrink-0" />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-xl font-bold tracking-widest text-[color:var(--cream)]">
              DAYATARA
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              Spirit of Culture
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cream)]/85 hover:text-[color:var(--gold)] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontak"
          className="hidden lg:inline-flex items-center rounded-full border border-[color:var(--gold)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition-colors"
        >
          Kolaborasi
        </a>
        <button
          className="lg:hidden text-[color:var(--cream)] p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[color:var(--navy)] border-t border-[color:var(--gold)]/30">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--cream)]/90 hover:text-[color:var(--gold)]"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen overflow-hidden bg-[color:var(--navy)] text-[color:var(--cream)]">
      <img
        src={heroImg.url}
        alt="Penari tradisional Nusantara"
        width={1600}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)] via-[color:var(--navy)]/85 to-transparent" />
      <div className="dot-grid absolute inset-0 opacity-10 mix-blend-screen" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <div className="max-w-3xl fade-up">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[color:var(--gold)]" />
            <span className="eyebrow !text-[color:var(--gold)]">Yayasan Daya Cipta Budaya Nusantara</span>
          </div>
          <h1 className="display text-[clamp(2.4rem,6vw,5rem)] text-[color:var(--cream)]">
            Spirit of <span className="italic text-[color:var(--gold)] normal-case">Culture,</span>
            <br />
            Creativity <span className="text-[color:var(--gold)]">&</span> Community
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--cream)]/85 md:text-xl">
            "Dayatara adalah ruang tumbuh bagi daya cipta Nusantara — menghubungkan ide,
            manusia, dan potensi untuk menciptakan perubahan yang bermakna."
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--navy)] hover:bg-[color:var(--cream)] transition-colors"
            >
              Mari Bertumbuh Bersama Dayatara →
            </a>
            <a
              href="#seni"
              className="inline-flex items-center rounded-full border border-[color:var(--cream)]/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--cream)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-colors"
            >
              Jelajahi Program
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[color:var(--cream)]/60">
        <span>Est. Nusantara</span>
        <span className="hidden md:inline">Culture · Creativity · Community</span>
        <span>↓ Scroll</span>
      </div>
    </section>
  );
}

function Beranda() {
  const stats = [
    { n: 50, s: "+", label: "Project" },
    { n: 200, s: "+", label: "Partners" },
    { n: 50, s: "+", label: "Communities Empowered" },
    { n: 20, s: "+", label: "Years Experience" },
  ];
  const pilar = [
    { title: "Seni Budaya Nusantara", desc: "Pengembangan seni & budaya tradisi — wayang, tari, musik, dan teater." },
    { title: "UMKM & Ekonomi Kreatif", desc: "Memberdayakan pelaku UMKM berbasis budaya untuk tumbuh dan berdaya saing." },
    { title: "Kreatifitas Muda", desc: "Membuka ruang generasi muda untuk berkarya, berkolaborasi, dan berdampak." },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 reveal">
            <span className="eyebrow">Tentang Kami</span>
            <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">
              Wadah <em className="text-[color:var(--gold)] not-italic normal-case font-serif italic">kolaborasi</em>
              <br />
              budaya Nusantara.
            </h2>
            <div className="batik-divider my-8 w-32" />
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="text-lg leading-relaxed text-[color:var(--navy)]/80">
              Atas dasar semangat menjaga budaya agar tetap hidup dan bermanfaat bagi masyarakat,
              Yayasan Daya Cipta Nusantara (DAYATARA) hadir sebagai wadah kolaborasi yang
              menghubungkan budaya, kreativitas, dan komunitas dalam satu gerakan bersama.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--navy)]/80">
              Melalui semangat <strong className="text-[color:var(--navy)]">Culture, Creativity, Community</strong>,
              DAYATARA mendorong tumbuhnya kegiatan seni & budaya Nusantara, memperkuat komunitas daerah,
              membuka ruang kreativitas generasi muda, serta mendukung UMKM dan ekonomi kreatif.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--navy)]/80 italic">
              Bagi DAYATARA, budaya bukan hanya warisan yang perlu dijaga, tetapi juga kekuatan yang
              menyatukan masyarakat dan menggerakkan masa depan Nusantara.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-24 rounded-3xl bg-[color:var(--navy)] p-10 md:p-16 overflow-hidden reveal">
          <div className="dot-grid absolute inset-0 opacity-15" />
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <Counter to={s.n} suffix={s.s} />
                <div className="mt-3 text-sm uppercase tracking-[0.25em] text-[color:var(--cream)]/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilar preview */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {pilar.map((p, i) => (
            <div
              key={p.title}
              className="reveal group relative border border-[color:var(--navy)]/10 bg-white/60 p-8 backdrop-blur transition-all hover:border-[color:var(--gold)] hover:-translate-y-1"
            >
              <div className="mb-6 font-serif text-4xl text-[color:var(--gold)]">
                0{i + 1}
              </div>
              <h3 className="font-serif text-2xl text-[color:var(--navy)]">{p.title}</h3>
              <p className="mt-3 text-[color:var(--navy)]/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarSection({
  id,
  eyebrow,
  title,
  body,
  image,
  reverse = false,
  tone = "cream",
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  image: { url: string };
  reverse?: boolean;
  tone?: "cream" | "navy";
}) {
  const dark = tone === "navy";
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${dark ? "bg-[color:var(--navy)] text-[color:var(--cream)]" : "bg-[color:var(--cream)]"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="reveal relative">
            <div className="dot-grid absolute -left-4 -top-4 h-24 w-24 opacity-60" />
            <img
              src={image.url}
              alt={title}
              loading="lazy"
              className="relative aspect-[4/5] w-full object-cover shadow-2xl"
            />
            <div className="dot-grid absolute -right-4 -bottom-4 h-24 w-24 opacity-60" />
          </div>
          <div className="reveal">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className={`display mt-4 text-4xl md:text-5xl ${dark ? "text-[color:var(--cream)]" : "text-[color:var(--navy)]"}`}>
              {title}
            </h2>
            <div className="batik-divider my-8 w-32" />
            {body.map((p, i) => (
              <p key={i} className={`mb-4 text-lg leading-relaxed ${dark ? "text-[color:var(--cream)]/80" : "text-[color:var(--navy)]/75"}`}>
                {p}
              </p>
            ))}
            <a
              href="#kontak"
              className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] ${
                dark ? "text-[color:var(--gold)]" : "text-[color:var(--navy)]"
              } border-b border-[color:var(--gold)] pb-1 hover:gap-4 transition-all`}
            >
              Kolaborasi Program →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { t: "Strategic Consultant", d: "Perencanaan strategi berbasis budaya untuk institusi, korporasi, dan pemerintah." },
  { t: "Creative Development", d: "Pengembangan konsep kreatif, ide, dan narasi berakar pada kearifan lokal." },
  { t: "Community Engagement", d: "Membangun keterlibatan komunitas daerah lewat pendekatan partisipatif." },
  { t: "Sustainability Solutions", d: "Program berkelanjutan yang menghubungkan budaya dengan lingkungan & sosial." },
  { t: "Capacity Building & Training", d: "Pelatihan dan pengembangan kapasitas pelaku seni dan UMKM." },
  { t: "Research & Development", d: "Riset budaya, dokumentasi, dan pengembangan pengetahuan Nusantara." },
  { t: "Art & Culture Performance", d: "Produksi pertunjukan seni & budaya berkualitas tinggi." },
];

const PRODUCTS = [
  "Pengembangan Seni & Budaya Nusantara",
  "Pemberdayaan UMKM & Ekonomi Kreatif",
  "Pengembangan Kreativitas Generasi Muda",
  "Media & Promosi Digital",
];

function Layanan() {
  return (
    <section id="layanan" className="relative py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center reveal">
          <span className="eyebrow">Apa Yang Kami Kerjakan</span>
          <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">Layanan Unggulan</h2>
          <div className="batik-divider mx-auto my-6 w-40" />
          <p className="mx-auto max-w-2xl text-[color:var(--navy)]/70">
            Tujuh layanan inti yang menghubungkan budaya dengan kebutuhan mitra kami.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.t}
              className="reveal group relative overflow-hidden border border-[color:var(--navy)]/10 bg-white p-8 transition-all hover:border-[color:var(--gold)] hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-serif text-3xl italic text-[color:var(--gold)]">0{i + 1}</span>
                <span className="h-px w-16 bg-[color:var(--navy)]/20 group-hover:w-24 group-hover:bg-[color:var(--gold)] transition-all" />
              </div>
              <h3 className="font-serif text-xl text-[color:var(--navy)]">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--navy)]/70">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-[color:var(--navy)] p-10 md:p-14 text-[color:var(--cream)] reveal relative overflow-hidden">
          <div className="dot-grid absolute inset-0 opacity-10" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <span className="eyebrow !text-[color:var(--gold)]">Produk Unggulan</span>
              <h3 className="display mt-4 text-3xl md:text-4xl">Empat pilar produk kami.</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {PRODUCTS.map((p, i) => (
                <div key={p} className="flex items-start gap-4 border-t border-[color:var(--gold)]/30 pt-4">
                  <span className="font-serif text-2xl text-[color:var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-[color:var(--cream)]/90">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  { t: "Integrity", d: "Menjunjung kejujuran dan tanggung jawab dalam setiap langkah." },
  { t: "Collaboration", d: "Kolaborasi lintas komunitas, generasi, dan institusi." },
  { t: "Innovation", d: "Menghadirkan gagasan segar berakar pada tradisi." },
  { t: "Sustainability", d: "Program yang berdampak jangka panjang." },
  { t: "Excellence", d: "Standar terbaik pada setiap karya dan layanan." },
];

const WHY = [
  "Tim Berpengalaman",
  "Solusi Berbasis Kebutuhan",
  "Pendekatan Kolaboratif",
  "Berorientasi Hasil",
  "Jejaring yang Luas",
];

function ValuesWhy() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <span className="eyebrow">Fondasi Kami</span>
          <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">Nilai-Nilai Yayasan</h2>
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {VALUES.map((v, i) => (
            <div key={v.t} className="reveal border-t-2 border-[color:var(--gold)] pt-6">
              <div className="font-serif text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-serif text-2xl text-[color:var(--navy)]">{v.t}</h3>
              <p className="mt-2 text-sm text-[color:var(--navy)]/70">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2 items-center">
          <div className="reveal">
            <span className="eyebrow">Kepercayaan Anda</span>
            <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">
              Mengapa memilih<br />Dayatara.
            </h2>
            <div className="batik-divider my-6 w-32" />
            <p className="text-[color:var(--navy)]/70 text-lg">
              Pengalaman lebih dari dua dekade bekerja bersama komunitas, korporasi, dan pemerintah
              di seluruh penjuru Nusantara.
            </p>
          </div>
          <div className="reveal space-y-4">
            {WHY.map((w, i) => (
              <div
                key={w}
                className="group flex items-center gap-6 border-b border-[color:var(--navy)]/10 py-4 hover:border-[color:var(--gold)] transition-colors"
              >
                <span className="font-serif text-3xl italic text-[color:var(--gold)] w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl text-[color:var(--navy)] flex-1">{w}</span>
                <span className="text-[color:var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ORG = {
  pembina: ["Pratomo Setyohadi", "Bambang Sugiantoro"],
  pengawas: ["Untung Raharjo", "Nanang Junaedi", "Ginanjar Duta"],
  eksekutif: [
    { name: "Teguh Suharmaji", role: "Ketua Umum" },
    { name: "Sari Wardi Astuti", role: "Sekretaris" },
    { name: "Dedi Abdul Rahmat Saleh", role: "Bendahara" },
  ],
};

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
}

function Struktur() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--navy)] text-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <span className="eyebrow">Organisasi</span>
          <h2 className="display mt-4 text-4xl md:text-5xl">Struktur Organisasi</h2>
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="reveal">
            <h3 className="font-serif text-lg uppercase tracking-[0.3em] text-[color:var(--gold)]">Dewan Pembina</h3>
            <div className="mt-6 space-y-4">
              {ORG.pembina.map((n) => (
                <div key={n} className="flex items-center gap-4 border-b border-[color:var(--cream)]/10 pb-4">
                  <Avatar name={n} />
                  <div className="font-serif text-lg">{n}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <h3 className="font-serif text-lg uppercase tracking-[0.3em] text-[color:var(--gold)]">Dewan Pengawas</h3>
            <div className="mt-6 space-y-4">
              {ORG.pengawas.map((n) => (
                <div key={n} className="flex items-center gap-4 border-b border-[color:var(--cream)]/10 pb-4">
                  <Avatar name={n} />
                  <div className="font-serif text-lg">{n}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <h3 className="font-serif text-lg uppercase tracking-[0.3em] text-[color:var(--gold)]">Pengurus Harian</h3>
            <div className="mt-6 space-y-4">
              {ORG.eksekutif.map((p) => (
                <div key={p.name} className="flex items-center gap-4 border-b border-[color:var(--cream)]/10 pb-4">
                  <Avatar name={p.name} />
                  <div>
                    <div className="font-serif text-lg">{p.name}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">{p.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[color:var(--gold)] bg-[color:var(--gold)]/10 font-serif text-sm text-[color:var(--gold)]">
      {initials(name)}
    </div>
  );
}

const CLIENTS = {
  Government: ["Kementerian Lingkungan Hidup", "Kementerian Kesehatan", "Kementerian Pertanian", "Kementerian Pariwisata", "Kementerian KUKM", "Kementerian Kelautan & Perikanan"],
  Corporate: ["Bank Mandiri", "Pertamina", "Jaya Ancol", "Pelindo"],
  Community: ["Kadin", "KNPI", "Pemuda Pancasila", "Pakutho", "Pakuwojo", "Komppi", "Persada BUMD"],
};

function Portofolio() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <span className="eyebrow">Kepercayaan Mitra</span>
          <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">Portofolio Klien</h2>
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {Object.entries(CLIENTS).map(([cat, list]) => (
            <div key={cat} className="reveal border border-[color:var(--navy)]/10 bg-white/60 p-8">
              <h3 className="font-serif text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{cat}</h3>
              <ul className="mt-6 space-y-3">
                {list.map((c) => (
                  <li key={c} className="font-serif text-lg text-[color:var(--navy)] border-b border-dashed border-[color:var(--navy)]/15 pb-2">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const NEWS = [
  { tag: "Pertunjukan", title: "Malam Wayang Kolaborasi Lintas Generasi di Yogyakarta", date: "12 Nov 2025", img: gal4 },
  { tag: "UMKM", title: "Pameran Batik Nusantara Menjangkau Pasar Asia Tenggara", date: "28 Okt 2025", img: gal2 },
  { tag: "Komunitas", title: "Lokakarya Kreatif Anak Muda: Menganyam Cerita Nusantara", date: "05 Okt 2025", img: mudaImg },
];

function News() {
  return (
    <section id="news" className="py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 reveal">
          <div>
            <span className="eyebrow">Kabar Terkini</span>
            <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">Jurnal Dayatara</h2>
          </div>
          <a href="#" className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--navy)] border-b border-[color:var(--gold)] pb-1">
            Semua Artikel →
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {NEWS.map((a) => (
            <article key={a.title} className="reveal group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={a.img.url}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[color:var(--navy)] text-[color:var(--cream)] px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                  {a.tag}
                </span>
              </div>
              <div className="mt-5">
                <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--navy)]/50">{a.date}</div>
                <h3 className="mt-2 font-serif text-2xl text-[color:var(--navy)] leading-snug group-hover:text-[color:var(--gold)] transition-colors">
                  {a.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { img: gal1, cap: "Tari Tradisional" },
  { img: seniImg, cap: "Wayang Golek" },
  { img: gal3, cap: "Upacara Adat" },
  { img: gal4, cap: "Gamelan" },
  { img: gal2, cap: "Batik Nusantara" },
  { img: mudaImg, cap: "Anak Muda Kreatif" },
];

function Galeri() {
  return (
    <section id="galeri" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center reveal">
          <span className="eyebrow">Dokumentasi Kegiatan</span>
          <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">Galeri</h2>
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"
              }`}
            >
              <img
                src={g.img.url}
                alt={g.cap}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-[color:var(--cream)] font-serif text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {g.cap}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTI = [
  { q: "Dayatara membantu kami merancang program budaya yang benar-benar hidup di tengah masyarakat.", a: "Mitra Korporasi", role: "[Placeholder testimoni]" },
  { q: "Pendekatan kolaboratif Dayatara membuat komunitas kami merasa dilibatkan dari awal hingga akhir.", a: "Ketua Komunitas", role: "[Placeholder testimoni]" },
  { q: "Kualitas kurasi dan produksi pertunjukan mereka berkelas nasional. Sangat direkomendasikan.", a: "Instansi Pemerintah", role: "[Placeholder testimoni]" },
];

function Testimoni() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % TESTI.length), 6000);
    return () => clearInterval(t);
  }, []);
  const c = TESTI[i];
  return (
    <section className="py-24 md:py-32 bg-[color:var(--navy)] text-[color:var(--cream)] relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="eyebrow !text-[color:var(--gold)]">Testimoni</span>
        <div className="mt-8 font-serif text-6xl text-[color:var(--gold)] leading-none">"</div>
        <blockquote key={i} className="fade-up mt-4 font-serif text-2xl md:text-3xl leading-relaxed italic text-[color:var(--cream)]">
          {c.q}
        </blockquote>
        <div className="mt-8">
          <div className="font-serif text-lg text-[color:var(--gold)]">— {c.a}</div>
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--cream)]/60 mt-1">{c.role}</div>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {TESTI.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimoni ${idx + 1}`}
              className={`h-1 transition-all ${idx === i ? "w-10 bg-[color:var(--gold)]" : "w-4 bg-[color:var(--cream)]/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="kontak" className="bg-[color:var(--navy)] text-[color:var(--cream)] pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <DayataraLogo className="h-14 w-14" />
              <div>
                <div className="font-serif text-2xl tracking-widest">DAYATARA</div>
                <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Spirit of Culture</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-[color:var(--cream)]/75 leading-relaxed">
              Yayasan Daya Cipta Budaya Nusantara — ruang tumbuh bagi daya cipta Nusantara.
              Mari berkolaborasi menghidupkan budaya bersama kami.
            </p>
            <div className="mt-8 flex gap-3">
              {["Instagram", "Facebook", "TikTok", "YouTube", "Spotify"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--gold)]/40 text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition-colors text-xs"
                >
                  {s[0]}
                </a>
              ))}
            </div>
            <div className="mt-4 text-xs uppercase tracking-[0.25em] text-[color:var(--cream)]/60">@dayatarafest</div>
          </div>
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Kontak</h4>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--cream)]/85">
              <li>
                <div className="text-[color:var(--cream)]/50 text-xs uppercase tracking-widest">Email</div>
                <a href="mailto:dayataranusantara@gmail.com" className="hover:text-[color:var(--gold)]">dayataranusantara@gmail.com</a>
              </li>
              <li>
                <div className="text-[color:var(--cream)]/50 text-xs uppercase tracking-widest">WhatsApp</div>
                <a href="https://wa.me/6285817773695" className="hover:text-[color:var(--gold)]">0858-1777-3695</a>
              </li>
              <li>
                <div className="text-[color:var(--cream)]/50 text-xs uppercase tracking-widest">Website</div>
                <a href="https://dayataranusantara.com" className="hover:text-[color:var(--gold)]">dayataranusantara.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Kantor</h4>
            <ul className="mt-6 space-y-5 text-sm text-[color:var(--cream)]/85">
              <li>
                <div className="text-[color:var(--cream)]/50 text-xs uppercase tracking-widest">Jakarta</div>
                Jalan Mangunsarkoro No. 1, Menteng, Jakarta Pusat
              </li>
              <li>
                <div className="text-[color:var(--cream)]/50 text-xs uppercase tracking-widest">Bekasi</div>
                Ruko Rose Garden 1 No. 51, Grand Galaxy, Jakasetia, Bekasi Selatan
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--cream)]/15 pt-6 text-xs uppercase tracking-[0.25em] text-[color:var(--cream)]/50">
          <span>© {new Date().getFullYear()} Yayasan Daya Cipta Budaya Nusantara</span>
          <span>Culture · Creativity · Community</span>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6285817773695"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--navy)] shadow-2xl hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 22 12c0 5.5-4.5 10-10 10zm5.5-7.5c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7 0-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5 0-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.6 1.1 3 1.3 3.3.2.3 2.3 3.6 5.6 5 3.3 1.4 3.3.9 3.9.9.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"/>
        </svg>
      </a>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-[color:var(--cream)]">
      <Nav />
      <Hero />
      <Beranda />
      <PillarSection
        id="seni"
        eyebrow="Pilar 01"
        title="Seni Budaya Nusantara"
        image={seniImg}
        body={[
          "Program pengembangan seni dan budaya tradisional — dari wayang, tari, musik tradisional, hingga teater — dengan pendekatan yang menghubungkan warisan dan kehidupan hari ini.",
          "Kami memfasilitasi kurasi pertunjukan, produksi karya, serta ruang berkarya bagi seniman lintas generasi di seluruh Nusantara.",
        ]}
      />
      <PillarSection
        id="umkm"
        eyebrow="Pilar 02"
        title="UMKM & Ekonomi Kreatif"
        image={umkmImg}
        reverse
        tone="navy"
        body={[
          "Memberdayakan pelaku UMKM berbasis budaya melalui pendampingan, pelatihan, pengembangan produk, hingga akses pasar.",
          "Membangun ekosistem ekonomi kreatif yang berkelanjutan, adil, dan berakar pada kearifan lokal.",
        ]}
      />
      <PillarSection
        id="muda"
        eyebrow="Pilar 03"
        title="Kreatifitas Muda"
        image={mudaImg}
        body={[
          "Membuka ruang bagi generasi muda untuk berkarya, berkolaborasi, dan menemukan suara mereka melalui bahasa budaya.",
          "Lokakarya, residensi, dan program mentoring lintas disiplin — dari seni, media, hingga wirausaha kreatif.",
        ]}
      />
      <Layanan />
      <ValuesWhy />
      <Struktur />
      <Portofolio />
      <News />
      <Galeri />
      <Testimoni />
      <Footer />
    </main>
  );
}
