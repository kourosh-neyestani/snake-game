import React from 'react'

export default (props) => {
    const style = {
        top: `${props.location[0]}%`,
        left: `${props.location[1]}%`
    }

    return (
        <span className="apple" style={style} />
    )
}