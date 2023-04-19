import React, { useState } from "react";
import { PlayerScoreRow } from "../../components/PlayerScoreRow/PlayerScoreRow";
import * as styles from "./ScoreCardView.styles";
//TODO: Move New Game and End Game buttons to SettingsDrawer
type ScoreCardViewProps = {
  players: string[];
  handleHasRoundStarted?: (status: boolean) => void;
};

export const ScoreCardView = (props: ScoreCardViewProps) => {
  const { players, handleHasRoundStarted } = props;

  const [holeCount, setHoleCount] = useState<number>(1);
  const [skinCount, setSkinCount] = useState<number>(1);

  const pushHole = () => {
    setSkinCount(skinCount + 1);
    setHoleCount(holeCount + 1);
  };

  return (
    <div style={styles.containerWrapper}>
      <h3 style={styles.holeCountFont}>Hole #{holeCount}</h3>
      <div style={styles.skinsCountWrapper}>
        <div>Skins Available:</div>
        <div style={styles.skinCountColor}>{skinCount}</div>
      </div>
      <ul>
        <li>
          {players.map((value, index) => (
            <PlayerScoreRow
              skinCount={skinCount}
              setSkinCount={setSkinCount}
              holeCount={holeCount}
              setHoleCount={setHoleCount}
              key={index}
              name={value}
              index={index}
            />
          ))}
        </li>
      </ul>
      <div style={styles.buttonSectionWrapper}>
        <button style={styles.pushHoleButton} onClick={() => pushHole()}>
          Push Hole
        </button>
        {/* <button
          style={styles.genericButtonStyles}
          onClick={() => setShouldDisplayModal(true)}
        >
          End Game
        </button> */}
        {/* <button
          style={styles.genericButtonStyles}
          onClick={() => handleHasRoundStarted(false)}
        >
          New Game
        </button> */}
      </div>
    </div>
  );
};
