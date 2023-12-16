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
                    </div>
                ))
            }
        </div>
    )
}

export default ListDisplay