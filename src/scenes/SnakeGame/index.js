import React, { useState, useEffect, useCallback } from 'react'
import Apple from './Components/Apple';
import Snake from './Components/Snake';
import './style.scss'

const SnakeGame = () => {

    const [snakeCells, setSnakeCells] = useState([[0, 0], [0, 5]]);
    const [keyPress, setKeyPress] = useState("RIGHT");

    const handleKeyPress = useCallback(event => {
        let value;
        const { keyCode } = event;
        switch (keyCode) {
            case 38:
                value = 'UP';
                break;
            case 40:
                value = 'DOWN';
                break;
            case 37:
                value = 'LEFT';
                break;
            case 39:
                value = 'RIGHT';
                break;
            default:
                return;
        }
        setKeyPress(value)
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div className="snake-game">
            {`User Key Press: ${keyPress}`}
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