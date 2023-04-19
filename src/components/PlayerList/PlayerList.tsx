import React from "react";
import * as styles from "./PlayerList.styles";

type PlayerListProps = {
  players: string[];
};

export const PlayerList = (props: PlayerListProps) => {
  const { players } = props;

  return (
    <div style={styles.container}>
      {players.map((value, index) => (
        <li key={index} style={styles.nameWrapper}>
          <div>{value}</div>
        </li>
      ))}
    </div>
  );
};
