import React, { useRef, useState } from "react";
import PlayerList from "./PlayerList";

function PlayerForm({ name, setName }) {

    const playerName = useRef(null);


    const addPlayer = e => {
        e.preventDefault();

        setName([...name, {
            "playerName": playerName.current.value,
        }]);

        playerName.current.value = null;

    }

    return (
        <form onSubmit={addPlayer}>
            <div className='w-full flex py-6
        justify-between items-center navbar
        font-poppins font-normal text-[16px]
        text-white'>
                <div><h1 className="py-6"> Add Players: </h1>
                    <input className='submitButton text-black p-2'
                        type='text'
                        name="playerName"
                        id="playerName"
                        placeholder="Player Name..."
                        ref={playerName} />
                    <input className='submitButton p-2' type='submit' value='+'></input>
                    <div>
                        <ul className="list-none flex  flex-col justify-end
            items-center
            py-6">
                            <PlayerList name={name} setName={setName} />
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    );

}

export default PlayerForm;