import {useState,useContext} from 'react'
import UserContext from '../context/UserContext';



function Login(){
    const {setUser} = useContext(UserContext)
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({userName,password})
    }

    return(
        <>
        <div>
            <input type="text" placeholder={"userName"} value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>

        </div>
        
        </>

    )

}
export default Login;