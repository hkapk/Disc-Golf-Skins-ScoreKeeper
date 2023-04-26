import React, { Dispatch, SetStateAction, useRef } from "react";
import { PlayerList } from "../../components/PlayerList/PlayerList";
import * as styles from "./PlayerFormView.styles";

type PlayerFormViewProps = {
  players: string[];
  setPlayers: Dispatch<SetStateAction<string[]>>;
  handleHasRoundStarted: (status: boolean) => void;
};

export const PlayerFormView = (props: PlayerFormViewProps) => {
  const { players, setPlayers, handleHasRoundStarted } = props;

  const newPlayerName = useRef<HTMLInputElement>(null);

  const addPlayer = (e) => {
    e.preventDefault();

    const playerName = newPlayerName?.current?.value;

    if (playerName) {
      setPlayers([...players, playerName]);
      newPlayerName.current.value = "";
    }
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
              ref={newPlayerName}
            />
            <input style={styles.plusButton} type='submit' value='+' />
          </div>
          <div>
            <ul>
              <PlayerList players={players} />
            </ul>
          </div>
        </div>
      </form>

      <div style={styles.buttonSection}>
        {players.length > 1 && (
          <button
            style={styles.startButton}
            onClick={() => handleHasRoundStarted(true)}
          >
            Start
          </button>
        )}
      </div>
    </>
  );
};
