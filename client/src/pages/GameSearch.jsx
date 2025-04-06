import React from 'react'
import fetchGamesData from "../api/game-list.js"
import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'

const GameSearch = () => {
    const [gamesList, setGamesList] = useState([])
    async function handleApiRequest(e) {
        console.log("hi")
        try {
            const data = await fetchGamesData(e.target.value);
            console.log("before setting it in the state", data?.results);
            setGamesList(data?.results);
            console.log("after setting it in the state", gamesList);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    return (
        <>
            <div>GameSearch</div>
            <input type="text" onChange={handleApiRequest} />
            <div style={{margin: "20px"}}>
                {gamesList.map((ele, index) => (
                    <NavLink style={{margin: "20px"}} key={index} to={`/game?id=${ele.id}`}>
                        <p>{ ele.slug }</p>
                        <p>{ ele.released }</p>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default GameSearch