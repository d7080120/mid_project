import Todo from "./Todo"
import { useEffect, useState } from "react"
import axios from 'axios'

// const Todos=()=>{
//     const [todos,setTodos]=useState([])
//     const getTodos=async()=>{
//         try{
//             const res=await axios.get('http://localhost:1135/api/todos')
//             if(res.status===200){
//                 console.log(res.data);
//                 setTodos(res.data)
//             }       
//         }
//         catch(e){
//             console.log(e);
//         }
//     }
//     useEffect(()=>{getTodos()},[])
//     return(<>
//         {todos.map(t=>{ console.log(t) ;return(<Todo todo={t} setTodos={setTodos}></Todo>)})}
//     </>)
// }
// export default Todos
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import CreateTodoButton from "./CreateTodoButton copy";



const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
    const [todos,setTodos]=useState([])
        const getTodos=async()=>{
            try{
                const res=await axios.get('http://localhost:1135/api/todos')
                if(res.status===200){
                    console.log(res.data);
                    setTodos(res.data)
                }       
            }
            catch(e){
                console.log(e);
            }
        }
        useEffect(()=>{getTodos()},[todos])
        const createTodo = async (todo) => {
          try {
            const res = await axios.post('http://localhost:1135/api/todos', todo)
            if (res.status === 200)
              setTodos(res.data)
          }
          catch (e) {
            console.log(e);
          }
        }
        // const addTodo=async()=>{
           
        //         const newTodo = {
        //             title: "bbb@gmail.com",
        //             name: "bbb",
        //             phone: "0583271152",
        //             username: "bbb1152"
        //         }
        //         const res = await axios.post('http://localhost:8000/user',newUser)
        //         debugger
        //         setUsersData(res.data)
            
        // }
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" color="secondary" sx={{ p: 2, pb: 0 }}>
          Todos
        </Typography>
        {todos.map(t=>{ console.log(t) ;return(<Todo todo={t} setTodos={setTodos}></Todo>)})}
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
          <CreateTodoButton color="secondary"  aria-label="add" setTodos={setTodos} createTodo={createTodo} ></CreateTodoButton>
          </StyledFab>

          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
