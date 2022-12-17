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
            <div><div className='
            text-[16px]
            text-white'>
                <button className="previous-hole" onClick={() => reduceHole()}></button>
                Hole #{holeCount}
            </div>
                <SkinContext.Provider value={{ skinCount, setSkinCount }}>
                    <div className="font-poppins font-normal
        curser-pointer text-[16px]
        text-white">
                        <p className=''>Skins Available: </p> <p className="skinCount">{skinCount}</p>
                        <div><button className="bg-white text-black hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded" onClick={() => pushHole()}>
                            Push Hole </button>
                        </div>
                    </div>
                    <ul>
                        <li className='font-poppins
                        font-normal
                        text-[16px] text-white'>
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