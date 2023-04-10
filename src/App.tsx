import { Header } from "./components/Header/Header";
import { PlayerFormView } from "./containers/PlayerFormView/PlayerFormView";
import { ScoreCardView } from "./containers/ScoreCardView/ScoreCardView";
import React, { useState } from "react";
import * as styles from "./style";
//TODO: Update types
function App() {
  const [name, setName] = useState([]);
  const [hasRoundStarted, setHasRoundStarted] = useState(false);

  const handleHasRoundStarted = (status: boolean) => {
    setHasRoundStarted(status);
  };

  return (
    <div style={styles.fullPageContainer}>
      <Header />
      <div style={styles.viewContainer}>
        {hasRoundStarted ? (
          <ScoreCardView
            name={name}
            setName={setName}
            handleHasRoundStarted={handleHasRoundStarted}
          />
        ) : (
          <PlayerFormView
            name={name}
            setName={setName}
            handleHasRoundStarted={handleHasRoundStarted}
          />
        )}
      </div>
    </div>
  );
}

export default App;
