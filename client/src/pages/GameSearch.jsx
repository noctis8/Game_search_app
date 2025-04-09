import React, { useState } from 'react'
import Title from "../components/Title.jsx"
import GameSearchLoader from "../components/GameSearchLoader.jsx"
import GameSearchData from "../components/GameSearchData.jsx"
import fetchGamesData from "../api/game-list.js"
import '../styles/game-search-style.css'

const GameSearch = () => {
    const [gamesList, setGamesList] = useState([])
    const [isFocus, setIsFocus] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    async function handleApiRequest(e) {
        setIsLoading(true)
        try {
            const data = await fetchGamesData(e.target.value)
            setGamesList(data?.results)
            console.log(data?.results)
        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="search-container">
                <Title />
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
                    {isLoading 
                        ? <GameSearchLoader /> 
                        : <GameSearchData gamesList={gamesList} />
                    }
                </div>
            </div>
        </>
    )
}

export default GameSearch
