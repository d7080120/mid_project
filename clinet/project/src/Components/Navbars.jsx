import { Link } from 'react-router-dom'
import { useContext,useState } from "react"
import UserContext from'../UserContext'

const Navbars=()=>{
    const {user}=useContext(UserContext)
    return(  
    <>
    <div id="navbar">
       <Link to={'/Home'}>home</Link>
       <Link to={'/Books'}>books</Link>
       <Link to={'/Login'}>login</Link>
        <span id="userName">{user.name}</span>
    </div>
     </>
    )

}
export default Navbars

