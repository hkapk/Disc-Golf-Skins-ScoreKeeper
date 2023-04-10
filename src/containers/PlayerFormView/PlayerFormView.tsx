import React, { useRef } from "react";
import { PlayerList } from "../../components/PlayerList/PlayerList";
import * as styles from "./PlayerFormView.styles";

export const PlayerFormView = (props) => {
  const { name, setName, handleHasRoundStarted } = props;

  const playerName = useRef(null);
  //TODO: Replace useRef with useState and update addPlayer, update types, and remove ts-ignores
  const addPlayer = (e) => {
    e.preventDefault();

    setName([
      ...name,
      {
        //@ts-ignore
        playerName: playerName?.current?.value ?? "",
      },
    ]);
    //@ts-ignore
    playerName.current.value = null;
  };

  return (
    <>
      <form onSubmit={addPlayer}>
        <div style={styles.container}>
          <h3 style={styles.addPlayersText}>Add Players:</h3>
          <div style={styles.inputSection}>
            <input
              style={styles.nameInput}
              name='playerName'
              placeholder='Player Name...'
              ref={playerName}
            />
            <input style={styles.plusButton} type='submit' value='+' />
          </div>
          <div>
            <ul>
              <PlayerList name={name} setName={setName} />
            </ul>
          </div>
        </div>
      </form>
      {/* TODO: Start button should be conditional depending on if multiple players are entered */}
      <div style={styles.buttonSection}>
        <button
          style={styles.startButton}
          onClick={() => handleHasRoundStarted(true)}
        >
          Start
        </button>
      </div>
    </>
  );
};
