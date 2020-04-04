import React from 'react'

export default (props) => {
    const style = {
        top: `${props.location[1]}%`,
        left: `${props.location[0]}%`
    }

    return (
        <span className="apple" style={style} />
    )
}