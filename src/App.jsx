import * as React from 'react'
import './App.css'

// Components
import Toolbar from './components/toolbar'
import Canvas from './components/canvas'

export default function App() {
    const [tool, setTool] = React.useState('brush')
    const [size, setSize] = React.useState(50)
    const [color, setColor] = React.useState('black')

    return (
        <>
            <Toolbar
                tool={tool}
                size={size}
                color={color}
                onTool={setTool}
                onSize={setSize}
                onColor={setColor}
            />
            <Canvas tool={tool} size={size} color={color} />
        </>
    )
}
