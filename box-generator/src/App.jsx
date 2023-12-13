import { useState } from 'react'
import './App.css'
import ColorForm from './components/ColorForm'
import BoxDisplay from './components/BoxDisplay'

function App() {
  const [boxes, setBoxes] = useState([])

  return (
    <>
      <ColorForm
        boxes = {boxes}
        setBoxes = {setBoxes}
        />
      <BoxDisplay
        boxes = {boxes}
        setBoxes = {setBoxes}
      />
    </>
  )
}

export default App
