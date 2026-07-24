import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n, { SUPPORTED_LANGUAGES, LANG_STORAGE_KEY } from "@/lib/i18n";
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
import { SiteNav } from "@/components/SiteNav";
import SplitText from "@/components/SplitText/SplitText";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import heroImg from "@/assets/hero.jpg";
import seniImg from "@/assets/seni.jpg";
import umkmImg from "@/assets/umkm.jpg";
import mudaImg from "@/assets/muda.jpg";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: `https://dayatara.com${heroImg}` },
      { name: "twitter:image", content: `https://dayatara.com${heroImg}` },
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

/** Shows the language picker on first visit, then remembers the choice in localStorage and syncs <html dir/lang>. */
const GATE_EXIT_MS = 700;

function useLanguageGate() {
  const { i18n } = useTranslation();
  // Default to showing the gate so it's the first thing painted (both on the
  // server and on the client's first render), instead of briefly flashing the
  // site content before the "no stored language yet" check resolves.
  const [gatePhase, setGatePhase] = useState<"open" | "closing" | "closed">("open");

  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored) {
      if (stored !== i18n.language) i18n.changeLanguage(stored);
      setGatePhase("closed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const selectLanguage = (code: string) => {
    window.localStorage.setItem(LANG_STORAGE_KEY, code);
    i18n.changeLanguage(code);
    setGatePhase("closing");
    window.setTimeout(() => setGatePhase("closed"), GATE_EXIT_MS);
  };

  return { gatePhase, selectLanguage };
}

