import React from 'react';
import Player from './Player';

function PlayerList({ name, setName }) {

    const removePlayer = i => {
        let temp = name.filter((v, index) => index !== i);
        setName(temp);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <div className="card">
            <div className='player-list'>
                {
                    name.sort(sortByDate).map((value, index) => (
                        <Player
                            key={index}
                            name={value}
                            index={index}
                            removePlayer={removePlayer} />
                    ))
                }
            </div>
        </div>
    )

}

export default PlayerList;