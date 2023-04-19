import { Header } from "./components/Header/Header";
import { PlayerFormView } from "./containers/PlayerFormView/PlayerFormView";
import { ScoreCardView } from "./containers/ScoreCardView/ScoreCardView";
import React, { useState } from "react";
import * as styles from "./style";

function App() {
  const [players, setPlayers] = useState<string[]>([]);
  const [hasRoundStarted, setHasRoundStarted] = useState<boolean>(false);

  const handleHasRoundStarted = (status: boolean) => {
    setHasRoundStarted(status);
  };

  return (
    <div style={styles.fullPageContainer}>
      <Header />
      <div style={styles.viewContainer}>
        {hasRoundStarted ? (
          <ScoreCardView
            players={players}
            handleHasRoundStarted={handleHasRoundStarted}
          />
        ) : (
          <PlayerFormView
            players={players}
            setPlayers={setPlayers}
            handleHasRoundStarted={handleHasRoundStarted}
          />
        )}
      </div>
    </div>
  );
}

export default App;
