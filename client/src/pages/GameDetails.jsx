import React from 'react'
import Title from "../components/Title.jsx"
import NotFoundDescription from "../components/NotFoundDescription.jsx"
import GameDetailsLoader from "../components/GameDetailsLoader.jsx"
import GameDetailsData from "../components/GameDetailsData.jsx"
import Button from "../components/Button.jsx"
import { useParams } from 'react-router-dom';
import getGameDetails from "../api/game-details.js"
import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import "../styles/game-details-style.css"


const GameDetails = () => {
    const { id } = useParams();
    const [gameData, setGameData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function handleApiRequest() {
            setIsLoading(true)
            try {
                const data = await getGameDetails(id)
                setGameData(data || {})
            } catch (error) {
                console.error("Error fetching data:", error)
                setGameData({})
            } finally {
                setIsLoading(false)
            }
        }
        handleApiRequest()
    }, [id])

    const isEmpty = !gameData || Object.keys(gameData).length === 0;

    return (
        <>
            <Title />
            <div className="conatiner">
                <div className="description-container">
                    <Button text="Go Back" link="/" icon={<ArrowLeft />} />
                    {isLoading ? (
                        <GameDetailsLoader />
                    ) : isEmpty ? (
                        <NotFoundDescription />
                    ) : (
                        <GameDetailsData gameData={gameData} />
                    )}
                </div>
            </div>
        </>
    )
}

export default GameDetails
