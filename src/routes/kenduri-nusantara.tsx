import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  BookOpen,
  Lightbulb,
  Network,
  Users,
  Wallet,
  Wrench,
  MapPin,
  UsersRound,
  Sparkles,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import tedTalkImg from "@/assets/kenduri/ted-talk.jpg";
import aiPresentationImg from "@/assets/kenduri/ai-presentation.jpg";
import kerumunanMalamImg from "@/assets/kenduri/kerumunan-malam.jpg";
import gamelanImg from "@/assets/kenduri/gamelan.jpg";
import narasumberImg from "@/assets/kenduri/narasumber.jpg";
import dokumentasiImg from "@/assets/kenduri/dokumentasi.jpg";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/kenduri-nusantara")({
  head: () => ({
    meta: [
      { title: "Kenduri Nusantara — Merajut Ketahanan Bangsa | Dayatara" },
      {
        name: "description",
        content:
          "Gerakan nasional Dayatara & ARUS Institute yang memadukan literasi AI dengan tradisi kenduri di 50 kota, 38 provinsi.",
      },
      { property: "og:title", content: "Kenduri Nusantara — Merajut Ketahanan Bangsa" },
      {
        property: "og:description",
        content:
          "Program unggulan Dayatara: literasi Kecerdasan Buatan berakar tradisi, menjangkau 50 kota di 38 provinsi.",
      },
    ],
  }),
  component: KenduriPage,
});

/* ---------- scroll-reveal + animated counters ---------- */

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

function Counter({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const dur = 1400;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
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
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
}

/* ---------- decorative SVGs (batik-inspired, in gold on navy) ---------- */

// Math.cos/sin can differ in their last decimal digit between the server and
// client runtimes, which React's hydration flags as a mismatch. Rounding
// keeps the SSR and client-rendered markup byte-identical.
function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M0 240 A240 240 0 0 1 240 0" opacity="0.55" />
      <path d="M0 200 A200 200 0 0 1 200 0" opacity="0.4" />
      <path d="M0 160 A160 160 0 0 1 160 0" opacity="0.3" />
      <path d="M0 120 A120 120 0 0 1 120 0" opacity="0.25" />
      {Array.from({ length: 14 }).map((_, i) => {
        const a = (i / 13) * (Math.PI / 2);
        const r1 = 118;
        const r2 = 132;
        const x1 = round2(Math.cos(a) * r1);
        const y1 = round2(240 - Math.sin(a) * r1);
        const x2 = round2(Math.cos(a) * r2);
        const y2 = round2(240 - Math.sin(a) * r2);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.55" />;
      })}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 5) * (Math.PI / 2);
        const r = 78;
        const cx = round2(Math.cos(a) * r);
        const cy = round2(240 - Math.sin(a) * r);
        return (
          <g key={i} opacity="0.8">
            <circle cx={cx} cy={cy} r="6" />
            <circle cx={cx} cy={cy} r="2.2" fill="currentColor" />
          </g>
        );
      })}
      {Array.from({ length: 22 }).map((_, i) => {
        const a = (i / 21) * (Math.PI / 2);
        const r = 218;
        const cx = round2(Math.cos(a) * r);
        const cy = round2(240 - Math.sin(a) * r);
        return <circle key={i} cx={cx} cy={cy} r="1.2" fill="currentColor" opacity="0.6" />;
      })}
    </svg>
  );
}

function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M60 195 C 55 140, 50 90, 60 15" />
      {Array.from({ length: 9 }).map((_, i) => {
        const y = 40 + i * 16;
        const side = i % 2 === 0 ? 1 : -1;
        return (
          <path
            key={i}
            d={`M60 ${y} Q ${60 + side * 22} ${y - 8}, ${60 + side * 34} ${y + 2} Q ${60 + side * 22} ${y + 10}, 60 ${y}`}
            opacity="0.85"
          />
        );
      })}
    </svg>
  );
}

/* ---------- shared bits ---------- */

