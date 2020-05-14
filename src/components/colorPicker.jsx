import * as React from 'react'
import './colorPicker.css'

// Components
import Swatch from './swatch'

export default function ColorPicker({ color, onColor }) {
    return (
        <div className="color-picker">
            <Swatch color="red" currentColor={color} onColor={onColor} />
            <Swatch color="orange" currentColor={color} onColor={onColor} />
            <Swatch color="yellow" currentColor={color} onColor={onColor} />
            <Swatch color="green" currentColor={color} onColor={onColor} />
            <Swatch color="blue" currentColor={color} onColor={onColor} />
            <Swatch color="purple" currentColor={color} onColor={onColor} />
            <Swatch color="pink" currentColor={color} onColor={onColor} />
            <Swatch color="black" currentColor={color} onColor={onColor} />
        </div>
    )
}
