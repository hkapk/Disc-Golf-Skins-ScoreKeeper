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
                    <input className='submitButton text-black p-2 rounded'
                        type='text'
                        name="playerName"
                        id="playerName"
                        placeholder="Player Name..."
                        ref={playerName} />
                    <input className='bg-white text-black hover:bg-blue-400 font-bold m-2 py-1 px-3 mt-1 rounded' type='submit' value='+'></input>
                    <div>
                        <ul className="list-none flex  flex-col justify-end
            items-center text-[36px]
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