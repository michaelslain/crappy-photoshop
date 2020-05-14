import * as React from 'react'
import './sizeSlider.css'

export default function SizeSlider({ size, onSize }) {
    function handleUpdateSize(e) {
        onSize(e.target.value)
    }

    return (
        <div className="slider-container">
            <input
                className="slider"
                type="range"
                min={0}
                max={100}
                value={size}
                className="slider"
                onChange={handleUpdateSize}
            />
            <div className="slider-value">{size}</div>
        </div>
    )
}
