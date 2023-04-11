import React from "react";
import * as styles from "./Player.styles";
//TODO: Update types
export const Player = (props) => {
  const { name } = props;

  return (
    <li style={styles.nameWrapper}>
      <div>{name.playerName}</div>
    </li>
  );
};
