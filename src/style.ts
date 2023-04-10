import { CSSProperties } from "react";

export const theme = {
  colors: {
    primary: "#00000F",
  },
};

export const fullPageContainer: CSSProperties = {
  background: theme.colors.primary,
  width: "100%",
  height: "100vh",
  overflowY: "scroll",
  paddingBottom: "20px",
};

export const viewContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