function LanguageGate({ onSelect, closing }: { onSelect: (code: string) => void; closing: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-[color:var(--navy)] p-6 transition-all duration-700 ease-in-out ${
        closing ? "scale-110 opacity-0 blur-md pointer-events-none" : "scale-100 opacity-100 blur-none"
      }`}
    >
      <div className="dot-grid absolute inset-0 opacity-10" />
      <div className="fade-up relative text-center">
        <DayataraLogo className="mx-auto h-16 w-16" />
        <div className="mt-6 font-serif text-2xl tracking-widest text-[color:var(--cream)]">DAYATARA</div>
        <p className="eyebrow mt-4 !text-[color:var(--gold)]">Pilih Bahasa / Choose Language / اختر اللغة / 选择语言</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {SUPPORTED_LANGUAGES.map((l) => (
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

function Hero({ revealed = true }: { revealed?: boolean }) {
  const { t } = useTranslation();
  return (
    <section id="beranda" className="relative min-h-screen overflow-hidden bg-[color:var(--navy)] text-[color:var(--cream)]">
      <img
        src={heroImg}
        alt={t("hero.imageAlt")}
        width={1600}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)] via-[color:var(--navy)]/85 to-transparent" />
      <div className="dot-grid absolute inset-0 opacity-10 mix-blend-screen" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <div
          className={`max-w-3xl transition-all duration-700 ease-out ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[color:var(--gold)]" />
            <span className="eyebrow !text-[color:var(--gold)]">
              {t("hero.eyebrow")}
            </span>
          </div>
          <h1 className="display text-[clamp(2.4rem,6vw,5rem)] text-[color:var(--cream)]">
            Spirit of <span className="italic text-[color:var(--gold)] normal-case">Culture,</span>
            <br />
            Creativity <span className="text-[color:var(--gold)]">&</span> Community
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--cream)]/85 md:text-xl">
            {t("hero.quote")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--navy)] hover:bg-[color:var(--cream)] transition-colors"
            >
              {t("hero.ctaPrimary")}
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
  const { t } = useTranslation();
  const stats = [
    { n: 50, s: "+", label: "Project" },
    { n: 200, s: "+", label: "Partners" },
    { n: 50, s: "+", label: "Communities Empowered" },
    { n: 20, s: "+", label: "Years Experience" },
  ];
  const pillars = t("beranda.pillars", { returnObjects: true }) as { title: string; desc: string }[];
  return (
    <section id="tentang-kami" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 reveal">
            <span className="eyebrow">{t("beranda.eyebrow")}</span>
            <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">
              {t("beranda.headingLead")}{" "}
              <em className="text-[color:var(--gold)] not-italic normal-case font-serif italic">
                {t("beranda.headingEm")}
              </em>
              <br />
              {t("beranda.headingTail")}
            </h2>
            <div className="batik-divider my-8 w-32" />
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="text-lg leading-relaxed text-[color:var(--navy)]/80">
              {t("beranda.p1")}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--navy)]/80">
              {t("beranda.p2Lead")}{" "}
              <strong className="text-[color:var(--navy)]">Culture, Creativity, Community</strong>
              {t("beranda.p2Tail")}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--navy)]/80 italic">
              {t("beranda.p3")}
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
          <span className="eyebrow">{t("beranda.focusEyebrow")}</span>
          <SectionHeading
            text={t("beranda.focusHeading")}
            className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="reveal group relative rounded-2xl border border-[color:var(--navy)]/10 bg-white/60 p-8 backdrop-blur transition-all hover:border-[color:var(--gold)] hover:-translate-y-1"
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
  translationKey,
  image,
  reverse = false,
  tone = "cream",
}: {
  id: string;
  translationKey: "seni" | "umkm" | "muda";
  image: string;
  reverse?: boolean;
  tone?: "cream" | "navy";
}) {
  const { t } = useTranslation();
  const dark = tone === "navy";
  const eyebrow = t(`pillars.${translationKey}.eyebrow`);
  const title = t(`pillars.${translationKey}.title`);
  const body = t(`pillars.${translationKey}.body`, { returnObjects: true }) as string[];
  const whatsappHref = `https://wa.me/6285817773695?text=${encodeURIComponent(
    t("pillarSection.whatsappMessage", { title })
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
              src={image}
              alt={title}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="dot-grid absolute -right-4 -bottom-4 h-24 w-24 opacity-60" />
          </div>
          <div className="reveal">
            <span className="eyebrow">{eyebrow}</span>
            <SectionHeading
              text={title}
              className={`display mt-4 text-4xl md:text-5xl ${dark ? "text-[color:var(--cream)]" : "text-[color:var(--navy)]"}`}
              align="left"
            />
            <div className="batik-divider my-8 w-32" />
            {body.map((p, i) => (
              <p key={i} className={`mb-4 text-lg leading-relaxed ${dark ? "text-[color:var(--cream)]/80" : "text-[color:var(--navy)]/75"}`}>
                {p}
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
              {t("pillarSection.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICE_ICONS = [Compass, Lightbulb, Users, Leaf, GraduationCap, Microscope, Palette];
const PRODUCT_MEDIA: ({ slug: string; image: string } | { slug: string; Icon: typeof Megaphone })[] = [
  { slug: "program-seni", image: seniImg },
  { slug: "program-umkm", image: umkmImg },
  { slug: "program-muda", image: mudaImg },
  { slug: "program-digital", Icon: Megaphone },
];

function Layanan() {
  const { t } = useTranslation();
  const services = t("layanan.services", { returnObjects: true }) as { title: string; desc: string }[];
  const products = t("layanan.products", { returnObjects: true }) as { title: string }[];
  return (
    <section id="layanan" className="relative py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center reveal">
          <span className="eyebrow">{t("layanan.eyebrow")}</span>
          <SectionHeading
            text={t("layanan.heading")}
            className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
          <p className="mx-auto max-w-2xl text-[color:var(--navy)]/70">
            {t("layanan.desc")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <div
                key={i}
                className="reveal group relative flex flex-col rounded-2xl border border-[color:var(--navy)]/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)] transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.75} />
                  </span>
                  <span className="font-serif text-2xl italic text-[color:var(--navy)]/15 transition-colors group-hover:text-[color:var(--gold)]/50">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[color:var(--navy)]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--navy)]/70">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl bg-[color:var(--navy)] p-10 md:p-14 text-[color:var(--cream)] reveal relative overflow-hidden">
          <div className="dot-grid absolute inset-0 opacity-10" />
          <div className="relative">
            <div className="max-w-xl">
              <span className="eyebrow !text-[color:var(--gold)]">{t("layanan.productsEyebrow")}</span>
              <h3 className="display mt-4 text-3xl md:text-4xl">{t("layanan.productsHeading")}</h3>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p, i) => {
                const media = PRODUCT_MEDIA[i];
                return (
                <div
                  key={i}
                  id={media.slug}
                  className="group scroll-mt-24 overflow-hidden rounded-2xl border border-[color:var(--cream)]/15 bg-[color:var(--cream)]/5 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:bg-[color:var(--cream)]/10"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {"image" in media ? (
                      <img
                        src={media.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-[color:var(--gold)]/10">
                        <media.Icon size={40} strokeWidth={1.5} className="text-[color:var(--gold)]" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 font-serif text-3xl text-[color:var(--gold)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="p-6 text-lg leading-snug text-[color:var(--cream)]/90">{p.title}</p>
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

const VALUE_ICONS = [ShieldCheck, Handshake, Sparkles, Leaf, Award];

function ValuesWhy() {
  const { t } = useTranslation();
  const values = t("values.items", { returnObjects: true }) as { title: string; desc: string }[];
  const whyItems = t("why.items", { returnObjects: true }) as { title: string; desc: string }[];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <span className="eyebrow">{t("values.eyebrow")}</span>
          <SectionHeading
            text={t("values.heading")}
            className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <div
                key={i}
                className="reveal group relative rounded-2xl border border-[color:var(--navy)]/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--navy)] text-[color:var(--gold)] transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--navy)]">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <span className="font-serif text-xs uppercase tracking-[0.3em] text-[color:var(--navy)]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-2xl text-[color:var(--navy)]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--navy)]/70">{v.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2 items-center">
          <div className="reveal">
            <span className="eyebrow">{t("why.eyebrow")}</span>
            <h2 className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]">
              {t("why.headingLead")}<br />Dayatara.
            </h2>
            <div className="batik-divider my-6 w-32" />
            <p className="text-[color:var(--navy)]/70 text-lg">
              {t("why.desc")}
            </p>
          </div>
          <div className="reveal grid gap-4 sm:grid-cols-2">
            {whyItems.map((w, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 rounded-2xl border border-[color:var(--navy)]/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-xl"
              >
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)] transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-white">
                  <CheckCircle2 size={18} strokeWidth={2} />
                </span>
                <div>
                  <div className="font-serif text-lg text-[color:var(--navy)]">{w.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--navy)]/65">{w.desc}</p>
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
  { name: "Pratomo Setyohadi", roleKey: "boardOfAdvisors" },
  { name: "Bambang Sugiantoro", roleKey: "boardOfAdvisors" },
  { name: "Untung Raharjo", roleKey: "boardOfSupervisors" },
  { name: "Nanang Junaedi", roleKey: "boardOfSupervisors" },
  { name: "Ginanjar Duta", roleKey: "boardOfSupervisors" },
  { name: "Teguh Suharmaji", roleKey: "chairman" },
  { name: "Sari Wardi Astuti", roleKey: "secretary" },
  { name: "Dedi Abdul Rahmat Saleh", roleKey: "treasurer" },
];

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
}

function Struktur() {
  const { t } = useTranslation();
  const autoplay = useRef(Autoplay({ delay: 2800, stopOnInteraction: false }));
  return (
    <section className="py-24 md:py-32 bg-[color:var(--navy)] text-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <span className="eyebrow">{t("struktur.eyebrow")}</span>
          <SectionHeading
            text={t("struktur.heading")}
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
            {ORG_MEMBERS.map((p) => {
              const role = t(`struktur.roles.${p.roleKey}.label`);
              const desc = t(`struktur.roles.${p.roleKey}.desc`);
              return (
                <CarouselItem key={p.name} className="basis-4/5 sm:basis-1/2 lg:basis-1/4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="group h-full w-full cursor-pointer rounded-2xl border border-[color:var(--cream)]/15 bg-[color:var(--cream)]/5 p-8 text-center transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:bg-[color:var(--cream)]/10"
                      >
                        <div className="relative mx-auto h-24 w-24">
                          <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-[color:var(--gold)] bg-[color:var(--gold)]/10 font-serif text-2xl text-[color:var(--gold)]">
                            {initials(p.name)}
                          </div>
                          <span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--navy)] ring-4 ring-[color:var(--navy)]">
                            <Users size={14} strokeWidth={2.5} />
                          </span>
                        </div>
                        <div className="mt-5 font-serif text-lg text-[color:var(--cream)]">{p.name}</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">{role}</div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="border-[color:var(--gold)]/30 bg-[color:var(--navy)] text-[color:var(--cream)] sm:max-w-md">
                      <DialogTitle className="sr-only">{p.name}</DialogTitle>
                      <div className="flex flex-col items-center pt-4 text-center">
                        <div className="grid h-28 w-28 place-items-center rounded-full border-2 border-[color:var(--gold)] bg-[color:var(--gold)]/10 font-serif text-3xl text-[color:var(--gold)]">
                          {initials(p.name)}
                        </div>
                        <div className="mt-5 font-serif text-2xl text-[color:var(--cream)]">{p.name}</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">
                          {role}
                        </div>
                        <p className="mt-5 text-sm leading-relaxed text-[color:var(--cream)]/75">
                          {desc}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

const CLIENT_CATEGORIES = [
  { key: "government", Icon: Landmark },
  { key: "corporate", Icon: Building2 },
  { key: "community", Icon: HeartHandshake },
];

function Portofolio() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <span className="eyebrow">{t("portfolio.eyebrow")}</span>
          <SectionHeading
            text={t("portfolio.heading")}
            className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CLIENT_CATEGORIES.map((cat) => {
            const category = t(`portfolio.categories.${cat.key}`, { returnObjects: true }) as {
              label: string;
              items: string[];
            };
            return (
            <div
              key={cat.key}
              className="reveal rounded-2xl border border-[color:var(--navy)]/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--navy)] text-[color:var(--gold)]">
                  <cat.Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="font-serif text-lg text-[color:var(--navy)]">{category.label}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((c, idx) => (
                  <span
                    key={idx}
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

const INSIGHT_MEDIA = [
  { img: gal4, date: "12 Nov 2025" },
  { img: gal2, date: "28 Okt 2025" },
  { img: mudaImg, date: "05 Okt 2025" },
];

function Insight() {
  const { t } = useTranslation();
  const articles = t("insight.articles", { returnObjects: true }) as { tag: string; title: string; body: string }[];
  return (
    <section id="insight" className="py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 reveal">
          <div>
            <span className="eyebrow">{t("insight.eyebrow")}</span>
            <SectionHeading
              text={t("insight.heading")}
              className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
              align="left"
            />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((a, i) => {
            const media = INSIGHT_MEDIA[i];
            return (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <article className="reveal group cursor-pointer text-left">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={media.img}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-[color:var(--navy)] text-[color:var(--cream)] px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                      {a.tag}
                    </span>
                  </div>
                  <div className="mt-7">
                    <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--navy)]/50">{media.date}</div>
                    <h3 className="mt-3 font-serif text-2xl text-[color:var(--navy)] leading-snug group-hover:text-[color:var(--gold)] transition-colors">
                      {a.title}
                    </h3>
                  </div>
                </article>
              </DialogTrigger>
              <DialogContent className="max-h-[85vh] overflow-y-auto border-[color:var(--navy)]/10 bg-white sm:max-w-xl">
                <DialogTitle className="sr-only">{a.title}</DialogTitle>
                <div className="-mx-6 -mt-6 aspect-[16/9] overflow-hidden">
                  <img
                    src={media.img}
                    alt={a.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="w-fit rounded-full bg-[color:var(--navy)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[color:var(--cream)]">
                  {a.tag}
                </span>
                <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--navy)]/50">{media.date}</div>
                <h2 className="font-serif text-2xl leading-snug text-[color:var(--navy)] md:text-3xl">
                  {a.title}
                </h2>
                {a.body.split("\n\n").map((paragraph, pi) => (
                  <p key={pi} className="text-base leading-relaxed text-[color:var(--navy)]/80">
                    {paragraph}
                  </p>
                ))}
              </DialogContent>
            </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const GALLERY_IMAGES = [gal1, seniImg, gal3, gal4, gal2, mudaImg];

function Galeri() {
  const { t } = useTranslation();
  const captions = t("gallery.captions", { returnObjects: true }) as string[];
  return (
    <section id="galeri" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center reveal">
          <span className="eyebrow">{t("gallery.eyebrow")}</span>
          <SectionHeading
            text={t("gallery.heading")}
            className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
          />
          <div className="batik-divider mx-auto my-6 w-40" />
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {captions.map((cap, i) => (
            <div
              key={i}
              className="reveal group relative aspect-square overflow-hidden rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-2xl"
            >
              <img
                src={GALLERY_IMAGES[i]}
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
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimoni() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as { quote: string; author: string; role: string }[];
  const [i, setI] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(timer);
  }, [items.length]);
  const c = items[i];
  return (
    <section className="py-24 md:py-32 bg-[color:var(--navy)] text-[color:var(--cream)] relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="eyebrow !text-[color:var(--gold)]">{t("testimonials.eyebrow")}</span>
        <div className="mt-8 font-serif text-6xl text-[color:var(--gold)] leading-none">"</div>
        <blockquote key={i} className="fade-up mt-4 font-serif text-2xl md:text-3xl leading-relaxed italic text-[color:var(--cream)]">
          {c.quote}
        </blockquote>
        <div className="mt-8">
          <div className="font-serif text-lg text-[color:var(--gold)]">— {c.author}</div>
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--cream)]/60 mt-1">{c.role}</div>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {items.map((_, idx) => (
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
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const waHref = `https://wa.me/6285817773695?text=${encodeURIComponent(
    t("kontak.whatsappTemplate", {
      name: form.name || "-",
      email: form.email || "-",
      message: form.message || t("kontak.whatsappDefaultMessage"),
    })
  )}`;
  const CONTACTS = [
    { key: "whatsapp", Icon: Phone, value: "0858-1777-3695", href: "https://wa.me/6285817773695" },
    { key: "email", Icon: Mail, value: "dayataranusantara@gmail.com", href: "mailto:dayataranusantara@gmail.com" },
    { key: "address", Icon: MapPin, value: "Jalan Mangunsarkoro No. 1, Menteng, Jakarta Pusat" },
  ];
  return (
    <section id="kontak" className="py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">{t("kontak.eyebrow")}</span>
            <SectionHeading
              text={t("kontak.heading")}
              className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
              align="left"
            />
            <div className="batik-divider my-6 w-32" />
            <p className="max-w-md text-lg text-[color:var(--navy)]/70">
              {t("kontak.desc")}
            </p>
            <div className="mt-10 space-y-5">
              {CONTACTS.map((c) => {
                const content = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color:var(--navy)] text-[color:var(--gold)] transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--navy)]">
                      <c.Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--navy)]/50">{t(`kontak.labels.${c.key}`)}</div>
                      <div className="font-serif text-lg text-[color:var(--navy)]">{c.value}</div>
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.key} href={c.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    {content}
                  </a>
                ) : (
                  <div key={c.key} className="flex items-center gap-4">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal rounded-3xl border border-[color:var(--navy)]/10 bg-white p-8 shadow-xl md:p-10">
            <h3 className="font-serif text-2xl text-[color:var(--navy)]">{t("kontak.formHeading")}</h3>
            <p className="mt-2 text-sm text-[color:var(--navy)]/60">
              {t("kontak.formDesc")}
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
                  <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--navy)]/60">{t("kontak.nameLabel")}</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder={t("kontak.namePlaceholder")}
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
                    placeholder={t("kontak.emailPlaceholder")}
                    className="mt-2 w-full rounded-xl border border-[color:var(--navy)]/15 bg-transparent px-4 py-3 text-[color:var(--navy)] outline-none transition-colors focus:border-[color:var(--gold)]"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--navy)]/60">{t("kontak.messageLabel")}</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder={t("kontak.messagePlaceholder")}
                  className="mt-2 w-full resize-none rounded-xl border border-[color:var(--navy)]/15 bg-transparent px-4 py-3 text-[color:var(--navy)] outline-none transition-colors focus:border-[color:var(--gold)]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--cream)] transition-colors hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)]"
              >
                {t("kontak.submit")} <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const SOCIAL_LINKS = [
  { key: "whatsapp", Icon: WhatsAppIcon, href: "https://wa.me/6285817773695" },
  { key: "email", Icon: Mail, href: "mailto:dayataranusantara@gmail.com" },
  { key: "website", Icon: Globe, href: "https://dayatara.com" },
  { key: "instagram", Icon: Instagram, href: "https://instagram.com/dayatarafest" },
  { key: "facebook", Icon: Facebook, href: "https://facebook.com/dayatarafest" },
  { key: "tiktok", Icon: TikTokIcon, href: "https://tiktok.com/@dayatarafest" },
  { key: "youtube", Icon: Youtube, href: "https://youtube.com/@dayatarafest" },
  { key: "spotify", Icon: SpotifyIcon, href: "https://open.spotify.com/user/dayatarafest" },
];

function SocialMedia() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 text-center reveal">
        <span className="eyebrow">{t("socialMedia.eyebrow")}</span>
        <SectionHeading
          text={t("socialMedia.heading")}
          className="display mt-4 text-4xl md:text-5xl text-[color:var(--navy)]"
        />
        <div className="batik-divider mx-auto my-6 w-40" />
        <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-20 flex-col items-center gap-3"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full border border-[color:var(--navy)]/10 bg-white text-[color:var(--navy)] shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-[color:var(--gold)] group-hover:bg-[color:var(--navy)] group-hover:text-[color:var(--gold)] group-hover:shadow-xl">
                <s.Icon size={26} />
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-[color:var(--navy)]/70 transition-colors group-hover:text-[color:var(--gold)]">
                {t(`socialMedia.labels.${s.key}`)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useTranslation();
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
              {t("footer.desc")}
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
            <h4 className="font-serif text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{t("footer.contactHeading")}</h4>
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
                <a href="https://dayatara.com" className="hover:text-[color:var(--gold)]">dayatara.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{t("footer.officeHeading")}</h4>
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
  const { i18n } = useTranslation();
  const { gatePhase, selectLanguage } = useLanguageGate();
  useReveal(i18n.language);
  return (
    <main className="min-h-screen bg-[color:var(--cream)]">
      {gatePhase !== "closed" && (
        <LanguageGate onSelect={selectLanguage} closing={gatePhase === "closing"} />
      )}
      <SiteNav />
      <Hero revealed={gatePhase !== "open"} />
      <Beranda />
      <PillarSection id="seni" translationKey="seni" image={seniImg} />
      <PillarSection id="umkm" translationKey="umkm" image={umkmImg} reverse tone="navy" />
      <PillarSection id="muda" translationKey="muda" image={mudaImg} />
      <Layanan />
      <ValuesWhy />
      <Struktur />
      <Portofolio />
      <Insight />
      <Galeri />
      <Testimoni />
      <SocialMedia />
      <Kontak />
      <Footer />
    </main>
  );
}
