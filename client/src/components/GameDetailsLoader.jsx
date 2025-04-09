import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const GameDetailsLoader = () => {
    return (
        <>
            <div className="image-conatiner">
                <Skeleton height={200} />
                <h2><Skeleton width={200} /></h2>
            </div>
            <p className='description'>
                <Skeleton count={8} />
            </p>
            <div className='footer'>
                <div className="data">
                    <div className='genres-container'>
                        <p>Genres</p>
                        <Skeleton width={60} count={2} />
                    </div>
                    <div className='platforms-conatiner'>
                        <p>Platforms</p>
                        <Skeleton width={100} count={1} />
                    </div>
                </div>
                <div className="purchase">
                    <Skeleton width={120} height={40} />
                </div>
            </div>
        </>
    )
}

export default GameDetailsLoader