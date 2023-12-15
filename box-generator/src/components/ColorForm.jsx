import React, { useState } from "react";

const ColorForm = (props) => {
    const {boxes, setBoxes} = props
    const [color, setColor] = useState("")
    const [height, setHeight] = useState(100)
    const [width, setWidth] = useState(100)

    const createBox = (e) => {
        e.preventDefault()

        const newBox = {
            color,
            height,
            width
        }
        setBoxes([...boxes, newBox])
        setColor("")
        setHeight(100)
        setWidth(100)
    }

    return (
        <div>
            <form onSubmit={createBox}>
                <div>
                    <label>Color:</label>
                    <input type="text" name="color" onChange={ (e) => setColor(e.target.value)} value={color}/>
                </div>
                <div>
                    <label>Height:</label>
                    <input type="number" name="height" onChange={(e) => setHeight(Number(e.target.value))} value={height}/>
                </div>
                <div>
                    <label>Width:</label>
                    <input type="number" name="width" onChange={(e) => setWidth(Number(e.target.value))} value={width}/>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default ColorForm