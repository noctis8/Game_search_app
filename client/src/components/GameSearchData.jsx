import React from 'react'
import { NavLink } from "react-router-dom"
import { Clock } from "lucide-react"

const GameSearchData = ({ gamesList }) => {
    return (
        gamesList.map((ele, index) => (
            <NavLink className="game" key={index} to={`/game/${ele.id}`}>
                <div className="img-container">
                    <span className="playtime-badge">
                        <Clock size={14} />
                        {ele.playtime ? `${ele.playtime} Hours` : "Unknown"}
                    </span>
                    {ele.background_image && (
                        <img src={ele.background_image} alt={`${ele.slug} image`} />
                    )}
                </div>
                <div className="game-data">
                    <p className="game-name">{ele.slug}</p>
                    <div className="genre-container">
                        {ele.genres && ele.genres.length > 0 && (
                            ele.genres.map((genre, i) => (
                                <span key={i} className="genre">{genre.name}</span>
                            ))
                        )}
                    </div>
                    <p className="released-date">{ele.released}</p>
                </div>
            </NavLink>
        ))
    )
}

export default GameSearchData