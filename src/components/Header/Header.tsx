import React from "react";
import logo from "../../assets";
import * as styles from "./Header.styles";

export const Header = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageMargin}>
        <img height='80' width='80' src={logo} />
      </div>
      <h1 style={styles.titleFont}>Disc Golf Skins</h1>
    </div>
  );
};
