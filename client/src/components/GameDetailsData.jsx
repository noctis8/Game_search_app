import React from 'react'
import Button from "../components/Button.jsx"
import { ShoppingCart } from "lucide-react"


const GameDetailsData = ({ gameData }) => {
    return (
        <>
            <div className="image-conatiner">
                <img src={gameData.background_image} alt="image" />
                <h2>{gameData.name}</h2>
            </div>
            <p className='description'>{gameData.description_raw}</p>
            <div className='footer'>
                <div className="data">
                    <div className='genres-container'>
                        <p>Genres</p>
                        {gameData.genres && gameData.genres.length > 0 ? (
                            gameData.genres.map((ele) => (
                                <span className='genre' key={ele.id}>{ele.name}</span>
                            ))
                        ) : (
                            <span className='genre'>Unknown</span>
                        )}
                    </div>
                    <div className='platforms-conatiner'>
                        <p>Platforms</p>
                        {gameData.platforms && gameData.platforms.length > 0 ? (
                            gameData.platforms.map((ele) => (
                                <span key={ele.platform.id} className='platform'>{ele.platform.name}</span>
                            ))
                        ) : (
                            <span className='platform'>Unknown</span>
                        )}
                    </div>
                </div>
                <div className="purchase">
                    <Button text="Purchase" icon={<ShoppingCart />} />
                </div>
            </div>
        </>
    )
}

export default GameDetailsData