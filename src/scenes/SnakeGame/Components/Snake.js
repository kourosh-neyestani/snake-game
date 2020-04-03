import React from 'react';

export default (props) => {
    return (
        <div className="snake">
            {props.cells.map((cell, i) => (<span key={i} className="snake-cell" style={{ top: `${cell[0]}%`, left: `${cell[1]}%` }} />))}
        </div>
    )
}