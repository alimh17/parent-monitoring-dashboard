import { Button } from "@mui/material";
import React from "react";

export const AppButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => (
  <Button variant="contained" onClick={onClick}>
    {label}
  </Button>
);
