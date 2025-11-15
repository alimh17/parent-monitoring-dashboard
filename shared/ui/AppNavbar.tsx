"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  ColorLens,
  ArrowDropDown,
} from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { useThemeSwitcher } from "shared";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

export const AppNavbar: React.FC = () => {
  const { mode, setTheme } = useThemeSwitcher();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const pathname = usePathname();

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleSelectTheme = (themeMode: "light" | "dark" | "custom") => {
    setTheme(themeMode);
    handleClose();
  };

  const getThemeIcon = () => {
    switch (mode) {
      case "dark":
        return <Brightness7 />;
      case "custom":
        return <ColorLens />;
      default:
        return <Brightness4 />;
    }
  };

  return (
    <AppBar position="fixed" color="primary" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} suppressHydrationWarning>
          {pathname === "/" ? t("dashboard") : t("notifications")}
        </Typography>

        <Tooltip title="Change Theme">
          <IconButton
            color="inherit"
            onClick={handleOpen}
            aria-controls={open ? "theme-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {getThemeIcon()}
            <ArrowDropDown />
          </IconButton>
        </Tooltip>

        <LanguageSwitcher />

        <Menu
          id="theme-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={() => handleSelectTheme("light")}>
            <ListItemIcon>
              <Brightness4 />
            </ListItemIcon>
            <ListItemText primary={t("Light")} />
          </MenuItem>
          <MenuItem onClick={() => handleSelectTheme("dark")}>
            <ListItemIcon>
              <Brightness7 />
            </ListItemIcon>
            <ListItemText primary={t("Dark")} />
          </MenuItem>
          <MenuItem onClick={() => handleSelectTheme("custom")}>
            <ListItemIcon>
              <ColorLens />
            </ListItemIcon>
            <ListItemText primary={t("Custom")} />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
