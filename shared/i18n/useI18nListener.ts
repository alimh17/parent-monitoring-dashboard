import { useEffect, useState } from "react";
import i18n from "./i18n";
import { I18N_EVENT } from "./i18nProvider";

export const useI18nListener = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(i18n.language);

    const onLangChange = (lng: string) => setLang(lng);
    const onGlobalChange = (e: any) =>
      setLang(e.detail?.locale || i18n.language);

    i18n.on("languageChanged", onLangChange);
    window.addEventListener(I18N_EVENT, onGlobalChange);

    return () => {
      i18n.off("languageChanged", onLangChange);
      window.removeEventListener(I18N_EVENT, onGlobalChange);
    };
  }, []);

  return lang;
};
