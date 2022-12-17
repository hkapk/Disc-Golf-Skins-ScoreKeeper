import React, { useState, useContext } from "react";
import { CountContext, SkinContext } from './ScoreList';



function Score({ name }) {

    // const { holeCount, setHoleCount } = useContext(CountContext);
    const { holeCount, setHoleCount } = useContext(CountContext);
    const { skinCount, setSkinCount } = useContext(SkinContext);
    const [playerSkinCount, setPlayerSkinCount] = useState(0);

    const addSkin = () => {
        setPlayerSkinCount(playerSkinCount + skinCount);
        //reset skin count to 1
        setSkinCount(skinCount - skinCount + 1);
        //advance holes 1
        setHoleCount(holeCount + 1);
    };


    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="">{name.playerName}: </div>
            <div className="pl-20"> {playerSkinCount} </div>
            <div className="pl-6"> <button className='add-skin' onClick={() => addSkin()}> + </button></div>
        </div>
    )
}

export default Score;