import { Link } from 'react-router-dom'
import { useContext,useState } from "react"
<<<<<<< HEAD
=======
// import UserContext from'../UserContext'

>>>>>>> 51abc03662a76c10b66fa9f9fb1cf441b6ce9e21
const Navbars=()=>{
    // const {user}=useContext(UserContext)
    return(  
    <>
<<<<<<< HEAD
    {/* <div id="navbar"> */}
       <Link to={'/'}>Home</Link>
       <Link to={'/todos'}>Todos</Link>
       <Link to={'/users'}>User</Link>
       {/* <Link to={'/post'}>Post</Link>
       <Link to={'/user'}>User</Link> */}
        {/* <span id="userName">{user.name}</span> */}
    {/* </div> */}
=======
    <div id="navbar">
       <Link to={'/todos'}>Todos</Link>
       <Link to={'/'}>Home</Link>
       {/* <Link to={'/posts'}>Posts</Link>
       <Link to={'/photos'}>Photos</Link>
       <Link to={'/users'}>Users</Link> */}
    </div>
>>>>>>> 51abc03662a76c10b66fa9f9fb1cf441b6ce9e21
     </>
    )

}
export default Navbars

