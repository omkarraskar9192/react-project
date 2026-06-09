import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor] = useState('black')
  function changeColor(colors){
    color = colors
  }

  return (
    
    <>
      <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className= ' px-5 py-5 mx-5 my-5'>
        {/* <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>*/}
        <button className='bg-red-500 px-4 py-1 mx-5 text-amber-50' onClick={()=>setColor('red')}>red</button>
        <button className='bg-blue-500 px-4 py-1 mx-5 text-amber-50'  onClick={()=>setColor('blue')}>blue</button>
        <button className='bg-green-500 px-4 py-1 mx-5 text-amber-50' onClick={()=>setColor('green')}>green</button>
        <button className='bg-yellow-500 px-4 py-1 mx-5 text-amber-50' onClick={()=>setColor('yellow')}>yellow</button>
      </div>


    </div>

    </>
  )
}

export default App
