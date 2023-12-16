import React, { useState} from "react";

const ListForm = (props) => {
    const {toDoList, setToDoList} = props
    const [description, setDescription] = useState("")
    const [isCompleted, setIsCompleted] = useState("")

    const createListItem = (e) => {
        e.preventDefault()

        const newItem = {
            description,
            isCompleted: false
        }
        setToDoList([...toDoList, newItem])
        setDescription("")
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <h2>Add List Item</h2>
            <form onSubmit={createListItem} className="display-flex">
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" onChange={ (e) => setDescription(e.target.value)} value={description}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default ListForm