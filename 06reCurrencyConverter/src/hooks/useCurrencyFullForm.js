import {useEffect,useState} from 'react'

function useCurrencyFullForm(){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
        .then((rev) => rev.json())
        .then((rev)=>setData(rev))
    })


    return data
}
export default useCurrencyFullForm;