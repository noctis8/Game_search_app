import React from 'react'
import { Gamepad2 } from 'lucide-react'

const Title = () => {
    return (
        <div className="search-heading">
                <h1>Search Game</h1>
                <Gamepad2 width={28} height={28} className="icon" color={"#888"} />
        </div>
    )
}

export default Title