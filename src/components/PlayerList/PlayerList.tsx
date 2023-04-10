import React from "react";
import { Player } from "../Player/Player";
import * as styles from "./PlayerList.styles";

//TODO: Update types
export const PlayerList = (props) => {
  const { name } = props;

  //TODO: Consolidate this component with Player
  return (
    <div style={styles.container}>
      {name.map((value, index) => (
        <Player key={index} name={value} index={index} />
      ))}
    </div>
  );
};
