import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {

  return (
    <div className="App">
      <PersonCard 
        firstName = {"Seth"} 
        lastName = {"Green"}
        age = {"22"}
        hairColor = {"Dirty Blonde"}
      />
      <PersonCard 
        firstName = {"Ethan"} 
        lastName = {"Angell"}
        age = {"23"}
        hairColor = {"Brown"}
      />
      <PersonCard 
        firstName = {"Claire"} 
        lastName = {"Spickard"}
        age = {"21"}
        hairColor = {"Blonde"}
      />
      <PersonCard 
        firstName = {"Luke"} 
        lastName = {"Green"}
        age = {"20"}
        hairColor = {"Brown"}
      />
    </div>
  )
}

export default App
