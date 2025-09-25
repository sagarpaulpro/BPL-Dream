import React, { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {
    const playersData = use(playersPromise)
    console.log(playersData)
    return (
        <div className='max-w-[1200px] mx-auto'>
            <p>Available Players</p>
        </div>
    );
};

export default AvailablePlayers;