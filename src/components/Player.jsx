import React from "react";



function Player({ name, index, removePlayer }) {
    const removeHandle = i => {
        removePlayer(i);
    }


    return (
        <li className='player-item'>
            <div className=""><button className='remove-item' onClick={() => removeHandle(index)
            }> </button>
                {name.playerName}  </div>
        </li>
    )
}

export default Player;