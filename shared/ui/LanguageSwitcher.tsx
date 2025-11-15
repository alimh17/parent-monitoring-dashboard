import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, IconButton, Tooltip } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useLanguageSync } from "../i18n/useLanguageSync";
import { useI18nSwitcher } from "../i18n/useI18nSwitcher";

const LanguageSwitcher = () => {
  const { locale, setLanguage } = useI18nSwitcher();
  const { changeLanguage } = useLanguageSync();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSelect = (lang: "en" | "fa") => {
    setLanguage(lang);
    changeLanguage(lang);
    handleClose();
  };

  return (
    <div>
      <Tooltip title="Change Language">
        <IconButton
          aria-controls="language-menu"
          aria-haspopup="true"
          onClick={handleOpen}
          color="inherit"
        ></IconButton>
      </Tooltip>

      <IconButton color="inherit" onClick={handleOpen}>
        <LanguageIcon />
      </IconButton>
      <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={() => handleSelect("en")} selected={locale === "en"}>
          English
        </MenuItem>
        <MenuItem onClick={() => handleSelect("fa")} selected={locale === "fa"}>
          فارسی
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
