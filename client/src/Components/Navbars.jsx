import { Link } from 'react-router-dom'
import { useContext,useState } from "react"
const Navbars=()=>{
    // const {user}=useContext(UserContext)
    return(  
    <>
    {/* <div id="navbar"> */}
       <Link to={'/'}>Home</Link>
       <Link to={'/todos'}>Todos</Link>
       <Link to={'/users'}>User</Link>
       {/* <Link to={'/post'}>Post</Link>
       <Link to={'/user'}>User</Link> */}
        {/* <span id="userName">{user.name}</span> */}
    {/* </div> */}
     </>
    )

}
export default Navbars

