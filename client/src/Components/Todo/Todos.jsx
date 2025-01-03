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
import CreateTodoButton from "./CreateTodoButton";
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';



const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  const [todos, setTodos] = useState([])

  const searchBy = React.useRef(null)
  const getTodos = async () => {
    try {
      const res = await axios.get('http://localhost:1135/api/todos')
      if (res.status === 200) {
        console.log(res.data);
        console.log(searchBy.current.value)
        if (searchBy.current.value === "")
          return setTodos(res.data)

        const t = res.data.filter(t => t.title == searchBy.current.value)
        console.log({ t: t });
        setTodos(t)
      }
    }
    catch (e) {
      if (e.status === 400) {
        setTodos([])
      }
      console.log(e);
    }
  }
  useEffect(() => { getTodos() }, [])
  const createTodo = async (todo) => {
    try {
      const res = await axios.post('http://localhost:1135/api/todos', todo)
      console.log(res.data.todos);
      if (res.status === 201)
        setTodos(res.data.todos)
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" color="secondary" sx={{ p: 2, pb: 0 }}>
          Todos
        </Typography>
        {todos.map(t => { console.log(t); return (<Todo todo={t} setTodos={setTodos}></Todo>) })}
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <CreateTodoButton color="secondary" aria-label="add" setTodos={setTodos} createTodo={createTodo} ></CreateTodoButton>
          </StyledFab>

          <Box sx={{ flexGrow: 1 }} />
          <TextField id="outlined-basic" label="search" variant="outlined" inputRef={searchBy} />
          <IconButton color="inherit" onClick={() => { getTodos() }} >
            <SearchIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
