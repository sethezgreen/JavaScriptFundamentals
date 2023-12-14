import React, { useState } from "react";

const BoxDisplay = (props) => {
    const {boxes, setBoxes} = props
    return (
        <div style={{display: "inline-grid"}}>
            {
                boxes.map((box) => (
                    <div style={{backgroundColor: box.color, width: 100, height: 100, margin: 15}}>
                    </div>
                ))
            }
        </div>
    )
}

export default BoxDisplay