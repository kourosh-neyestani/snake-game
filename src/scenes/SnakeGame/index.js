import React from 'react'
import './style.scss'

const SnakeGame = () => {
    return (
        <div className="snake-game">
            <div className="display-center">
                <div className="game-zone">
                    <div className="snake"></div>
                    <div className="apple"></div>
                </div>
            </div>
        </div>
    )
}

export default SnakeGame