import { useEffect, useState } from "react";

import i18n from "./i18n";
import { AppCoordinator, EVENTS } from "../coordinator/AppCoordinator";

export const useLanguageSync = () => {
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const unsubscribe = AppCoordinator.getInstance().subscribe(
      EVENTS.LANGUAGE_CHANGED,
      (newLang: string) => {
        console.log(`🔄 Language sync received: ${newLang}`);
        if (newLang && newLang !== i18n.language) {
          i18n.changeLanguage(newLang);
          setCurrentLang(newLang);
        }
      }
    );

    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      unsubscribe();
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    console.log(`🔄 Changing language to: ${lng}`);
    AppCoordinator.getInstance().publish(EVENTS.LANGUAGE_CHANGED, lng);
  };

  return {
    currentLang,
    changeLanguage,
  };
};
