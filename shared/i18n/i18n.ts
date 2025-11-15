import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { AppCoordinator, EVENTS } from "../coordinator/AppCoordinator";
import en from "../../locales/en.json";
import fa from "../../locales/fa.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    lng:
      typeof window !== "undefined"
        ? (localStorage.getItem("lang") as "en" | "fa") || "en"
        : "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

  i18n.on("languageChanged", (lng) => {
    console.log(`🌐 Language changed to: ${lng}`);
    AppCoordinator.getInstance().publish(EVENTS.LANGUAGE_CHANGED, lng);

    localStorage.setItem("i18nextLng", lng);

    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
  });
}

export default i18n;
