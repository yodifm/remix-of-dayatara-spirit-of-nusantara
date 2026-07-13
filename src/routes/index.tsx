import { createFileRoute } from "@tanstack/react-router";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  Compass,
  Lightbulb,
  Users,
  Leaf,
  GraduationCap,
  Microscope,
  Palette,
  Megaphone,
  ShieldCheck,
  Handshake,
  Sparkles,
  Award,
  CheckCircle2,
  Landmark,
  Building2,
  HeartHandshake,
  Expand,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Globe,
  Download,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { DayataraLogo } from "@/components/DayataraLogo";
import SplitText from "@/components/SplitText/SplitText";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 22 12c0 5.5-4.5 10-10 10zm5.5-7.5c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7 0-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5 0-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.6 1.1 3 1.3 3.3.2.3 2.3 3.6 5.6 5 3.3 1.4 3.3.9 3.9.9.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"/>
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.58.07-5.37.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function SpotifyIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.36-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

const NAV = [
  { href: "#beranda", id: "Beranda", en: "Home", ar: "الرئيسية" },
  { href: "#seni", id: "Seni Budaya", en: "Arts & Culture", ar: "الفنون والثقافة" },
  { href: "#umkm", id: "UMKM", en: "SMEs", ar: "المشروعات الصغيرة" },
  { href: "#muda", id: "Kreatifitas Muda", en: "Youth Creativity", ar: "إبداع الشباب" },
  { href: "#layanan", id: "Layanan", en: "Services", ar: "الخدمات" },
  { href: "#news", id: "News", en: "News", ar: "الأخبار" },
  { href: "#galeri", id: "Galeri", en: "Gallery", ar: "المعرض" },
  { href: "#kontak", id: "Kontak", en: "Contact", ar: "التواصل" },
];

/**
 * Re-scans for `.reveal` elements whenever `rescanKey` changes (e.g. the active
 * language), since swapping translated text can change a list item's React key
 * and replace its DOM node with one the previous observer never saw — leaving
 * it stuck at opacity:0 forever.
 */
function useReveal(rescanKey?: unknown) {
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
  }, [rescanKey]);
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

const LANGUAGES = [
  { code: "id", native: "Indonesia" },
  { code: "en", native: "English" },
  { code: "ar", native: "العربية" },
];

const LANG_STORAGE_KEY = "dayatara-lang";

const LanguageContext = createContext<{ lang: string; setLang: (code: string) => void }>({
  lang: "id",
  setLang: () => {},
});

function useLang() {
  return useContext(LanguageContext);
}

/** Returns the text for the active language (id/en/ar). Falls back to Indonesian if an Arabic variant hasn't been provided yet. */
function tr(lang: string, id: string, en: string, ar?: string) {
  if (lang === "en") return en;
  if (lang === "ar") return ar ?? id;
  return id;
}

/** Section heading with a staggered word-by-word entrance animation (React Bits' SplitText). */
function SectionHeading({
  text,
  className,
  tag = "h2",
  align = "center",
}: {
  text: string;
  className?: string;
  tag?: "h2" | "h3";
  align?: "center" | "left" | "right";
}) {
  return (
    <SplitText
      key={text}
      text={text}
      tag={tag}
      // SplitText's internal wrapper hardcodes "inline-block", which pulls the
      // heading onto the same line as a preceding inline sibling (e.g. the
      // eyebrow span). Force block display back with !important.
      className={`!block w-full ${className ?? ""}`}
      splitType="words"
      delay={40}
      duration={0.7}
      from={{ opacity: 0, y: 24 }}
      to={{ opacity: 1, y: 0 }}
      textAlign={align}
    />
  );
}

function useLanguage() {
  const [lang, setLangState] = useState<string | null>(null);
  const [showGate, setShowGate] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored) {
      setLangState(stored);
    } else {
      setShowGate(true);
    }
  }, []);

  const setLang = (code: string) => {
    window.localStorage.setItem(LANG_STORAGE_KEY, code);
    setLangState(code);
    setShowGate(false);
  };

  const activeLang = lang ?? "id";
  useEffect(() => {
    document.documentElement.dir = activeLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = activeLang;
  }, [activeLang]);

  return { lang: activeLang, setLang, showGate };
}

