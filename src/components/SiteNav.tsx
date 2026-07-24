import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Globe } from "lucide-react";
import { SUPPORTED_LANGUAGES, LANG_STORAGE_KEY } from "@/lib/i18n";
import { DayataraLogo } from "@/components/DayataraLogo";

// Section anchors are prefixed with "/" so they resolve correctly from any
// route, not just the homepage — "#beranda" alone would just tack a dead
// hash onto whatever page you're currently on (e.g. /kenduri-nusantara#beranda).
const NAV = [
  { href: "/#beranda", key: "home" },
  { href: "/#tentang-kami", key: "about" },
  {
    key: "pillars",
    dropdown: [
      { href: "/#seni", key: "artsCulture" },
      { href: "/#umkm", key: "smes" },
      { href: "/#muda", key: "youthCreativity" },
    ],
  },
  { href: "/#layanan", key: "services" },
  {
    key: "programs",
    dropdown: [
      { href: "/#program-seni", productIndex: 0 },
      { href: "/#program-umkm", productIndex: 1 },
      { href: "/#program-muda", productIndex: 2 },
      { href: "/#program-digital", productIndex: 3 },
      { href: "/kenduri-nusantara", key: "kenduriNusantara" },
    ],
  },
  { href: "/#insight", key: "insight" },
  { href: "/#galeri", key: "gallery" },
  { href: "/#kontak", key: "contact" },
] as const;

function LangSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const current = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) ?? SUPPORTED_LANGUAGES[0];
  const selectLanguage = (code: string) => {
    window.localStorage.setItem(LANG_STORAGE_KEY, code);
    i18n.changeLanguage(code);
  };
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
            {SUPPORTED_LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  selectLanguage(l.code);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-[color:var(--gold)]/10 ${
                  l.code === current.code ? "text-[color:var(--gold)]" : "text-[color:var(--cream)]/85"
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

function NavDropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--cream)]/85 transition-colors hover:text-[color:var(--gold)] xl:tracking-[0.2em]"
      >
        {label}
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 z-50 mt-3 w-64 overflow-hidden rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--navy)] shadow-xl">
            {items.map((item) =>
              !item.href.includes("#") ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-left text-sm text-[color:var(--cream)]/85 transition-colors hover:bg-[color:var(--gold)]/10 hover:text-[color:var(--gold)]"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-left text-sm text-[color:var(--cream)]/85 transition-colors hover:bg-[color:var(--gold)]/10 hover:text-[color:var(--gold)]"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export function SiteNav() {
  const { t } = useTranslation();
  const products = t("layanan.products", { returnObjects: true }) as { title: string }[];
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
        <a href="/#beranda" className="flex items-center gap-3">
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
          {NAV.map((n) =>
            "dropdown" in n ? (
              <NavDropdown
                key={n.key}
                label={t(`nav.${n.key}`)}
                items={n.dropdown.map((d) => ({
                  href: d.href,
                  label: "productIndex" in d ? products[d.productIndex]?.title ?? "" : t(`nav.${d.key}`),
                }))}
              />
            ) : (
              <a
                key={n.href}
                href={n.href}
                className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--cream)]/85 hover:text-[color:var(--gold)] transition-colors xl:tracking-[0.2em]"
              >
                {t(`nav.${n.key}`)}
              </a>
            )
          )}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitcher />
          <a
            href="/#kontak"
            className="inline-flex items-center whitespace-nowrap rounded-full border border-[color:var(--gold)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition-colors"
          >
            {t("nav.collaborate")}
          </a>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitcher />
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
            {NAV.map((n) =>
              "dropdown" in n ? (
                <div key={n.key} className="py-2">
                  <div className="py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
                    {t(`nav.${n.key}`)}
                  </div>
                  <div className="flex flex-col border-l border-[color:var(--gold)]/20 pl-4">
                    {n.dropdown.map((d) => {
                      const label = "productIndex" in d ? products[d.productIndex]?.title ?? "" : t(`nav.${d.key}`);
                      return !d.href.includes("#") ? (
                        <Link
                          key={d.href}
                          to={d.href as string}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm text-[color:var(--cream)]/80 hover:text-[color:var(--gold)]"
                        >
                          {label}
                        </Link>
                      ) : (
                        <a
                          key={d.href}
                          href={d.href}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm text-[color:var(--cream)]/80 hover:text-[color:var(--gold)]"
                        >
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--cream)]/90 hover:text-[color:var(--gold)]"
                >
                  {t(`nav.${n.key}`)}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
