import React, { useState } from "react";

const ColorForm = (props) => {
    const {boxes, setBoxes} = props
    const [color, setColor] = useState("")

    const createBox = (e) => {
        e.preventDefault()

        const newBox = {color}
        setBoxes([...boxes, newBox])
        setColor("")
    }

    return (
        <div>
            <form onSubmit={createBox}>
                <div>
                    <label>Color:</label>
                    <input type="text" name="color" onChange={ (e) => setColor(e.target.value)} value={color}/>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default ColorForm