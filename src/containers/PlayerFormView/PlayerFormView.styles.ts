import { CSSProperties } from "react";
//flex properties throw type errors without using CSSProperties types
export const container: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginTop: "40px",
};

export const inputSection = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
};

export const nameInput = {
  minHeight: "40px",
  borderRadius: "3px",
  paddingLeft: "5px",
};

export const plusButton = {
  background: "white",
  minWidth: "30px",
  maxHeight: "30px",
  borderRadius: "6px",
  fontWeight: "bold",
};

export const addPlayersText = {
  fontSize: "24px",
  color: "white",
  marginBottom: "24px",
};

export const buttonSection = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

export const startButton = {
  background: "white",
  fontWeight: "bold",
  fontSize: "18px",
  padding: "4px",
  borderRadius: "6px",
  marginTop: "32px",
};
