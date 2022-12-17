import React from "react";
import logo from '../assets';

function Navbar({ totalSkins }) {
    return (
        <nav className="w-full flex py-6
        justify-between items-center navbar
        font-poppins font-normal
        curser-pointer text-xl
        text-white">
            <img src={logo}
                className="h-24" />
            <div className="w-full p-6 text-[24px]">
                Disc Golf Skins
            </div >
        </nav>
    )
}

export default Navbar;