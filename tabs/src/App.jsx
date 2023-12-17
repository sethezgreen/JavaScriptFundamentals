import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tabs, setTabs] = useState([])

  return (
    <div className='app'>
      <div className='tabs'>
        {/* map through tabs */}
      </div>
      <div className='content'>
        {/* logic for displaying certain tabs */}
      </div>
    </div>
  )
}

export default App
