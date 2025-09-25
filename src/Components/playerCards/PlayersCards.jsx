import React, { useState } from 'react';
import avoter from '../../assets/images/avoter.png'
import flag from '../../assets/images/flag.png'
const PlayersCards = ({ player, setBanlance, banlance }) => {
    const [isSelected, setIsSelected] = useState(false);
    const handler = () => {
        setBanlance(parseInt(banlance) - parseInt((player.price).split("USD").join("").split(",").join("")));
        setIsSelected(true)
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-4">
            <figure>
                <img src={player.player_image} className='w-full h-[300px] object-cover' />
            </figure>
            <div className="mt-4">
                <div className='flex gap-3'>
                    <img src={avoter} />
                    <h2 className="card-title ml-2">{player.player_name}</h2>
                </div>
                <div className='flex justify-between mt-4 border-b-1 pb-2 border-gray-400'>
                    <div className='flex gap-2'>
                        <img src={flag} />
                        <span>{player.player_country}</span>
                    </div>
                    <button className='btn'>{player.playing_role}</button>
                </div>

                <div className='flex justify-between font-semibold'>
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>

                <div className='flex justify-between'>
                    <span className='font-semibold'>{player.bating_style}</span>
                    <span>{player.bowling_style}</span>
                </div>



                <div className="card-actions mt-4 justify-between items-center">
                    <p className='font-bold'>price : $ {player.price}</p>
                    <button disabled={isSelected} onClick={handler} className="btn"> {isSelected === true ? "Selected" : "Choose player"}</button>
            </div>
        </div>
        </div >
    );
};

export default PlayersCards;