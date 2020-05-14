import * as React from 'react'
import './eraserTool.css'

export default function EraserTool({ tool, onTool }) {
    function handleChangeTool() {
        onTool('eraser')
    }

    const style =
        tool === 'eraser'
            ? {
                  background: 'purple',
                  color: 'white',
              }
            : null

    return (
        <div className="eraser-tool" style={style} onClick={handleChangeTool}>
            E
        </div>
    )
}
