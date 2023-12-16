import { useState } from 'react'
import './App.css'
import ListForm from './components/ListForm'
import ListDisplay from './components/ListDisplay'

function App() {
const [toDoList, setToDoList] = useState([])

  return (
    <div className="container">
      <ListForm
        toDoList = {toDoList} 
        setToDoList = {setToDoList}
        />
      <ListDisplay 
        toDoList= {toDoList}
        setToDoList = {setToDoList}
        />
    </div>
  )
}

export default App
