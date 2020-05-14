import * as React from 'react'
import './canvas.css'

export default function Canvas({ tool, size, color }) {
    const [isDraw, setIsDraw] = React.useState(false)

    const canvasRef = React.useRef(null)

    React.useEffect(() => {
        if (canvasRef.current !== null) handleInitCanvas()
    }, [canvasRef])

    function handleInitCanvas() {
        canvasRef.current.width = canvasRef.current.offsetWidth
        canvasRef.current.height = canvasRef.current.offsetHeight
    }

    function handleStartDraw(e) {
        setIsDraw(true)
        handleDrawOnCanvas(e)
    }

    function handleEndDraw() {
        setIsDraw(false)
    }

    function handleDrawOnCanvas(e) {
        if (isDraw) {
            const { clientX, clientY } = e

            const ctx = canvasRef.current.getContext('2d')

            ctx.beginPath()
            ctx.arc(clientX, clientY - 100, size, 0, 2 * Math.PI)
            if (tool === 'brush') ctx.fillStyle = color
            else ctx.fillStyle = 'white'
            ctx.fill()
        }
    }

    return (
        <canvas
            ref={canvasRef}
            onMouseDown={handleStartDraw}
            onMouseMove={handleDrawOnCanvas}
            onMouseUp={handleEndDraw}
        ></canvas>
    )
}
