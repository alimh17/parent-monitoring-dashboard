"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "./i18n";

export type Locale = "en" | "fa";
export const I18N_EVENT = "__i18n_language_changed__";

interface I18nContextValue {
  locale: Locale;
  setLanguage: (lang: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>(
    (typeof window !== "undefined"
      ? (localStorage.getItem("lang") as Locale)
      : "en") || "en"
  );

  useEffect(() => {
    i18n.changeLanguage(locale);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", locale);
      window.dispatchEvent(new CustomEvent(I18N_EVENT, { detail: { locale } }));
    }
  }, [locale]);

  useEffect(() => {
    const handleLangChange = (lng: string) => {
      setLocale(lng as Locale);
    };
    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, []);

  const setLanguage = (lang: Locale) => {
    i18n.changeLanguage(lang);
    setLocale(lang);
  };

  return (
    <I18nContext.Provider value={{ locale, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18nContext = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18nContext must be used within I18nProvider");
  return ctx;
};
