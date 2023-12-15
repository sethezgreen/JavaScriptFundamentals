import React, { useState} from "react";

const ListDisplay = (props) => {
    const {toDoList, setToDoList} = props

    return (
        <div>
            {
                toDoList.map((item, idx) => (
                    <p key={idx}>{item.description}</p>
                ))
            }
        </div>
    )
}

export default ListDisplay