
import Navbar from './components/Navbar'
import PlayerForm from './components/PlayerForm';
import ScoreList from './components/ScoreList';
import styles from './style'

import React, { useState, createContext } from 'react';

export const PageContext = createContext(true);

function App() {
  const [name, setName] = useState([]);
  // const [currentPage, setCurrentPage] = useState('PlayerForm');
  const [isToggled, setIsToggled] = useState(true);

  return (
    <div className="bg-primary w-full overflow-hidden h-screen">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary mb-auto ${styles.flexStart}`} >
        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <PageContext.Provider value={{ isToggled, setIsToggled }}>
            {isToggled ? <PlayerForm name={name} setName={setName} /> : <ScoreList name={name} setName={setName} />}

            {isToggled ? <button className="bg-white text-black hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded" onClick={() => setIsToggled(!isToggled)}>Start</button> : <><button className="submitButton" onClick={() => setIsToggled(!isToggled)}>New Game</button> </>}
          </PageContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App
