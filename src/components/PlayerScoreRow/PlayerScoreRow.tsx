import React, { Dispatch, SetStateAction, useState } from "react";
import * as styles from "./PlayerScoreRow.styles";

type PlayerScoreRowProps = {
  name: string;
  skinCount: number;
  setSkinCount: Dispatch<SetStateAction<number>>;
  holeCount: number;
  setHoleCount: Dispatch<SetStateAction<number>>;
  index: number;
};

export const PlayerScoreRow = (props: PlayerScoreRowProps) => {
  const { name, skinCount, setSkinCount, holeCount, setHoleCount } = props;

  const [playerSkinCount, setPlayerSkinCount] = useState<number>(0);

  const addSkin = () => {
    setPlayerSkinCount(playerSkinCount + skinCount);
    //reset skin count to 1
    setSkinCount(skinCount - skinCount + 1);
    //advance holes 1
    setHoleCount(holeCount + 1);
  };

  return (
    <div style={styles.containerWrapper}>
      <div>{name}: </div>
      <div> {playerSkinCount} </div>
      <div style={styles.addSkinButton}>
        <button onClick={() => addSkin()}>+</button>
      </div>
    </div>
  );
};
