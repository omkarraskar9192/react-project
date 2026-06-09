import { useState } from 'react'


function App() {
  
  const [count,setcounter] = useState(0)
  function increment (){
    setcounter(count + 1)
  }
  function decriment (){
    setcounter(count - 1)
  }


  return (
    <>
    <h1>count : {count}</h1>
    <button onClick={increment}> Increment </button>
    <button onClick={decriment}>decriment</button>
    </>
  )
}

export default App
