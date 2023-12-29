import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [error, setError] = useState('')
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=607&offset=0')
      .then((response) => {
        setPokemonList(response.data.results)
        setError('')
      })
      .catch((err) => {
        setPokemonList([])
        setError("Something went wrong")
      })
  })

  return (
    <>
      <h1>Pokemon API</h1>
      {
        error.length >0?
        <p>{error}</p>:
        null
      }
      {
        pokemonList.map((pokemon, idx) => (
          <ul key={idx}>
            <li>{pokemon.name}</li>
          </ul>
        ))
      }
    </>
  )
}

export default App
