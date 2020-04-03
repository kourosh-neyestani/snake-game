import React from 'react'

export default (props) => {

    const location = getRandom();
    const style = {
        top: `${location[1]}%`,
        left: `${location[0]}%`
    }

    return (
        <span className="apple" style={style} />
    )
}

const getRandom = () => {
    let min = 0;
    let max = 95;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 5) * 5;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 5) * 5;
    return [x, y]
}