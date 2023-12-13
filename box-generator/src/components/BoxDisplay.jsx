import React, { useState } from "react";

const BoxDisplay = (props) => {
    const {boxes, setBoxes} = props
    return (
        <div>
            {
                boxes.map((box) => (
                    <div>
                        <p>{box.color}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default BoxDisplay