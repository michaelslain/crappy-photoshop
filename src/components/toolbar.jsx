import * as React from 'react'
import './toolbar.css'

// Components
import BrushTool from './brushTool'
import EraserTool from './eraserTool'
import SizeSlider from './sizeSlider'
import ColorPicker from './colorPicker'

export default function Toolbar({
    tool,
    size,
    color,
    onTool,
    onSize,
    onColor,
}) {
    return (
        <div className="toolbar">
            <BrushTool tool={tool} onTool={onTool} />
            <EraserTool tool={tool} onTool={onTool} />
            <SizeSlider size={size} onSize={onSize} />
            <ColorPicker color={color} onColor={onColor} />
        </div>
    )
}
