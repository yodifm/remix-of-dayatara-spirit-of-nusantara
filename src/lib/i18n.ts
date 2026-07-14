import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import id from "@/locales/id.json";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

export const SUPPORTED_LANGUAGES = [
  { code: "id", native: "Indonesia" },
  { code: "en", native: "English" },
  { code: "ar", native: "العربية" },
] as const;

export const LANG_STORAGE_KEY = "dayatara-lang";
export const DEFAULT_LANGUAGE = "id";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      id: { translation: id },
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: { escapeValue: false },
  });
} else {
  // Vite HMR keeps the i18next singleton alive across module reloads, so the
  // guard above only runs once per dev session. Without this, editing the
  // locale JSON files wouldn't take effect until a full page reload — refresh
  // the bundles in place instead so new/changed keys show up immediately.
  i18n.addResourceBundle("id", "translation", id, true, true);
  i18n.addResourceBundle("en", "translation", en, true, true);
  i18n.addResourceBundle("ar", "translation", ar, true, true);
}

export default i18n;
