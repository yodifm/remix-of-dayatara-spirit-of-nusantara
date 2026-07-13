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
}

export default i18n;
