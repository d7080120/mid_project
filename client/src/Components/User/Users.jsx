import User from './User';
import { useEffect, useState } from "react"
import axios from 'axios'
import CreateUserButton from './CreateUserButton';
import sortButton from './sortButton';
import SS from './sortButton';


const Users = () => {
    const [usersData, setUsersData] = useState([])
    const [useFeature, setFeature] = useState("_id")
    const getUsers = async () => {
        try {
            const res = await axios.get('http://localhost:1135/api/users')
            if (res.status === 200) {
                console.log(res.data);
                res.data.sort()
                const j = res.data.sort((a, b) => Number(a[useFeature] - b[useFeature]))


                setUsersData(j)

            }
        } catch (err) {
            if (err.status === 400) {
                setUsersData([])
            }

            console.error(err.message)
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

    const createUser = async (newUser) => {
        try {
            const res = await axios.post('http://localhost:1135/api/users', newUser)
            if (res.status === 201)
                setUsersData(res.data.user)


        }
        catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])

    const sortAll = () => {
        usersData.sort()
        setUsersData(usersData.sort((a, b) => a.name - b.name))
    }
    return (
        <>
            {usersData.map((user) => { return <User user={user} setUsersData={setUsersData} createUser={createUser} /> })}
            <CreateUserButton createUser={createUser}></CreateUserButton>
            {/* <sortButton setFeature={setFeature}></sortButton> */}
            {/* <SS setFeature={setFeature}></SS> */}
        </>
    )

}
export default Users