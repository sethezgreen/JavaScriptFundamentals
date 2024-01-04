import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Home = (props) => { 
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}
    
const Num = (props) => {
  const { number } = useParams()

  return (
    
    <h1>The number is: { number } </h1>
  );
}
    
const Word = (props) => {
  const { word } = useParams()

  return (
    <h1>The word is: { word }</h1>
  )
}

const StyledWord = (props) => {
  const { word } = useParams()
  const { textColor } = useParams()
  const { backgroundColor } = useParams()

  return (
    <h1 style={{color: textColor, backgroundColor: backgroundColor}}>{ word }</h1>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:number" element={<Num />}/>
        <Route path="/:word" element={<Word />}/>
        <Route path="/:word/:textColor/:backgroundColor" element={<StyledWord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
