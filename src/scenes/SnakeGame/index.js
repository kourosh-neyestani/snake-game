import React, { useState, useEffect, useCallback } from 'react'
import Apple from './Components/Apple';
import Snake from './Components/Snake';
import './style.scss'

const SnakeGame = () => {

    const [snakeCells, setSnakeCells] = useState([[0, 0], [0, 5]]);
    const [keyPress, setKeyPress] = useState("RIGHT");
    const [delay] = useState(100);


    const crawl = () => {
        let cells = [...snakeCells];
        let last = cells[cells.length - 1];
        let step = 5;

        switch (keyPress) {
            case 'UP':
                last = [last[0] - step, last[1]];
                break;
            case 'DOWN':
                last = [last[0] + step, last[1]];
                break;
            case 'LEFT':
                last = [last[0], last[1] - step];
                break;
            case 'RIGHT':
                last = [last[0], last[1] + step];
                break;

            default:
                return;
        }
        cells.push(last);
        cells.shift();
        setSnakeCells(cells);
    };

    useEffect(() => {
        let crawling = setInterval(crawl, delay);
        return () => clearInterval(crawling)
    });

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

    const checkBorders = () => {
        let last = snakeCells[snakeCells.length - 1];
        if (last[0] < 0 || last[0] >= 100 || last[1] < 0 || last[1] >= 100) {
            setSnakeCells([[0, 0], [0, 5]])
        }
    }

    useEffect(() => {
        return () => {
            checkBorders()
        }
    })

    return (
        <div className="snake-game">
            {`First = [${snakeCells[0]}]`}
            <br/>
            {`Second = [${snakeCells[1]}]`}
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
