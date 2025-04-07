import React, { useState, useEffect } from 'react'
import fetchGamesData from "../api/game-list.js"
import { NavLink } from 'react-router-dom'
import { Gamepad2, Clock } from 'lucide-react'
import './style.css'


const GameSearch = () => {
    const [gamesList, setGamesList] = useState([])
    const [isFocus, setIsFocus] = useState(false)

    useEffect(() => {
        console.log(isFocus)
    }, [isFocus])

    async function handleApiRequest(e) {
        try {
        const data = await fetchGamesData(e.target.value)
        setGamesList(data?.results)
        console.log(data?.results);
        } catch (error) {
        console.error("Error fetching data:", error)
        }
    }

    return (
        <>
            <div className="search-container">
                <div className="search-heading">
                    <h1>Search Game</h1>
                    <Gamepad2 width={28} height={28} className="icon" color={"#888"} />
                </div>
                <div className={`input-border ${isFocus ? "active" : ""}`}>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search for a game..."
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={handleApiRequest}
                    />
                </div>
            </div>

            <div className="container">
                <div className="games-container">
                    {gamesList.map((ele, index) => (
                        <NavLink className={"game"} key={index} to={`/game?id=${ele.id}`}>
                            <div className="img-container">
                                <span className="playtime-badge">
                                    <Clock size={14} />
                                    {ele.playtime || "2 Hours"}
                                </span>
                                <img src={ele.background_image} alt={ele.slug + " image"} />
                            </div>
                            <div className="game-data">
                                <p className='game-name'>{ele.slug}</p>
                                <div className="genre-container">
                                    {ele.genres?.map((genre, i) => (
                                        <span key={i} className="genre">{genre.name}</span>
                                    ))}
                                </div>
                                <p className="released-date">{ele.released}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}

export default GameSearch
