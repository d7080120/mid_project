import { Link } from 'react-router-dom'
import { useContext,useState } from "react"
// import UserContext from'../UserContext'

const Navbars=()=>{
    // const {user}=useContext(UserContext)
    return(  
    <>
    <div id="navbar">
       <Link to={'/todos'}>Todos</Link>
       <Link to={'/'}>Home</Link>
       {/* <Link to={'/posts'}>Posts</Link>
       <Link to={'/photos'}>Photos</Link>
       <Link to={'/users'}>Users</Link> */}
    </div>
     </>
    )

}
export default Navbars

