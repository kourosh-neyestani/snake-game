import React, { useState } from 'react'
import Apple from './Components/Apple';
import Snake from './Components/Snake';
import './style.scss'

const SnakeGame = () => {

    const [snakeCells, setSnakeCells] = useState([[0, 0], [0, 5]]);

    return (
        <div className="snake-game">
            <div className="display-center">
                <div className="game-zone">
                    <Apple />
                    <Snake cells={snakeCells} />
                </div>
            </div>
        </div>
    )
}

export default SnakeGame