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
            <div>
                <div>
                    <button className="previous-hole" onClick={() => reduceHole()}></button>
                    <h1 className='
            text-[48px] 
            text-white'> Hole #{holeCount}</h1>
                </div>
                <SkinContext.Provider value={{ skinCount, setSkinCount }}>
                    <div className="font-poppins font-normal
        text-[24px]
        text-white">
                        <p className='w-full '>Skins Available: {skinCount}</p>
                        <div><button className="bg-white text-black hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded mb-6" onClick={() => pushHole()}>
                            Push Hole </button>
                        </div>
                    </div>
                    <ul className="mb-32">
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
                </SkinContext.Provider>
            </div>
        </CountContext.Provider >
    );

}

export default ScoreList;