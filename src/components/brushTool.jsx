import * as React from 'react'
import './brushTool.css'

export default function BrushTool({ tool, onTool }) {
    function handleChangeTool() {
        onTool('brush')
    }

    const style =
        tool === 'brush'
            ? {
                  background: 'purple',
                  color: 'white',
              }
            : null

    return (
        <div className="brush-tool" style={style} onClick={handleChangeTool}>
            B
        </div>
    )
}