function LanguageGate({ onSelect }: { onSelect: (code: string) => void }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[color:var(--navy)] p-6">
      <div className="dot-grid absolute inset-0 opacity-10" />
      <div className="fade-up relative text-center">
        <DayataraLogo className="mx-auto h-16 w-16" />
        <div className="mt-6 font-serif text-2xl tracking-widest text-[color:var(--cream)]">DAYATARA</div>
        <p className="eyebrow mt-4 !text-[color:var(--gold)]">Pilih Bahasa / Choose Language / اختر اللغة</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => onSelect(l.code)}
              className="rounded-full border border-[color:var(--gold)]/50 px-8 py-3.5 font-serif text-lg text-[color:var(--cream)] transition-all hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)]"
            >
              {l.native}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function LangSwitcher({ lang, setLang }: { lang: string; setLang: (code: string) => void }) {
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Pilih bahasa"
        className="flex items-center gap-1.5 rounded-full border border-[color:var(--gold)]/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)] transition-colors hover:bg-[color:var(--gold)]/10"
      >
        <Globe size={14} />
        {current.code.toUpperCase()}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute end-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--navy)] shadow-xl">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-[color:var(--gold)]/10 ${
                  l.code === lang ? "text-[color:var(--gold)]" : "text-[color:var(--cream)]/85"
                }`}
              >
                {l.native}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Nav() {
  const { lang, setLang } = useLang();
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
        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--cream)]/85 hover:text-[color:var(--gold)] transition-colors xl:tracking-[0.2em]"
            >
              {tr(lang, n.id, n.en, n.ar)}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitcher lang={lang} setLang={setLang} />
          <a
            href="#kontak"
            className="inline-flex items-center whitespace-nowrap rounded-full border border-[color:var(--gold)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition-colors"
          >
            {tr(lang, "Kolaborasi", "Collaborate", "تعاون")}
          </a>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitcher lang={lang} setLang={setLang} />
          <button
            className="text-[color:var(--cream)] p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
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
                {tr(lang, n.id, n.en, n.ar)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { lang } = useLang();
  return (
    <section id="beranda" className="relative min-h-screen overflow-hidden bg-[color:var(--navy)] text-[color:var(--cream)]">
      <img
        src={heroImg.url}
        alt={tr(lang, "Penari tradisional Nusantara", "Traditional Nusantara dancer", "راقصة تقليدية من نوسانتارا")}
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
            <span className="eyebrow !text-[color:var(--gold)]">
              {tr(lang, "Yayasan Daya Cipta Budaya Nusantara", "Nusantara Cultural Creativity Foundation", "مؤسسة داياتارا للإبداع الثقافي في نوسانتارا")}
            </span>
          </div>
          <h1 className="display text-[clamp(2.4rem,6vw,5rem)] text-[color:var(--cream)]">
            Spirit of <span className="italic text-[color:var(--gold)] normal-case">Culture,</span>
            <br />
            Creativity <span className="text-[color:var(--gold)]">&</span> Community
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--cream)]/85 md:text-xl">
            {tr(
              lang,
              '"Dayatara adalah ruang tumbuh bagi daya cipta Nusantara — menghubungkan ide, manusia, dan potensi untuk menciptakan perubahan yang bermakna."',
              '"Dayatara is a growing space for Nusantara\'s creative energy — connecting ideas, people, and potential to create meaningful change."',
              '"داياتارا هي مساحة نمو للإبداع في نوسانتارا — تربط بين الأفكار والناس والإمكانات لصنع تغيير ذي معنى."'
            )}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--navy)] hover:bg-[color:var(--cream)] transition-colors"
            >
              {tr(lang, "Mari Bertumbuh Bersama Dayatara →", "Grow With Dayatara →", "لننمُ معًا مع داياتارا ←")}
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--cream)]/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--cream)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-colors"
            >
              <Download size={16} />
              Download Catalog
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
  const { lang } = useLang();
  const stats = [
    { n: 50, s: "+", label: "Project" },
    { n: 200, s: "+", label: "Partners" },
    { n: 50, s: "+", label: "Communities Empowered" },
    { n: 20, s: "+", label: "Years Experience" },
  ];
  const pilar = [
    {
      id: { title: "Seni Budaya Nusantara", desc: "Pengembangan seni & budaya tradisi — wayang, tari, musik, dan teater." },
      en: { title: "Nusantara Arts & Culture", desc: "Development of traditional arts & culture — wayang, dance, music, and theatre." },
      ar: { title: "فنون وثقافة نوسانتارا", desc: "تطوير الفنون والثقافة التقليدية — الوايانج والرقص والموسيقى والمسرح." },
    },
    {
      id: { title: "UMKM & Ekonomi Kreatif", desc: "Memberdayakan pelaku UMKM berbasis budaya untuk tumbuh dan berdaya saing." },
      en: { title: "SMEs & Creative Economy", desc: "Empowering culture-based SMEs to grow and compete." },
      ar: { title: "المشروعات الصغيرة والاقتصاد الإبداعي", desc: "تمكين المشروعات الصغيرة القائمة على الثقافة من النمو والمنافسة." },
    },
    {
      id: { title: "Kreatifitas Muda", desc: "Membuka ruang generasi muda untuk berkarya, berkolaborasi, dan berdampak." },
      en: { title: "Youth Creativity", desc: "Opening space for the younger generation to create, collaborate, and make an impact." },
      ar: { title: "إبداع الشباب", desc: "فتح المجال أمام جيل الشباب للإبداع والتعاون وصنع الأثر." },
    },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 reveal">
            <span className="eyebrow">{tr(lang, "Tentang Kami", "About Us", "من نحن")}</span>
            <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">
              {tr(lang, "Wadah", "A space for", "مساحة")}{" "}
              <em className="text-[color:var(--gold)] not-italic normal-case font-serif italic">
                {tr(lang, "kolaborasi", "collaboration", "للتعاون")}
              </em>
              <br />
              {tr(lang, "budaya Nusantara.", "in Nusantara culture.", "الثقافي في نوسانتارا.")}
            </h2>
            <div className="batik-divider my-8 w-32" />
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="text-lg leading-relaxed text-[color:var(--navy)]/80">
              {tr(
                lang,
                "Atas dasar semangat menjaga budaya agar tetap hidup dan bermanfaat bagi masyarakat, Yayasan Daya Cipta Nusantara (DAYATARA) hadir sebagai wadah kolaborasi yang menghubungkan budaya, kreativitas, dan komunitas dalam satu gerakan bersama.",
                "Driven by the spirit of keeping culture alive and beneficial for society, Yayasan Daya Cipta Nusantara (DAYATARA) exists as a collaboration space connecting culture, creativity, and community in one shared movement.",
                "انطلاقًا من روح الحفاظ على الثقافة حية ونافعة للمجتمع، تأتي مؤسسة داياتارا (Yayasan Daya Cipta Nusantara) كمساحة تعاون تربط بين الثقافة والإبداع والمجتمع في حركة واحدة مشتركة."
              )}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--navy)]/80">
              {tr(lang, "Melalui semangat", "Through the spirit of", "من خلال روح")}{" "}
              <strong className="text-[color:var(--navy)]">Culture, Creativity, Community</strong>
              {tr(
                lang,
                ", DAYATARA mendorong tumbuhnya kegiatan seni & budaya Nusantara, memperkuat komunitas daerah, membuka ruang kreativitas generasi muda, serta mendukung UMKM dan ekonomi kreatif.",
                ", DAYATARA drives the growth of Nusantara's arts & culture, strengthens local communities, opens creative space for the younger generation, and supports SMEs and the creative economy.",
                "، تدفع داياتارا نمو الفنون والثقافة في نوسانتارا، وتعزز المجتمعات المحلية، وتفتح مجال الإبداع أمام الشباب، وتدعم المشروعات الصغيرة والاقتصاد الإبداعي."
              )}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--navy)]/80 italic">
              {tr(
                lang,
                "Bagi DAYATARA, budaya bukan hanya warisan yang perlu dijaga, tetapi juga kekuatan yang menyatukan masyarakat dan menggerakkan masa depan Nusantara.",
                "For DAYATARA, culture is not only a heritage to protect, but also a force that unites society and drives Nusantara's future.",
                "بالنسبة لداياتارا، الثقافة ليست مجرد تراث يجب الحفاظ عليه، بل قوة توحّد المجتمع وتدفع مستقبل نوسانتارا إلى الأمام."
              )}
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
        <div className="mt-24 text-center reveal">
          <span className="eyebrow">{tr(lang, "Fokus Kami", "Our Focus", "تركيزنا")}</span>
          <SectionHeading
            text={tr(lang, "Pilar di Dayatara.", "Pillars at Dayatara.", "ركائز داياتارا.")}
            className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pilar.map((p, i) => {
            const c = lang === "en" ? p.en : lang === "ar" ? p.ar : p.id;
            return (
            <div
              key={p.id.title}
              className="reveal group relative rounded-2xl border border-[color:var(--navy)]/10 bg-white/60 p-8 backdrop-blur transition-all hover:border-[color:var(--gold)] hover:-translate-y-1"
            >
              <div className="mb-6 font-serif text-4xl text-[color:var(--gold)]">
                0{i + 1}
              </div>
              <h3 className="font-serif text-2xl text-[color:var(--navy)]">{c.title}</h3>
              <p className="mt-3 text-[color:var(--navy)]/70">{c.desc}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type Bilingual = { id: string; en: string; ar?: string };

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
  eyebrow: Bilingual;
  title: Bilingual;
  body: Bilingual[];
  image: { url: string };
  reverse?: boolean;
  tone?: "cream" | "navy";
}) {
  const { lang } = useLang();
  const dark = tone === "navy";
  const tTitle = tr(lang, title.id, title.en, title.ar);
  const whatsappHref = `https://wa.me/6285817773695?text=${encodeURIComponent(
    tr(
      lang,
      `Halo Dayatara, saya tertarik berkolaborasi di program ${tTitle}.`,
      `Hello Dayatara, I'm interested in collaborating on the ${tTitle} program.`,
      `مرحبًا داياتارا، أنا مهتم بالتعاون في برنامج ${tTitle}.`
    )
  )}`;
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
              alt={tTitle}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="dot-grid absolute -right-4 -bottom-4 h-24 w-24 opacity-60" />
          </div>
          <div className="reveal">
            <span className="eyebrow">{tr(lang, eyebrow.id, eyebrow.en, eyebrow.ar)}</span>
            <SectionHeading
              text={tTitle}
              className={`display mt-4 text-4xl md:text-5xl ${dark ? "text-[color:var(--cream)]" : "text-[color:var(--navy)]"}`}
              align="left"
            />
            <div className="batik-divider my-8 w-32" />
            {body.map((p, i) => (
              <p key={i} className={`mb-4 text-lg leading-relaxed ${dark ? "text-[color:var(--cream)]/80" : "text-[color:var(--navy)]/75"}`}>
                {tr(lang, p.id, p.en, p.ar)}
              </p>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] transition-all hover:gap-4 hover:shadow-lg ${
                dark
                  ? "bg-[color:var(--gold)] text-[color:var(--navy)] hover:bg-[color:var(--cream)]"
                  : "bg-[color:var(--navy)] text-[color:var(--cream)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)]"
              }`}
            >
              {tr(lang, "Kolaborasi Program →", "Collaborate on This Program →", "تعاون في هذا البرنامج ←")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { t: "Strategic Consultant", tAr: "استشارات استراتيجية", d: "Perencanaan strategi berbasis budaya untuk institusi, korporasi, dan pemerintah.", dEn: "Culture-based strategic planning for institutions, corporations, and government.", dAr: "تخطيط استراتيجي قائم على الثقافة للمؤسسات والشركات والحكومة.", Icon: Compass },
  { t: "Creative Development", tAr: "التطوير الإبداعي", d: "Pengembangan konsep kreatif, ide, dan narasi berakar pada kearifan lokal.", dEn: "Developing creative concepts, ideas, and narratives rooted in local wisdom.", dAr: "تطوير مفاهيم وأفكار وسرديات إبداعية متجذرة في الحكمة المحلية.", Icon: Lightbulb },
  { t: "Community Engagement", tAr: "إشراك المجتمع", d: "Membangun keterlibatan komunitas daerah lewat pendekatan partisipatif.", dEn: "Building local community engagement through a participatory approach.", dAr: "بناء مشاركة المجتمعات المحلية من خلال نهج تشاركي.", Icon: Users },
  { t: "Sustainability Solutions", tAr: "حلول الاستدامة", d: "Program berkelanjutan yang menghubungkan budaya dengan lingkungan & sosial.", dEn: "Sustainable programs connecting culture with the environment & society.", dAr: "برامج مستدامة تربط الثقافة بالبيئة والمجتمع.", Icon: Leaf },
  { t: "Capacity Building & Training", tAr: "بناء القدرات والتدريب", d: "Pelatihan dan pengembangan kapasitas pelaku seni dan UMKM.", dEn: "Training and capacity development for artists and SME actors.", dAr: "تدريب وتطوير قدرات الفنانين وأصحاب المشروعات الصغيرة.", Icon: GraduationCap },
  { t: "Research & Development", tAr: "البحث والتطوير", d: "Riset budaya, dokumentasi, dan pengembangan pengetahuan Nusantara.", dEn: "Cultural research, documentation, and development of Nusantara knowledge.", dAr: "بحث ثقافي وتوثيق وتطوير المعرفة الخاصة بنوسانتارا.", Icon: Microscope },
  { t: "Art & Culture Performance", tAr: "العروض الفنية والثقافية", d: "Produksi pertunjukan seni & budaya berkualitas tinggi.", dEn: "High-quality arts & culture performance production.", dAr: "إنتاج عروض فنية وثقافية عالية الجودة.", Icon: Palette },
];

