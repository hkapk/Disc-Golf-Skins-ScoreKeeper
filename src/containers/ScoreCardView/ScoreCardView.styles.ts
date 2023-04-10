import { theme } from "../../style";
import { CSSProperties } from "react";

export const pushHoleButton = {
  background: "white",
  color: theme.colors.primary,
  marginTop: "33px",
  marginBottom: "24px",
  minHeight: "75px",
  minWidth: "125px",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "16px",
};

export const genericButtonStyles = {
  background: "white",
  color: theme.colors.primary,
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "bold",
  minHeight: "35px",
  minWidth: "100px",
};
//flex properties throw type errors without using CSSProperties types
export const containerWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

export const holeCountFont = {
  fontSize: "32px",
};

export const skinsCountWrapper = {
  display: "flex",
  justifyContent: "center",
  fontSize: "20px",
  gap: "8px",
  marginBottom: "30px",
};

export const skinCountColor = {
  color: "#F8719D",
};

export const buttonSectionWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
};
