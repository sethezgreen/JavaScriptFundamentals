import React, { useState} from "react";

const ListDisplay = (props) => {
    const {toDoList, setToDoList} = props

    const toggleCompleted = (item) => {
        const updatedToDoList = toDoList.map((itemFromMap) => {
            if (itemFromMap === item) {
                itemFromMap.isCompleted = !itemFromMap.isCompleted
            }
            return itemFromMap
        })
        setToDoList(updatedToDoList)
    }

    const removeFromToDoList = (item) => {
        const updatedToDoList = toDoList.filter((itemFromFilter) => itemFromFilter !== item)
        setToDoList(updatedToDoList)
    }

    return (
        <div>
            {
                toDoList.map((item, idx) => (
                    <div key={idx} className="display-flex">
                        {
                            item.isCompleted?
                            <p className="line-through">{item.description}</p>:
                            <p>{item.description}</p>
                        }
                        <input type="checkbox" onClick={() => toggleCompleted(item)} defaultChecked={item.isCompleted}/>
                        <button onClick={() => removeFromToDoList(item)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ListDisplay