import {useEffect,useState} from 'react'
import {useLoaderData} from 'react-router-dom'

function Github(){
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((rev) =>  rev.json())
    //     .then((rev)=> setData(rev))

    // },[data])
    const data = useLoaderData()
    return(
        <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </>
        
    )
}

export default Github;

export const githubInfoLoader = async()=>{
    const respons = await fetch('https://api.github.com/users/hiteshchoudhary')
    return respons.json()
}
// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }

