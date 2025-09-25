import React, { use } from 'react';
import PlayersCards from '../playerCards/PlayersCards';

const AvailablePlayers = ({ playersPromise, setBanlance, banlance }) => {
    const playersData = use(playersPromise)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

            {
                playersData.map(player =><PlayersCards banlance={banlance} setBanlance={setBanlance} player={player}></PlayersCards>)
            }

        </div>
    );
};

export default AvailablePlayers;