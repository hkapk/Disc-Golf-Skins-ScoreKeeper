import React, { useState } from "react";
import * as styles from "./PlayerScoreRow.styles";
//TODO: Update types
export const PlayerScoreRow = (props) => {
  const { name, skinCount, setSkinCount, holeCount, setHoleCount } = props;

  const [playerSkinCount, setPlayerSkinCount] = useState(0);

  const addSkin = () => {
    setPlayerSkinCount(playerSkinCount + skinCount);
    //reset skin count to 1
    setSkinCount(skinCount - skinCount + 1);
    //advance holes 1
    setHoleCount(holeCount + 1);
  };

  return (
    <div style={styles.containerWrapper}>
      <div>{name.playerName}: </div>
      <div> {playerSkinCount} </div>
      <div style={styles.addSkinButton}>
        <button onClick={() => addSkin()}>+</button>
      </div>
    </div>
  );
};
