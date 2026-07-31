import {useParams} from 'react-router-dom'

function User(){
    const {userid} = useParams()



    return(
        <>
        <p className='text-amber-500'> user :{userid}</p>
        
        </>


    )
}

export default User;