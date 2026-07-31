import {useEffect,useState} from 'react'



function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        const url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then((rev) => rev.json())
        .then((rev) => setData(rev[currency]) )
        console.log(data)
    },[currency])

    return data
}

export default useCurrencyInfo;