import * as React from 'react'
import './swatch.css'

export default function Swatch({ color, currentColor, onColor }) {
    function handleChangeColor() {
        onColor(color)
    }

    let style = {
        background: color,
    }

    if (currentColor === color)
        style = {
            ...style,
            width: '60px',
            height: '60px',
        }

    return (
        <div className="swatch" style={style} onClick={handleChangeColor}></div>
    )
}
