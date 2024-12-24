import User from './User';
import { useEffect, useState } from "react"
import axios from 'axios'
const Users=()=>{
    const [usersData, setUsersData] = useState([])
    const getUsers = async () => {
        try {
            const res = await axios.get('http://localhost:1135/api/users')
            if (res.status === 200) {
                console.log(res.data);
                setUsersData(res.data)
            }
        } catch (e) {
            console.error(e)
        }
    }
    const getUserById = async () => {
        //******GET - getUserById***** */
        try {
            const Id = "675727cec84cae9608d85008"
            const res = await axios.get(`http://localhost:1135/api/users/${Id}`)
            if (res.status === 200) {
                console.log(res.data);
            }
            debugger
        } catch (e) {
            console.error(e)
        }
    }

    const createUser = async () => {
        const newUser = {
            email: "bbb@gmail.com",
            name: "bbb",
            phone: "0583271152",
            username: "bbb1152"
        }
        try{
            const res = await axios.post('http://localhost:1135/api/users',newUser)
            if(res.status===200)
                setUsersData(res.data)


        }
        catch(err){
            console.log(err.message)
        }
    }

    

   

    useEffect(() => {
        getUsers()
    }, [])

const user={
    name:"aa"
}
    return(  
    <>

    {usersData.map((user)=>{return<User user={user} setUsersData={setUsersData}/>})}
    {/* <User user={user}/> */}
 

    </>
    )

}
export default Users