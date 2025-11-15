import { useI18nContext } from "./i18nProvider";

export const useI18nSwitcher = () => {
  const { locale, setLanguage } = useI18nContext();
  return { locale, setLanguage };
};