const PRODUCTS = [
  { t: "Pengembangan Seni & Budaya Nusantara", tEn: "Nusantara Arts & Culture Development", tAr: "تطوير الفنون والثقافة في نوسانتارا", image: seniImg },
  { t: "Pemberdayaan UMKM & Ekonomi Kreatif", tEn: "SME & Creative Economy Empowerment", tAr: "تمكين المشروعات الصغيرة والاقتصاد الإبداعي", image: umkmImg },
  { t: "Pengembangan Kreativitas Generasi Muda", tEn: "Youth Creativity Development", tAr: "تطوير إبداع جيل الشباب", image: mudaImg },
  { t: "Media & Promosi Digital", tEn: "Media & Digital Promotion", tAr: "الإعلام والترويج الرقمي", Icon: Megaphone },
];

function Layanan() {
  const { lang } = useLang();
  return (
    <section id="layanan" className="relative py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center reveal">
          <span className="eyebrow">{tr(lang, "Apa Yang Kami Kerjakan", "What We Do", "ماذا نقدم")}</span>
          <SectionHeading
            text={tr(lang, "Layanan Unggulan", "Our Services", "خدماتنا المميزة")}
            className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
          <p className="mx-auto max-w-2xl text-[color:var(--navy)]/70">
            {tr(lang, "Tujuh layanan inti yang menghubungkan budaya dengan kebutuhan mitra kami.", "Seven core services connecting culture with our partners' needs.", "سبع خدمات أساسية تربط الثقافة باحتياجات شركائنا.")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.t}
              className="reveal group relative flex flex-col rounded-2xl border border-[color:var(--navy)]/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)] transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-white">
                  <s.Icon size={26} strokeWidth={1.75} />
                </span>
                <span className="font-serif text-2xl italic text-[color:var(--navy)]/15 transition-colors group-hover:text-[color:var(--gold)]/50">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-serif text-xl text-[color:var(--navy)]">{tr(lang, s.t, s.t, s.tAr)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--navy)]/70">{tr(lang, s.d, s.dEn, s.dAr)}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-[color:var(--navy)] p-10 md:p-14 text-[color:var(--cream)] reveal relative overflow-hidden">
          <div className="dot-grid absolute inset-0 opacity-10" />
          <div className="relative">
            <div className="max-w-xl">
              <span className="eyebrow !text-[color:var(--gold)]">{tr(lang, "Program Unggulan", "Featured Programs", "برامجنا المميزة")}</span>
              <h3 className="display mt-4 text-3xl md:text-4xl">{tr(lang, "Empat pilar program kami.", "Our four program pillars.", "ركائزنا الأربع للبرامج.")}</h3>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.map((p, i) => {
                const label = tr(lang, p.t, p.tEn, p.tAr);
                return (
                <div
                  key={p.t}
                  className="group overflow-hidden rounded-2xl border border-[color:var(--cream)]/15 bg-[color:var(--cream)]/5 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:bg-[color:var(--cream)]/10"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {p.image ? (
                      <img
                        src={p.image.url}
                        alt={label}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-[color:var(--gold)]/10">
                        {p.Icon && <p.Icon size={40} strokeWidth={1.5} className="text-[color:var(--gold)]" />}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 font-serif text-3xl text-[color:var(--gold)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="p-6 text-lg leading-snug text-[color:var(--cream)]/90">{label}</p>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  { t: "Integrity", tAr: "النزاهة", d: "Menjunjung kejujuran dan tanggung jawab dalam setiap langkah.", dEn: "Upholding honesty and responsibility in every step.", dAr: "التمسك بالصدق والمسؤولية في كل خطوة.", Icon: ShieldCheck },
  { t: "Collaboration", tAr: "التعاون", d: "Kolaborasi lintas komunitas, generasi, dan institusi.", dEn: "Collaboration across communities, generations, and institutions.", dAr: "تعاون بين المجتمعات والأجيال والمؤسسات.", Icon: Handshake },
  { t: "Innovation", tAr: "الابتكار", d: "Menghadirkan gagasan segar berakar pada tradisi.", dEn: "Bringing fresh ideas rooted in tradition.", dAr: "تقديم أفكار جديدة متجذرة في التقاليد.", Icon: Sparkles },
  { t: "Sustainability", tAr: "الاستدامة", d: "Program yang berdampak jangka panjang.", dEn: "Programs with long-term impact.", dAr: "برامج ذات أثر طويل الأمد.", Icon: Leaf },
  { t: "Excellence", tAr: "التميز", d: "Standar terbaik pada setiap karya dan layanan.", dEn: "The highest standard in every work and service.", dAr: "أعلى المعايير في كل عمل وخدمة.", Icon: Award },
];

const WHY = [
  { t: "Tim Berpengalaman", tEn: "Experienced Team", tAr: "فريق ذو خبرة", d: "Lebih dari dua dekade berkarya di industri budaya dan kreatif.", dEn: "More than two decades working in the culture and creative industry.", dAr: "أكثر من عقدين من العمل في صناعة الثقافة والإبداع." },
  { t: "Solusi Berbasis Kebutuhan", tEn: "Needs-Based Solutions", tAr: "حلول قائمة على الاحتياجات", d: "Setiap program dirancang sesuai konteks dan tujuan mitra.", dEn: "Every program is designed to fit our partners' context and goals.", dAr: "كل برنامج مصمم بما يناسب سياق شركائنا وأهدافهم." },
  { t: "Pendekatan Kolaboratif", tEn: "Collaborative Approach", tAr: "نهج تعاوني", d: "Melibatkan komunitas dan pelaku budaya dari awal hingga akhir.", dEn: "Involving communities and cultural actors from start to finish.", dAr: "إشراك المجتمعات والفاعلين الثقافيين من البداية إلى النهاية." },
  { t: "Berorientasi Hasil", tEn: "Results-Oriented", tAr: "التركيز على النتائج", d: "Fokus pada dampak nyata, bukan sekadar seremoni.", dEn: "Focused on real impact, not just ceremony.", dAr: "التركيز على الأثر الحقيقي وليس مجرد الاحتفالية." },
  { t: "Jejaring yang Luas", tEn: "Extensive Network", tAr: "شبكة علاقات واسعة", d: "Terhubung dengan pemerintah, korporasi, dan komunitas di seluruh Nusantara.", dEn: "Connected with government, corporations, and communities across Nusantara.", dAr: "على تواصل مع الحكومة والشركات والمجتمعات في جميع أنحاء نوسانتارا." },
];

function ValuesWhy() {
  const { lang } = useLang();
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <span className="eyebrow">{tr(lang, "Fondasi Kami", "Our Foundation", "أسسنا")}</span>
          <SectionHeading
            text={tr(lang, "Nilai-Nilai Yayasan", "Foundation Values", "قيم المؤسسة")}
            className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((v, i) => (
            <div
              key={v.t}
              className="reveal group relative rounded-2xl border border-[color:var(--navy)]/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--navy)] text-[color:var(--gold)] transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--navy)]">
                  <v.Icon size={22} strokeWidth={1.75} />
                </span>
                <span className="font-serif text-xs uppercase tracking-[0.3em] text-[color:var(--navy)]/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-[color:var(--navy)]">{tr(lang, v.t, v.t, v.tAr)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--navy)]/70">{tr(lang, v.d, v.dEn, v.dAr)}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2 items-center">
          <div className="reveal">
            <span className="eyebrow">{tr(lang, "Kepercayaan Anda", "Your Trust", "ثقتكم")}</span>
            <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">
              {tr(lang, "Mengapa memilih", "Why choose", "لماذا تختار")}<br />Dayatara.
            </h2>
            <div className="batik-divider my-6 w-32" />
            <p className="text-[color:var(--navy)]/70 text-lg">
              {tr(
                lang,
                "Pengalaman lebih dari dua dekade bekerja bersama komunitas, korporasi, dan pemerintah di seluruh penjuru Nusantara.",
                "More than two decades of experience working with communities, corporations, and government across Nusantara.",
                "أكثر من عقدين من الخبرة في العمل مع المجتمعات والشركات والحكومة في جميع أنحاء نوسانتارا."
              )}
            </p>
          </div>
          <div className="reveal grid gap-4 sm:grid-cols-2">
            {WHY.map((w) => (
              <div
                key={w.t}
                className="group flex items-start gap-4 rounded-2xl border border-[color:var(--navy)]/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-xl"
              >
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)] transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-white">
                  <CheckCircle2 size={18} strokeWidth={2} />
                </span>
                <div>
                  <div className="font-serif text-lg text-[color:var(--navy)]">{tr(lang, w.t, w.tEn, w.tAr)}</div>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--navy)]/65">{tr(lang, w.d, w.dEn, w.dAr)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ORG_MEMBERS = [
  { name: "Pratomo Setyohadi", role: "Dewan Pembina", roleEn: "Board of Advisors", roleAr: "مجلس الأمناء" },
  { name: "Bambang Sugiantoro", role: "Dewan Pembina", roleEn: "Board of Advisors", roleAr: "مجلس الأمناء" },
  { name: "Untung Raharjo", role: "Dewan Pengawas", roleEn: "Board of Supervisors", roleAr: "مجلس المراقبين" },
  { name: "Nanang Junaedi", role: "Dewan Pengawas", roleEn: "Board of Supervisors", roleAr: "مجلس المراقبين" },
  { name: "Ginanjar Duta", role: "Dewan Pengawas", roleEn: "Board of Supervisors", roleAr: "مجلس المراقبين" },
  { name: "Teguh Suharmaji", role: "Ketua Umum", roleEn: "Chairman", roleAr: "الرئيس العام" },
  { name: "Sari Wardi Astuti", role: "Sekretaris", roleEn: "Secretary", roleAr: "الأمين العام" },
  { name: "Dedi Abdul Rahmat Saleh", role: "Bendahara", roleEn: "Treasurer", roleAr: "أمين الصندوق" },
];

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
}

function Struktur() {
  const { lang } = useLang();
  const autoplay = useRef(Autoplay({ delay: 2800, stopOnInteraction: false }));
  return (
    <section className="py-24 md:py-32 bg-[color:var(--navy)] text-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <span className="eyebrow">{tr(lang, "Organisasi", "Organization", "المنظمة")}</span>
          <SectionHeading
            text={tr(lang, "Struktur Organisasi", "Organizational Structure", "الهيكل التنظيمي")}
            className="display mt-4 text-4xl md:text-5xl"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="mt-16 reveal"
        >
          <CarouselContent className="py-3">
            {ORG_MEMBERS.map((p) => (
              <CarouselItem key={p.name} className="basis-4/5 sm:basis-1/2 lg:basis-1/4">
                <div className="group h-full rounded-2xl border border-[color:var(--cream)]/15 bg-[color:var(--cream)]/5 p-8 text-center transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:bg-[color:var(--cream)]/10">
                  <div className="relative mx-auto h-24 w-24">
                    <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-[color:var(--gold)] bg-[color:var(--gold)]/10 font-serif text-2xl text-[color:var(--gold)]">
                      {initials(p.name)}
                    </div>
                    <span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--navy)] ring-4 ring-[color:var(--navy)]">
                      <Users size={14} strokeWidth={2.5} />
                    </span>
                  </div>
                  <div className="mt-5 font-serif text-lg text-[color:var(--cream)]">{p.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">{tr(lang, p.role, p.roleEn, p.roleAr)}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

const CLIENTS = [
  {
    cat: "Government",
    catAr: "الحكومة",
    Icon: Landmark,
    list: ["Kementerian Lingkungan Hidup", "Kementerian Kesehatan", "Kementerian Pertanian", "Kementerian Pariwisata", "Kementerian KUKM", "Kementerian Kelautan & Perikanan"],
    listEn: ["Ministry of Environment", "Ministry of Health", "Ministry of Agriculture", "Ministry of Tourism", "Ministry of SMEs & Cooperatives", "Ministry of Marine Affairs & Fisheries"],
    listAr: ["وزارة البيئة", "وزارة الصحة", "وزارة الزراعة", "وزارة السياحة", "وزارة المشروعات الصغيرة والتعاونيات", "وزارة الشؤون البحرية ومصائد الأسماك"],
  },
  {
    cat: "Corporate",
    catAr: "الشركات",
    Icon: Building2,
    list: ["Bank Mandiri", "Pertamina", "Jaya Ancol", "Pelindo"],
    listEn: ["Bank Mandiri", "Pertamina", "Jaya Ancol", "Pelindo"],
    listAr: ["Bank Mandiri", "Pertamina", "Jaya Ancol", "Pelindo"],
  },
  {
    cat: "Community",
    catAr: "المجتمع",
    Icon: HeartHandshake,
    list: ["Kadin", "KNPI", "Pemuda Pancasila", "Pakutho", "Pakuwojo", "Komppi", "Persada BUMD"],
    listEn: ["Kadin", "KNPI", "Pemuda Pancasila", "Pakutho", "Pakuwojo", "Komppi", "Persada BUMD"],
    listAr: ["Kadin", "KNPI", "Pemuda Pancasila", "Pakutho", "Pakuwojo", "Komppi", "Persada BUMD"],
  },
];

function Portofolio() {
  const { lang } = useLang();
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <span className="eyebrow">{tr(lang, "Kepercayaan Mitra", "Trusted By", "ثقة شركائنا")}</span>
          <SectionHeading
            text={tr(lang, "Portofolio Klien", "Client Portfolio", "محفظة العملاء")}
            className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CLIENTS.map((group) => {
            const list = lang === "en" ? group.listEn : lang === "ar" ? group.listAr : group.list;
            return (
            <div
              key={group.cat}
              className="reveal rounded-2xl border border-[color:var(--navy)]/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--navy)] text-[color:var(--gold)]">
                  <group.Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="font-serif text-lg text-[color:var(--navy)]">{tr(lang, group.cat, group.cat, group.catAr)}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {list.map((c, idx) => (
                  <span
                    key={group.list[idx]}
                    className="rounded-full border border-[color:var(--navy)]/10 bg-[color:var(--cream)]/60 px-4 py-2 text-sm text-[color:var(--navy)]/85 transition-colors hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)]/10"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const NEWS = [
  {
    tag: "Pertunjukan", tagEn: "Performance", tagAr: "عرض",
    title: "Malam Wayang Kolaborasi Lintas Generasi di Yogyakarta",
    titleEn: "Cross-Generation Collaborative Wayang Night in Yogyakarta",
    titleAr: "أمسية وايانج تعاونية بين الأجيال في يوجياكارتا",
    date: "12 Nov 2025", img: gal4,
  },
  {
    tag: "UMKM", tagEn: "SMEs", tagAr: "المشروعات الصغيرة",
    title: "Pameran Batik Nusantara Menjangkau Pasar Asia Tenggara",
    titleEn: "Nusantara Batik Exhibition Reaches Southeast Asian Markets",
    titleAr: "معرض باتيك نوسانتارا يصل إلى أسواق جنوب شرق آسيا",
    date: "28 Okt 2025", img: gal2,
  },
  {
    tag: "Komunitas", tagEn: "Community", tagAr: "المجتمع",
    title: "Lokakarya Kreatif Anak Muda: Menganyam Cerita Nusantara",
    titleEn: "Youth Creative Workshop: Weaving Nusantara's Stories",
    titleAr: "ورشة إبداعية للشباب: نسج حكايات نوسانتارا",
    date: "05 Okt 2025", img: mudaImg,
  },
];

function News() {
  const { lang } = useLang();
  return (
    <section id="news" className="py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 reveal">
          <div>
            <span className="eyebrow">{tr(lang, "Kabar Terkini", "Latest News", "آخر الأخبار")}</span>
            <SectionHeading
              text={tr(lang, "Jurnal Dayatara", "Dayatara Journal", "مجلة داياتارا")}
              className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
              align="left"
            />
          </div>
          <a href="#" className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--navy)] border-b border-[color:var(--gold)] pb-1">
            {tr(lang, "Semua Artikel →", "All Articles →", "جميع المقالات ←")}
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {NEWS.map((a) => (
            <article key={a.title} className="reveal group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={a.img.url}
                  alt={tr(lang, a.title, a.titleEn, a.titleAr)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[color:var(--navy)] text-[color:var(--cream)] px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                  {tr(lang, a.tag, a.tagEn, a.tagAr)}
                </span>
              </div>
              <div className="mt-5">
                <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--navy)]/50">{a.date}</div>
                <h3 className="mt-2 font-serif text-2xl text-[color:var(--navy)] leading-snug group-hover:text-[color:var(--gold)] transition-colors">
                  {tr(lang, a.title, a.titleEn, a.titleAr)}
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
  { img: gal1, cap: "Tari Tradisional", capEn: "Traditional Dance", capAr: "رقصة تقليدية" },
  { img: seniImg, cap: "Wayang Golek", capEn: "Wayang Golek", capAr: "وايانج جوليك" },
  { img: gal3, cap: "Upacara Adat", capEn: "Traditional Ceremony", capAr: "احتفال تقليدي" },
  { img: gal4, cap: "Gamelan", capEn: "Gamelan", capAr: "جاميلان" },
  { img: gal2, cap: "Batik Nusantara", capEn: "Nusantara Batik", capAr: "باتيك نوسانتارا" },
  { img: mudaImg, cap: "Anak Muda Kreatif", capEn: "Creative Youth", capAr: "شباب مبدع" },
];

function Galeri() {
  const { lang } = useLang();
  return (
    <section id="galeri" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center reveal">
          <span className="eyebrow">{tr(lang, "Dokumentasi Kegiatan", "Activity Documentation", "توثيق الأنشطة")}</span>
          <SectionHeading
            text={tr(lang, "Galeri", "Gallery", "المعرض")}
            className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY.map((g, i) => {
            const cap = tr(lang, g.cap, g.capEn, g.capAr);
            return (
            <div
              key={i}
              className="reveal group relative aspect-square overflow-hidden rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-2xl"
            >
              <img
                src={g.img.url}
                alt={cap}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/85 via-[color:var(--navy)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-[color:var(--cream)]/15 text-[color:var(--cream)] opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--navy)]">
                <Expand size={16} strokeWidth={2} />
              </span>
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="h-px w-8 bg-[color:var(--gold)] mb-3" />
                <div className="font-serif text-lg text-[color:var(--cream)]">{cap}</div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const TESTI = [
  {
    q: "Dayatara membantu kami merancang program budaya yang benar-benar hidup di tengah masyarakat.",
    qEn: "Dayatara helped us design a cultural program that truly comes alive within the community.",
    qAr: "ساعدتنا داياتارا في تصميم برنامج ثقافي ينبض بالحياة فعلاً داخل المجتمع.",
    a: "Mitra Korporasi", aEn: "Corporate Partner", aAr: "شريك من الشركات",
    role: "[Placeholder testimoni]", roleEn: "[Testimonial placeholder]", roleAr: "[نص شهادة مؤقت]",
  },
  {
    q: "Pendekatan kolaboratif Dayatara membuat komunitas kami merasa dilibatkan dari awal hingga akhir.",
    qEn: "Dayatara's collaborative approach made our community feel involved from start to finish.",
    qAr: "جعل أسلوب داياتارا التعاوني مجتمعنا يشعر بالمشاركة من البداية حتى النهاية.",
    a: "Ketua Komunitas", aEn: "Community Leader", aAr: "قائد مجتمعي",
    role: "[Placeholder testimoni]", roleEn: "[Testimonial placeholder]", roleAr: "[نص شهادة مؤقت]",
  },
  {
    q: "Kualitas kurasi dan produksi pertunjukan mereka berkelas nasional. Sangat direkomendasikan.",
    qEn: "The quality of their performance curation and production is world-class. Highly recommended.",
    qAr: "جودة تنسيق وإنتاج عروضهم عالمية المستوى. أنصح بها بشدة.",
    a: "Instansi Pemerintah", aEn: "Government Institution", aAr: "جهة حكومية",
    role: "[Placeholder testimoni]", roleEn: "[Testimonial placeholder]", roleAr: "[نص شهادة مؤقت]",
  },
];

function Testimoni() {
  const { lang } = useLang();
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
        <span className="eyebrow !text-[color:var(--gold)]">{tr(lang, "Testimoni", "Testimonials", "الشهادات")}</span>
        <div className="mt-8 font-serif text-6xl text-[color:var(--gold)] leading-none">"</div>
        <blockquote key={i} className="fade-up mt-4 font-serif text-2xl md:text-3xl leading-relaxed italic text-[color:var(--cream)]">
          {tr(lang, c.q, c.qEn, c.qAr)}
        </blockquote>
        <div className="mt-8">
          <div className="font-serif text-lg text-[color:var(--gold)]">— {tr(lang, c.a, c.aEn, c.aAr)}</div>
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--cream)]/60 mt-1">{tr(lang, c.role, c.roleEn, c.roleAr)}</div>
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

function Kontak() {
  const { lang } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const waHref = `https://wa.me/6285817773695?text=${encodeURIComponent(
    tr(
      lang,
      `Halo Dayatara, saya ${form.name || "-"} (${form.email || "-"}).\n${form.message || "Saya ingin berkolaborasi dengan Dayatara."}`,
      `Hello Dayatara, I'm ${form.name || "-"} (${form.email || "-"}).\n${form.message || "I'd like to collaborate with Dayatara."}`,
      `مرحبًا داياتارا، أنا ${form.name || "-"} (${form.email || "-"}).\n${form.message || "أرغب في التعاون مع داياتارا."}`
    )
  )}`;
  const CONTACTS = [
    { Icon: Phone, label: "WhatsApp", labelEn: "WhatsApp", labelAr: "واتساب", value: "0858-1777-3695", href: "https://wa.me/6285817773695" },
    { Icon: Mail, label: "Email", labelEn: "Email", labelAr: "البريد الإلكتروني", value: "dayataranusantara@gmail.com", href: "mailto:dayataranusantara@gmail.com" },
    { Icon: MapPin, label: "Alamat", labelEn: "Address", labelAr: "العنوان", value: "Jalan Mangunsarkoro No. 1, Menteng, Jakarta Pusat" },
  ];
  return (
    <section id="kontak" className="py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">{tr(lang, "Kontak", "Contact", "التواصل")}</span>
            <SectionHeading
              text={tr(lang, "Mari Bicara.", "Let's Talk.", "لنتحدث.")}
              className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
              align="left"
            />
            <div className="batik-divider my-6 w-32" />
            <p className="max-w-md text-lg text-[color:var(--navy)]/70">
              {tr(lang, "Konsultasikan kebutuhan kolaborasi budaya Anda. Tim kami siap merespons dengan cepat.", "Consult your cultural collaboration needs. Our team is ready to respond quickly.", "استشرنا بشأن احتياجات تعاونكم الثقافي. فريقنا جاهز للرد بسرعة.")}
            </p>
            <div className="mt-10 space-y-5">
              {CONTACTS.map((c) => {
                const content = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color:var(--navy)] text-[color:var(--gold)] transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--navy)]">
                      <c.Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--navy)]/50">{tr(lang, c.label, c.labelEn, c.labelAr)}</div>
                      <div className="font-serif text-lg text-[color:var(--navy)]">{c.value}</div>
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    {content}
                  </a>
                ) : (
                  <div key={c.label} className="flex items-center gap-4">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal rounded-3xl border border-[color:var(--navy)]/10 bg-white p-8 shadow-xl md:p-10">
            <h3 className="font-serif text-2xl text-[color:var(--navy)]">{tr(lang, "Kirim Pesan", "Send Message", "أرسل رسالة")}</h3>
            <p className="mt-2 text-sm text-[color:var(--navy)]/60">
              {tr(lang, "Isi form berikut — kami akan menghubungi Anda melalui WhatsApp.", "Fill out the form below — we'll get in touch with you via WhatsApp.", "املأ النموذج التالي — وسنتواصل معك عبر واتساب.")}
            </p>
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(waHref, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--navy)]/60">{tr(lang, "Nama", "Name", "الاسم")}</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder={tr(lang, "Nama Anda", "Your name", "اسمك")}
                    className="mt-2 w-full rounded-xl border border-[color:var(--navy)]/15 bg-transparent px-4 py-3 text-[color:var(--navy)] outline-none transition-colors focus:border-[color:var(--gold)]"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--navy)]/60">Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder={tr(lang, "nama@perusahaan.com", "you@company.com", "you@company.com")}
                    className="mt-2 w-full rounded-xl border border-[color:var(--navy)]/15 bg-transparent px-4 py-3 text-[color:var(--navy)] outline-none transition-colors focus:border-[color:var(--gold)]"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--navy)]/60">{tr(lang, "Pesan", "Message", "الرسالة")}</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder={tr(lang, "Ceritakan kebutuhan kolaborasi Anda…", "Tell us about your collaboration needs…", "أخبرنا عن احتياجات تعاونك…")}
                  className="mt-2 w-full resize-none rounded-xl border border-[color:var(--navy)]/15 bg-transparent px-4 py-3 text-[color:var(--navy)] outline-none transition-colors focus:border-[color:var(--gold)]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--cream)] transition-colors hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)]"
              >
                {tr(lang, "Kirim Pesan", "Send Message", "أرسل رسالة")} <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const SOCIAL_LINKS = [
  { label: "WhatsApp", labelEn: "WhatsApp", labelAr: "واتساب", Icon: WhatsAppIcon, href: "https://wa.me/6285817773695" },
  { label: "Email", labelEn: "Email", labelAr: "البريد الإلكتروني", Icon: Mail, href: "mailto:dayataranusantara@gmail.com" },
  { label: "Website", labelEn: "Website", labelAr: "الموقع الإلكتروني", Icon: Globe, href: "https://dayataranusantara.com" },
  { label: "Instagram", labelEn: "Instagram", labelAr: "إنستغرام", Icon: Instagram, href: "https://instagram.com/dayatarafest" },
  { label: "Facebook", labelEn: "Facebook", labelAr: "فيسبوك", Icon: Facebook, href: "https://facebook.com/dayatarafest" },
  { label: "TikTok", labelEn: "TikTok", labelAr: "تيك توك", Icon: TikTokIcon, href: "https://tiktok.com/@dayatarafest" },
  { label: "YouTube", labelEn: "YouTube", labelAr: "يوتيوب", Icon: Youtube, href: "https://youtube.com/@dayatarafest" },
  { label: "Spotify", labelEn: "Spotify", labelAr: "سبوتيفاي", Icon: SpotifyIcon, href: "https://open.spotify.com/user/dayatarafest" },
];

function SocialMedia() {
  const { lang } = useLang();
  return (
    <section className="py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 text-center reveal">
        <span className="eyebrow">{tr(lang, "Terhubung Dengan Kami", "Stay Connected", "تواصل معنا")}</span>
        <SectionHeading
          text={tr(lang, "Media Sosial Kami.", "Our Social Media.", "وسائل تواصلنا الاجتماعي.")}
          className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
        />
        <div className="batik-divider mx-auto my-6 w-40" />
        <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-20 flex-col items-center gap-3"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full border border-[color:var(--navy)]/10 bg-white text-[color:var(--navy)] shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-[color:var(--gold)] group-hover:bg-[color:var(--navy)] group-hover:text-[color:var(--gold)] group-hover:shadow-xl">
                <s.Icon size={26} />
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-[color:var(--navy)]/70 transition-colors group-hover:text-[color:var(--gold)]">
                {tr(lang, s.label, s.labelEn, s.labelAr)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { lang } = useLang();
  return (
    <footer className="bg-[color:var(--navy)] text-[color:var(--cream)] pt-24 pb-10">
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
              {tr(
                lang,
                "Yayasan Daya Cipta Budaya Nusantara — ruang tumbuh bagi daya cipta Nusantara. Mari berkolaborasi menghidupkan budaya bersama kami.",
                "Yayasan Daya Cipta Budaya Nusantara — a growing space for Nusantara's creative energy. Let's collaborate to bring culture to life together.",
                "مؤسسة داياتارا للإبداع الثقافي — مساحة نمو للإبداع في نوسانتارا. لنتعاون معًا لإحياء الثقافة."
              )}
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
            <h4 className="font-serif text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{tr(lang, "Kontak", "Contact", "التواصل")}</h4>
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
            <h4 className="font-serif text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{tr(lang, "Kantor", "Office", "المكتب")}</h4>
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
  const { lang, setLang, showGate } = useLanguage();
  useReveal(lang);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
    <main className="min-h-screen bg-[color:var(--cream)]">
      {showGate && <LanguageGate onSelect={setLang} />}
      <Nav />
      <Hero />
      <Beranda />
      <PillarSection
        id="seni"
        eyebrow={{ id: "Pilar 01", en: "Pillar 01", ar: "الركيزة 01" }}
        title={{ id: "Seni Budaya Nusantara", en: "Nusantara Arts & Culture", ar: "فنون وثقافة نوسانتارا" }}
        image={seniImg}
        body={[
          {
            id: "Program pengembangan seni dan budaya tradisional — dari wayang, tari, musik tradisional, hingga teater — dengan pendekatan yang menghubungkan warisan dan kehidupan hari ini.",
            en: "A development program for traditional arts and culture — from wayang, dance, and traditional music to theatre — with an approach that connects heritage with life today.",
            ar: "برنامج لتطوير الفنون والثقافة التقليدية — من الوايانج والرقص والموسيقى التقليدية إلى المسرح — بأسلوب يربط التراث بالحياة اليوم.",
          },
          {
            id: "Kami memfasilitasi kurasi pertunjukan, produksi karya, serta ruang berkarya bagi seniman lintas generasi di seluruh Nusantara.",
            en: "We facilitate performance curation, creative production, and creative space for artists across generations throughout Nusantara.",
            ar: "نوفر تنسيق العروض والإنتاج الإبداعي ومساحة عمل للفنانين من مختلف الأجيال في جميع أنحاء نوسانتارا.",
          },
        ]}
      />
      <PillarSection
        id="umkm"
        eyebrow={{ id: "Pilar 02", en: "Pillar 02", ar: "الركيزة 02" }}
        title={{ id: "UMKM & Ekonomi Kreatif", en: "SMEs & Creative Economy", ar: "المشروعات الصغيرة والاقتصاد الإبداعي" }}
        image={umkmImg}
        reverse
        tone="navy"
        body={[
          {
            id: "Memberdayakan pelaku UMKM berbasis budaya melalui pendampingan, pelatihan, pengembangan produk, hingga akses pasar.",
            en: "Empowering culture-based SMEs through mentoring, training, product development, and market access.",
            ar: "تمكين أصحاب المشروعات الصغيرة القائمة على الثقافة من خلال الإرشاد والتدريب وتطوير المنتجات والوصول إلى الأسواق.",
          },
          {
            id: "Membangun ekosistem ekonomi kreatif yang berkelanjutan, adil, dan berakar pada kearifan lokal.",
            en: "Building a sustainable, fair creative economy ecosystem rooted in local wisdom.",
            ar: "بناء منظومة اقتصاد إبداعي مستدامة وعادلة ومتجذرة في الحكمة المحلية.",
          },
        ]}
      />
      <PillarSection
        id="muda"
        eyebrow={{ id: "Pilar 03", en: "Pillar 03", ar: "الركيزة 03" }}
        title={{ id: "Kreatifitas Muda", en: "Youth Creativity", ar: "إبداع الشباب" }}
        image={mudaImg}
        body={[
          {
            id: "Membuka ruang bagi generasi muda untuk berkarya, berkolaborasi, dan menemukan suara mereka melalui bahasa budaya.",
            en: "Opening space for the younger generation to create, collaborate, and find their voice through the language of culture.",
            ar: "فتح المجال أمام جيل الشباب للإبداع والتعاون وإيجاد صوتهم من خلال لغة الثقافة.",
          },
          {
            id: "Lokakarya, residensi, dan program mentoring lintas disiplin — dari seni, media, hingga wirausaha kreatif.",
            en: "Workshops, residencies, and cross-disciplinary mentoring programs — from arts and media to creative entrepreneurship.",
            ar: "ورش عمل وإقامات فنية وبرامج إرشاد متعددة التخصصات — من الفنون والإعلام إلى ريادة الأعمال الإبداعية.",
          },
        ]}
      />
      <Layanan />
      <ValuesWhy />
      <Struktur />
      <Portofolio />
      <News />
      <Galeri />
      <Testimoni />
      <SocialMedia />
      <Kontak />
      <Footer />
    </main>
    </LanguageContext.Provider>
  );
}
