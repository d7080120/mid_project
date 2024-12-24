<<<<<<< HEAD
// import { useContext,useRef,useState } from "react"
// import UserContext from'../UserContext'

// const Login=()=>{

//     const name = useRef(null)
//     const password = useRef(null) 
//     const {Setuser}=useContext(UserContext)
//     const save=()=>{
//     Setuser({name:name.current.value, password:password.current.value})
//     }
//     return(  
//     <>   
//     <input ref={name} placeholder="user name"></input>
//     <input ref={password} placeholder="password"></input>
//         <button onClick={() => save()}>connect</button>
//     </>
//     )

// }
// export default Login
=======
import { useContext,useRef,useState } from "react"
import UserContext from'../UserContext'

const Login=()=>{

    const name = useRef(null)
    const password = useRef(null) 
    const {Setuser}=useContext(UserContext)
    const save=()=>{
    Setuser({name:name.current.value, password:password.current.value})
    }
    return(  
    <>   
    <input ref={name} placeholder="user name"></input>
    <input ref={password} placeholder="password"></input>
        <button onClick={() => save()}>connect</button>
    </>
    )

}
export default Login
>>>>>>> 51abc03662a76c10b66fa9f9fb1cf441b6ce9e21
