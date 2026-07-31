import { useState } from 'react'
// import './App.css'

function App() {
  const [count,setCount] = useState(0)


  return (

    <>

    <h1 >count : {count}</h1>
    <button id="increcs" onClick={() => setCount(count + 1)} >increce</button>
    <button id="decres" onClick={()=> setCount(count - 1)}> decrese</button>

    </>
  )
}

export default App
