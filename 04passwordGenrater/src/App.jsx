import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numIsAllow,setNumIsAllow] = useState(false)
  const [symboleIsAllow,setSymboleIsAllow] = useState(false)
  const [password,setPassword] = useState("")


    //useRef hook
  const passwordRef = useRef(null)

  const upadate = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numIsAllow) str += "0123456789"
    if (symboleIsAllow) str += "!@#$%^&*-_+=[]{}~`"
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  },[length,numIsAllow,symboleIsAllow,setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
      upadate() 
  }, [length, numIsAllow,symboleIsAllow,upadate])



  return (
    <>
      <div>
        <h1>Password Genrater</h1>
        <div className=''>
        <input
        type="text"

        placeholder="Password"
        value={password}
        className='bg-amber-50 px-10 py-2.5 rounded-lg text-black'
        readOnly
        ref={passwordRef}
        
        ></input>
        <button onClick={copyPasswordToClipboard} className='bg-blue-700 px-4 py-2.5 rounded-lg'>Copy</button>
        </div>
        <div className='px-2.5 py-2.5'>
    <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
        </div>
          {/* <text className='px-1'>length : {length}  </text> */}
          <div>
            <input 
            type= 'checkbox'
            defaultChecked={numIsAllow}
            id="numberInput"
            onChange={()=>{
              setNumIsAllow((prev)=> ! prev)
            }}
            />
            <text> || Use Numbers  </text>
          </div>
          <div>
            <input 
            type= 'checkbox'
            defaultChecked={symboleIsAllow}
            id = 'symboleInput'
            onChange={()=>{
              setSymboleIsAllow((prev)=> !prev)
            }}
            
            />
            <text> || Use Symbolse</text>
          </div>
        </div>

      </div>
      </div>

    </>
  )
}

export default App