function GoldDivider({ tone = "gold" }: { tone?: "gold" | "navy" }) {
  const color = tone === "gold" ? "text-gold" : "text-navy";
  const line = tone === "gold" ? "bg-gold/60" : "bg-navy/40";
  return (
    <div className={`mx-auto flex items-center gap-3 ${color}`} aria-hidden>
      <span className={`h-px w-16 ${line} md:w-24`} />
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
      <span className={`h-px w-16 ${line} md:w-24`} />
    </div>
  );
}

function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "navy" }) {
  const color = tone === "gold" ? "text-gold" : "text-navy/70";
  const line = tone === "gold" ? "bg-gold/70" : "bg-navy/40";
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`h-px w-10 ${line}`} />
      <p className={`font-sans text-[10px] font-medium uppercase tracking-[0.35em] ${color} md:text-xs`}>
        {children}
      </p>
      <span className={`h-px w-10 ${line}`} />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  italic,
  tone = "navy",
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  tone?: "navy" | "cream";
}) {
  const textColor = tone === "cream" ? "text-cream" : "text-navy";
  return (
    <div className="text-center">
      {eyebrow && <Eyebrow tone={tone === "cream" ? "gold" : "navy"}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl ${textColor}`}
      >
        {title}
        {italic && (
          <>
            {" "}
            <span className="italic text-gold">{italic}</span>
          </>
        )}
      </h2>
      <div className="mt-6">
        <GoldDivider tone={tone === "cream" ? "gold" : "navy"} />
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */

function KenduriHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-navy font-sans text-cream"
    >
      <img
        src={tedTalkImg}
        alt="Sabrang Mowo Damar Panuluh berbicara di hadapan ratusan hadirin"
        className="absolute inset-0 h-full w-full object-cover object-right opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(var(--cream) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 60%)",
        }}
      />

      <div className="pointer-events-none absolute -left-8 -top-8 h-[280px] w-[280px] text-gold md:h-[360px] md:w-[360px]">
        <CornerOrnament className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute -bottom-8 -right-8 h-[280px] w-[280px] rotate-180 text-gold md:h-[360px] md:w-[360px]">
        <CornerOrnament className="h-full w-full" />
      </div>

      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 text-gold/70 lg:block">
        <LeafSprig className="h-[280px] w-[80px]" />
      </div>
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-180 text-gold/70 lg:block">
        <LeafSprig className="h-[280px] w-[80px]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[6px] w-[220px] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold) 20%, var(--cream) 50%, var(--gold) 80%, transparent)",
        }}
      />

      <div className="fade-up relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <Eyebrow>Yayasan Daya Cipta Budaya Nusantara</Eyebrow>

        <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.4em] text-cream/60 md:text-xs">
          Program Unggulan Dayatara
        </p>

        <h1 className="mt-10 font-serif text-[13vw] font-semibold leading-[0.95] tracking-tight text-cream sm:text-7xl md:text-8xl lg:text-[112px]">
          Kenduri
          <br />
          <span className="italic text-gold">Nusantara</span>
        </h1>

        <div className="mt-10">
          <GoldDivider />
        </div>

        <p className="mt-8 font-serif text-2xl italic font-light tracking-wide text-cream md:text-3xl">
          Merajut Ketahanan Bangsa
        </p>
        <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.3em] text-cream/50 md:text-xs">
          Weaving National Resilience
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
          Gerakan nasional strategis yang menggabungkan literasi Kecerdasan Buatan (AI) dengan
          tradisi kenduri — dialog, gotong royong, dan silaturahmi — untuk memperkuat ketahanan
          bangsa di era disrupsi digital.
        </p>

        <div className="mt-14 flex items-stretch gap-10 md:gap-16">
          <div className="flex flex-col items-center">
            <Counter to={50} className="font-serif text-6xl font-semibold text-gold md:text-7xl" />
            <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.35em] text-cream/70 md:text-xs">
              Kota
            </span>
          </div>
          <div className="w-px bg-gold/30" />
          <div className="flex flex-col items-center">
            <Counter to={38} className="font-serif text-6xl font-semibold text-gold md:text-7xl" />
            <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.35em] text-cream/70 md:text-xs">
              Provinsi
            </span>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#ringkasan"
            className="group inline-flex items-center gap-3 rounded-full border border-gold/70 bg-gold px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy transition-all hover:border-cream hover:bg-cream hover:shadow-[0_10px_40px_-10px_rgba(198,167,94,0.6)]"
          >
            Pelajari Program
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-14 flex items-center gap-4">
          <span className="h-px w-8 bg-cream/30" />
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/60 md:text-xs">
            Bersama <span className="text-gold">ARUS Institute</span> — Applied Research for Human
            Sovereignty
          </p>
          <span className="h-px w-8 bg-cream/30" />
        </div>
      </div>
    </section>
  );
}

/* ---------- section wrappers ---------- */

function NavySection({
  id,
  children,
  decorative = true,
}: {
  id: string;
  children: ReactNode;
  decorative?: boolean;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 overflow-hidden bg-navy py-24 md:py-32">
      {decorative && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(var(--cream) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="pointer-events-none absolute -right-16 -top-16 h-[260px] w-[260px] rotate-90 text-gold/60">
            <CornerOrnament className="h-full w-full" />
          </div>
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-[260px] w-[260px] -rotate-90 text-gold/60">
            <CornerOrnament className="h-full w-full" />
          </div>
        </>
      )}
      <div className="reveal relative z-10 mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

function CreamSection({
  id,
  children,
  decorative = true,
}: {
  id: string;
  children: ReactNode;
  decorative?: boolean;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 overflow-hidden bg-cream py-24 md:py-32">
      {decorative && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage: "radial-gradient(var(--navy) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="pointer-events-none absolute -left-20 top-10 h-[220px] w-[220px] text-navy/25">
            <LeafSprig className="h-full w-full" />
          </div>
          <div className="pointer-events-none absolute -right-20 bottom-10 h-[220px] w-[220px] rotate-180 text-navy/25">
            <LeafSprig className="h-full w-full" />
          </div>
        </>
      )}
      <div className="reveal relative z-10 mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

function PhotoFrame({
  src,
  alt,
  caption,
  tone = "navy",
  ratio,
}: {
  src: string;
  alt: string;
  caption?: string;
  tone?: "navy" | "cream";
  ratio: number;
}) {
  const captionColor = tone === "cream" ? "text-cream/50" : "text-navy/50";
  return (
    <div className="mx-auto mt-14 max-w-3xl">
      <div
        className="relative overflow-hidden rounded-sm border border-gold/30 shadow-xl"
        style={{ aspectRatio: ratio }}
      >
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      {caption && (
        <p className={`mt-4 text-center font-sans text-[10px] uppercase tracking-[0.3em] ${captionColor}`}>
          {caption}
        </p>
      )}
    </div>
  );
}

/* ---------- content sections ---------- */

function Ringkasan() {
  return (
    <CreamSection id="ringkasan">
      <SectionHeading eyebrow="Ringkasan Eksekutif" title="Merespon Era" italic="Disrupsi Digital" />
      <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-navy/80 md:text-xl">
        Kenduri Nusantara merupakan gerakan nasional strategis yang berkomitmen menghadapi
        tantangan era digital melalui pengembangan program inovatif yang menggabungkan literasi
        Kecerdasan Buatan (AI) dengan tradisi kenduri — dialog, gotong royong, dan silaturahmi.
        Inisiatif ini dirancang sebagai respons proaktif terhadap ancaman modern seperti{" "}
        <em className="text-navy">cognitive warfare</em>, banjir disinformasi, dan manipulasi{" "}
        <em className="text-navy">deepfake</em> yang berpotensi mengikis nalar kritis serta kohesi
        sosial masyarakat. Dengan fokus pada kolaborasi strategis di 50 titik kegiatan yang
        menjangkau 38 provinsi, kami bertujuan meningkatkan kapasitas sumber daya manusia dan
        memperkuat ketahanan nasional non-militer, guna memastikan bangsa Indonesia siap
        menghadapi perubahan global yang cepat dengan tetap berdaulat di atas fondasi kearifan
        lokal.
      </p>
    </CreamSection>
  );
}

function Tantangan() {
  return (
    <NavySection id="tantangan">
      <SectionHeading eyebrow="Konteks" title="Tantangan Nasional di" italic="Era AI" tone="cream" />
      <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-cream/80 md:text-xl">
        Di era kecerdasan buatan, Indonesia menghadapi berbagai tantangan signifikan. Dari
        pengangguran akibat otomatisasi hingga kesenjangan digital, penting bagi kita untuk
        beradaptasi dan bersaing. Kenduri Nusantara berkomitmen untuk membantu masyarakat memahami
        dan mengatasi perubahan ini, dengan program-program yang fokus pada pengembangan
        keterampilan dan akses teknologi.
      </p>
      <PhotoFrame
        src={aiPresentationImg}
        alt="Presentasi Revolusi Kecerdasan Buatan: Masa Depan AI di hadapan ratusan peserta"
        caption="Sesi Literasi AI — Revolusi Kecerdasan Buatan: Masa Depan AI"
        tone="cream"
        ratio={1316 / 348}
      />
    </NavySection>
  );
}

function Mengapa() {
  return (
    <CreamSection id="mengapa">
      <SectionHeading eyebrow="Alasan" title="Mengapa" italic="Kenduri Nusantara" />
      <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-navy/80 md:text-xl">
        Program Kenduri Nusantara menawarkan solusi komprehensif melalui penyelenggaraan literasi
        Kecerdasan Buatan (AI) yang kritis untuk membangun kesadaran kolektif masyarakat terhadap
        ancaman <em>cognitive warfare</em> dan disinformasi. Gerakan ini berupaya menjembatani
        jurang pemahaman digital antargenerasi melalui forum dialog yang mempertemukan orang tua,
        guru, dan anak muda. Selain itu, program ini memposisikan kedaulatan nilai dan kearifan
        lokal sebagai benteng utama pertahanan ideologi. Seluruh rangkaian solusi tersebut
        diintegrasikan ke dalam tradisi kenduri — melalui pentas musik daerah, bazaar UMKM, dan
        makan bersama — sebagai upaya nyata merajut kembali kohesi sosial dan rasa percaya
        antarwarga.
      </p>
      <PhotoFrame
        src={gamelanImg}
        alt="Pertunjukan gamelan dalam rangkaian acara kenduri"
        caption="Pentas Musik Daerah — Bagian dari Tradisi Kenduri"
        ratio={1350 / 648}
      />
    </CreamSection>
  );
}

function VisiTujuan() {
  return (
    <NavySection id="visi">
      <SectionHeading eyebrow="Arah Gerakan" title="Visi &" italic="Tujuan" tone="cream" />
      <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-14">
        {[
          {
            label: "Visi",
            body: "Menjadi pelopor dalam pengembangan AI yang inklusif di seluruh Indonesia, mendukung integrasi teknologi dalam berbagai sektor. Kami bertujuan untuk memberdayakan masyarakat melalui program pendidikan dan pelatihan yang mempersiapkan mereka menghadapi tantangan di era digital.",
          },
          {
            label: "Tujuan",
            body: "Meningkatkan kesadaran dan pemahaman tentang AI di kalangan masyarakat, serta menciptakan kolaborasi strategis dengan berbagai pihak. Memastikan setiap individu mendapatkan akses yang sama untuk memanfaatkan teknologi AI dalam kehidupan sehari-hari.",
          },
        ].map((c, i) => (
          <div
            key={c.label}
            className="reveal relative rounded-sm border border-gold/25 bg-navy-deep/60 p-10"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="pointer-events-none absolute -left-px -top-px h-10 w-10 border-l border-t border-gold" />
            <div className="pointer-events-none absolute -bottom-px -right-px h-10 w-10 border-b border-r border-gold" />
            <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-gold">{c.label}</p>
            <h3 className="mt-3 font-serif text-3xl font-semibold text-cream md:text-4xl">
              {c.label === "Visi" ? "Pelopor AI Inklusif" : "Kesadaran & Akses Setara"}
            </h3>
            <p className="mt-6 text-base leading-relaxed text-cream/75 md:text-lg">{c.body}</p>
          </div>
        ))}
      </div>
    </NavySection>
  );
}

function Linimasa() {
  const steps = [
    { title: "Inisiasi Program", body: "Memulai langkah awal program dengan perencanaan." },
    { title: "Peluncuran Pilot", body: "Menerapkan program di lokasi terpilih untuk pilot." },
    { title: "Ekspansi Nasional", body: "Memperluas jangkauan ke seluruh Indonesia secara nasional." },
    { title: "Evaluasi & Pelaporan", body: "Melakukan evaluasi dan pelaporan untuk hasil program." },
  ];
  return (
    <CreamSection id="linimasa">
      <SectionHeading eyebrow="Peta Jalan" title="Linimasa" italic="Program" />
      <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-navy/70 md:text-lg">
        Dalam dua tahun, Kenduri Nusantara akan menjalankan empat tahapan penting yang saling
        menyambung — dari inisiasi hingga evaluasi menyeluruh.
      </p>

      <div className="relative mt-20">
        <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-navy/25 md:block" />
        <div className="grid gap-12 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal relative flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-cream">
                <span className="font-serif text-sm font-semibold text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-navy md:text-2xl">{s.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-navy/70 md:text-base">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </CreamSection>
  );
}

function Pilar() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Edukasi",
      items: ["Pelatihan berbasis AI", "Workshop keterampilan", "Seminar untuk masyarakat"],
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      items: ["Pengembangan teknologi", "Riset terapan", "Kolaborasi industri"],
    },
    {
      icon: Network,
      title: "Aksesbilitas",
      items: ["Penyediaan fasilitas", "Dukungan infrastruktur", "Jangkauan luas"],
    },
    {
      icon: Users,
      title: "Kolaborasi",
      items: ["Partisipasi masyarakat", "Kemitraan strategis", "Jaringan kolaboratif"],
    },
  ];
  return (
    <NavySection id="pilar">
      <SectionHeading eyebrow="Fondasi" title="Pilar &" italic="Aktivitas" tone="cream" />
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, items }, i) => (
          <div key={title} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="group relative flex h-full flex-col rounded-sm border border-gold/25 bg-navy-deep/50 p-8 transition-colors hover:border-gold/60">
              <div className="pointer-events-none absolute -left-px -top-px h-8 w-8 border-l border-t border-gold" />
              <div className="pointer-events-none absolute -bottom-px -right-px h-8 w-8 border-b border-r border-gold" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-gold">
                <Icon className="h-5 w-5" strokeWidth={1.4} />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-cream">{title}</h3>
              <ul className="mt-5 space-y-2 text-sm text-cream/75">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </NavySection>
  );
}

function Jangkauan() {
  return (
    <CreamSection id="jangkauan">
      <SectionHeading eyebrow="Skala" title="Jangkauan" italic="Program" />
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="reveal relative rounded-sm border border-navy/15 bg-cream-dim/40 p-12 text-center">
          <MapPin className="mx-auto h-8 w-8 text-gold" strokeWidth={1.4} />
          <div className="mt-6 flex items-baseline justify-center gap-3">
            <Counter to={50} className="font-serif text-7xl font-semibold text-navy md:text-8xl" />
            <span className="font-sans text-sm uppercase tracking-[0.25em] text-navy/60">lokasi</span>
          </div>
          <p className="mt-4 text-base text-navy/70 md:text-lg">
            tersebar di <span className="font-semibold text-navy">38 provinsi</span> di seluruh
            Indonesia.
          </p>
        </div>
        <div className="reveal relative rounded-sm border border-navy/15 bg-cream-dim/40 p-12 text-center" style={{ transitionDelay: "120ms" }}>
          <UsersRound className="mx-auto h-8 w-8 text-gold" strokeWidth={1.4} />
          <div className="mt-6 flex items-baseline justify-center gap-3">
            <Counter to={50} suffix="K+" className="font-serif text-7xl font-semibold text-navy md:text-8xl" />
            <span className="font-sans text-sm uppercase tracking-[0.25em] text-navy/60">individu</span>
          </div>
          <p className="mt-4 text-base text-navy/70 md:text-lg">
            menjangkau pelajar, profesional, dan komunitas lokal.
          </p>
        </div>
      </div>
      <PhotoFrame
        src={kerumunanMalamImg}
        alt="Ribuan peserta memadati kegiatan Kenduri Nusantara"
        caption="Antusiasme Peserta di Salah Satu Titik Kegiatan"
        ratio={1295 / 551}
      />
    </CreamSection>
  );
}

function Dampak() {
  return (
    <NavySection id="dampak">
      <SectionHeading eyebrow="Outcome" title="Dampak yang" italic="Diharapkan" tone="cream" />
      <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-8 text-center">
        <Sparkles className="h-8 w-8 text-gold" strokeWidth={1.4} />
        <p className="text-lg leading-relaxed text-cream/80 md:text-xl">
          Program <span className="uppercase tracking-wider text-gold">Kenduri Nusantara</span>{" "}
          diharapkan dapat memberikan dampak positif yang signifikan dalam meningkatkan kesadaran
          dan pemahaman masyarakat tentang pemanfaatan teknologi AI, menciptakan peluang baru bagi
          pengembangan ekonomi dan sosial di seluruh Indonesia, menjangkau 50 lokasi di 38 provinsi
          selama dua tahun ke depan.
        </p>
      </div>
    </NavySection>
  );
}

function Narasumber() {
  return (
    <CreamSection id="narasumber">
      <SectionHeading eyebrow="Narasumber Utama" title="Sabrang Mowo" italic="Damar Panuluh" />
      <div className="mt-16 grid items-center gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        <div className="mx-auto md:mx-0">
          <div className="relative h-[260px] w-[260px]">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--gold) 25%, transparent), transparent 65%)",
              }}
            />
            <img
              src={narasumberImg}
              alt="Sabrang Mowo Damar Panuluh"
              className="relative h-full w-full rounded-full border border-gold/50 object-cover shadow-xl"
            />
            <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2">
              <div className="rounded-full border border-gold/60 bg-cream px-3 py-1">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-navy">
                  Narasumber
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-gold">
            Tenaga Ahli Dewan Pertahanan Nasional
          </p>
          <p className="mt-6 text-lg leading-relaxed text-navy/80 md:text-xl">
            <span className="font-semibold text-navy">Sabrang Mowo Damar Panuluh</span> bukan hanya
            seniman. Ia adalah pemikir yang berdiri di persimpangan antara seni, budaya, ilmu
            pengetahuan, dan kebangsaan. Sabrang telah lama menekuni riset mendalam tentang dampak
            perkembangan teknologi AI terhadap tatanan sosial, budaya, dan kehidupan berbangsa.
            Posisinya sebagai tenaga ahli Dewan Pertahanan Nasional menegaskan pemikirannya bukan
            sekadar wacana intelektual — ia bagian dari upaya menjaga kedaulatan dan ketahanan
            Indonesia di era yang penuh disrupsi.
          </p>
          <div className="mt-8 flex items-center gap-3 text-navy/60">
            <ShieldCheck className="h-4 w-4 text-gold" strokeWidth={1.6} />
            <span className="font-sans text-[11px] uppercase tracking-[0.3em]">
              Seni · Budaya · Ilmu · Kebangsaan
            </span>
          </div>
        </div>
      </div>
    </CreamSection>
  );
}

function Dukungan() {
  const cards = [
    {
      icon: Wallet,
      title: "Dukungan Finansial",
      body: "Untuk merealisasikan program ini, kami memerlukan dukungan finansial dari para mitra strategis. Pendanaan akan digunakan untuk pelaksanaan kegiatan, pengembangan sumber daya, dan pengelolaan operasional.",
    },
    {
      icon: Wrench,
      title: "Dukungan Teknis",
      body: "Selain dukungan finansial, kami juga mencari dukungan teknis dari para ahli dan organisasi. Bantuan berupa pelatihan, konsultasi, dan alat teknologi akan sangat berharga.",
    },
  ];
  return (
    <NavySection id="dukungan">
      <SectionHeading eyebrow="Kolaborasi" title="Kebutuhan" italic="Dukungan" tone="cream" />
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {cards.map(({ icon: Icon, title, body }, i) => (
          <div
            key={title}
            className="reveal relative rounded-sm border border-gold/25 bg-navy-deep/60 p-10"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="pointer-events-none absolute -left-px -top-px h-10 w-10 border-l border-t border-gold" />
            <div className="pointer-events-none absolute -bottom-px -right-px h-10 w-10 border-b border-r border-gold" />
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 text-gold">
              <Icon className="h-6 w-6" strokeWidth={1.4} />
            </div>
            <h3 className="mt-6 font-serif text-3xl font-semibold text-cream">{title}</h3>
            <p className="mt-4 text-base leading-relaxed text-cream/75 md:text-lg">{body}</p>
          </div>
        ))}
      </div>
    </NavySection>
  );
}

function Dokumentasi() {
  return (
    <CreamSection id="dokumentasi" decorative={false}>
      <SectionHeading eyebrow="Jejak Langkah" title="Dokumentasi" italic="Kegiatan" />
      <div
        className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-sm border border-navy/15 shadow-xl"
        style={{ aspectRatio: 1211 / 594 }}
      >
        <img
          src={dokumentasiImg}
          alt="Kumpulan dokumentasi kegiatan Kenduri Nusantara di berbagai lokasi"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </CreamSection>
  );
}

function Kontak() {
  const waNumber = "6281297184876";
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Halo, saya tertarik dengan program Kenduri Nusantara."
  )}`;
  return (
    <CreamSection id="kontak">
      <SectionHeading eyebrow="Kontak" title="Jangan Ragu Untuk" italic="Menghubungi Kami" />
      <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-navy/80 md:text-xl">
        Untuk informasi lebih lanjut mengenai Kenduri Nusantara, silakan menghubungi{" "}
        <span className="font-semibold text-navy">Ginanjar</span> di{" "}
        <a
          href="tel:+6281297184876"
          className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
        >
          +62 812-9718-4876
        </a>
        . Kami siap membantu menjawab pertanyaan dan memberikan informasi yang diperlukan untuk
        mendukung kolaborasi dan partisipasi dalam program kami.
      </p>

      <div className="mt-12 flex flex-col items-center gap-4">
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-cream transition-all hover:bg-navy-deep hover:shadow-[0_10px_40px_-10px_rgba(31,42,68,0.5)]"
        >
          <MessageCircle className="h-4 w-4 text-gold" strokeWidth={1.8} />
          Hubungi via WhatsApp
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-navy/50">
          Ginanjar · +62 812-9718-4876
        </p>
      </div>
    </CreamSection>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-navy-deep py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold">Kenduri Nusantara</p>
        <p className="text-xs text-cream/60">
          © {new Date().getFullYear()} Yayasan Daya Cipta Budaya Nusantara · Bersama ARUS Institute
        </p>
      </div>
    </footer>
  );
}

/* ---------- page ---------- */

function KenduriPage() {
  useReveal();
  return (
    <main className="relative w-full bg-navy font-sans">
      <SiteNav />
      <KenduriHero />
      <Ringkasan />
      <Tantangan />
      <Mengapa />
      <VisiTujuan />
      <Linimasa />
      <Pilar />
      <Jangkauan />
      <Dampak />
      <Narasumber />
      <Dukungan />
      <Dokumentasi />
      <Kontak />
      <Footer />
    </main>
  );
}
