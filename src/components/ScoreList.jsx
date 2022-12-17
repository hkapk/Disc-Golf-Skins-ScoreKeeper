import React, { useState, createContext, useContext } from 'react';
import Score from './Score';
import { PageContext } from '../App';

export const CountContext = createContext(1);
export const SkinContext = createContext(1);

function ScoreList({ name }) {

    const [holeCount, setHoleCount] = useState(1);
    const [skinCount, setSkinCount] = useState(1);
    //const { playerSkinCount, setPlayerSkinCount } = useContext(PlayerSkinContext);
    const { isToggled, setIsToggled } = useContext(PageContext);


    const pushHole = () => {
        setSkinCount(skinCount + 1);
        setHoleCount(holeCount + 1);

    };

    const reduceHole = () => {
        if (holeCount === 1) {
            setIsToggled(true)
        }
        if (holeCount > 1 && skinCount > 1) {
            setHoleCount(holeCount - 1);
            setSkinCount(skinCount - 1);
            //return player skin count
            // setPlayerSkinCount(playerSkinCount - 1);
        };
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <CountContext.Provider value={{ holeCount, setHoleCount }}>
            <div className="grid justify-items-center">
                <div>
                    <button className="" onClick={() => reduceHole()}></button>
                    <h1 className='
                    text-[48px] 
                    text-white'> Hole #{holeCount}</h1>
                </div>
                <SkinContext.Provider value={{ skinCount, setSkinCount }}>
                    <div className="font-poppins font-normal
                                    grid grid-cols-3">
                        <div className='text-[24px]
                                    text-white col-span-2 mt-6'>Skins Available: </div>
                        <div className="text-[24px] text-red-400 m-6 rounded"> {skinCount} </div>
                    </div>
                    <ul className="mb-12">
                        <li className='font-poppins
                        font-normal
                        text-[36px] text-white
                        '>
                            {
                                name.sort(sortByDate).map((value, index) => (
                                    <Score
                                        skinCount={skinCount}
                                        key={index}
                                        name={value}
                                        index={index}
                                    />
                                ))
                            }
                        </li>
                    </ul>
                    <div className="grid justify-items-center"><button className="bg-white text-black hover:bg-blue-400 font-bold h-24 w-54 py-2 px-4 mt-3 rounded mb-6 text-[24px]" onClick={() => pushHole()}>
                        Push Hole </button>
                    </div>
                </SkinContext.Provider>
            </div>
        </CountContext.Provider >
    );

}

export default ScoreList;