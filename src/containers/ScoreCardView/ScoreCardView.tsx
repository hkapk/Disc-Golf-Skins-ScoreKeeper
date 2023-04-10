import React, { useState } from "react";
import { PlayerScoreRow } from "../../components/PlayerScoreRow/PlayerScoreRow";
//TODO: Update ScoreModal with working table
// import { ScoreModal } from "../../components/ScoreModal";
import * as styles from "./ScoreCardView.styles";

//TODO: Update types
export const ScoreCardView = (props) => {
  const { name, handleHasRoundStarted } = props;
  const [holeCount, setHoleCount] = useState(1);
  const [skinCount, setSkinCount] = useState(1);
  //TODO: Update ScoreModal with working table
  // const [shouldDisplayModal, setShouldDisplayModal] = useState(false);

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
          {name.map((value, index) => (
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
        {/* {TODO: Update ScoreModal with working table and uncomment out folowing code - also might be too easy to accidentally hit New Game and erase existing game data} */}

        {/* {shouldDisplayModal && (
          <ScoreModal setModalOn={setShouldDisplayModal} />
        )} */}

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
