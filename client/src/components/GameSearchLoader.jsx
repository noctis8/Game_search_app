import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const GameSearchLoader = () => {
    return (
        Array.from({ length: 6 }).map((_, i) => (
            <div className="game skeleton" key={i}>
                <div className="img-container">
                    <Skeleton height={140} />
                </div>
                <div className="game-data">
                    <Skeleton height={20} width={120} style={{ marginBottom: "0.5rem" }} />
                    <Skeleton height={15} width={80} />
                </div>
            </div>
        ))
    )
}

export default GameSearchLoader