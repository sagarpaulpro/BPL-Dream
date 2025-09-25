import React from 'react';
import logo from '../../assets/images/logo.png'
import coin from '../../assets/images/dollar-1.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm gap-4 max-w-[1200px] mx-auto">
                <div className="flex-1">
                    <a className="text-xl"><img className='w-[60px] h-60px' src={logo} /></a>
                </div>
                <div>
                    <ul className='flex gap-4 '>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Fixture</a></li>
                        <li><a href='#'>Teams</a></li>
                        <li><a href='#'>Schedules</a></li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <span>0</span>
                    <span>Coin</span>
                    <img src={coin} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;