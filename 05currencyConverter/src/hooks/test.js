import {useState,useEffect} from "react"

function test(){
    
    const[count,setcount] = useState(0)
    useEffect(()=>setcount(count + 1),[test])
    console.log(count)
    return count

}
