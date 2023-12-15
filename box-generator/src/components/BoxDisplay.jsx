import React, { useState } from "react";

const BoxDisplay = (props) => {
    const {boxes, setBoxes} = props
    return (
        <div style={{display: "inline-grid"}}>
            {
                boxes.map((box, idx) => (
                    <div key={idx} style={{backgroundColor: box.color, width: box.width, height: box.height, margin: 15}}>
                    </div>
                ))
            }
        </div>
    )
}

export default BoxDisplay