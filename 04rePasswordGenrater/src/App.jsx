import { useState,useCallback,useRef,useEffect } from 'react'

import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [numAllowed,setNumAllowed]= useState(false)
  const [charAllowed,setcharAllowed]= useState(false)
  const [password,setPassword] = useState("")


  const passwordRef = useRef(null)
  
  const passwordGenarter = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const num = "1234567890"
    const char = "`~!@#$%^&*()-_+={[}]|;:?/.>,<"
    if (numAllowed) str +=num
    if (charAllowed) str +=char
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword]
)


const copytextInPassword = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,99)

  window.navigator.clipboard.writeText(password)
})

useEffect(
  passwordGenarter,
  [length,numAllowed,charAllowed,setPassword]

)
  

  return (
    <>
    <div>
      <div>
        <input 
        type="text"
        value={password}
        defaultValue={"Password"}
        readOnly
        ref={passwordRef}

          />
        <button
        onClick={copytextInPassword}
        >Copy</button>

      </div>
      <div>
        <input type="range"
        value={length}
        min={6}
        max={100}
        onChange={(e)=>setlength(e.target.value)}
        
        />
        <text>length : {length}</text>
        <input type="checkbox"
        onChange={()=>setNumAllowed((prev) => !prev)}
        />
        <text>Number Allowed</text>
        <input type="checkbox"
        onChange={()=>setcharAllowed((prev) => !prev)}
        />
        <text>Char Allowed</text>
      </div>

    </div>

    </>
  )
}

export default App
