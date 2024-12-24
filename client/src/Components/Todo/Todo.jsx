import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useState } from "react"
import axios from 'axios'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import UpdateTodoButton from './UpdateTodoButton';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Todo(props) {
  const { todo, setTodos } = props
  const { title, tags, completed } = todo
  const [bcolor, setbcolor] = useState("s")
  useEffect(() => {
    if (completed === true) {
      setbcolor("success")
    }
    else
    setbcolor("s")
  })

  const updateTodo = async () => {
    try{
    const res = await axios.put('http://localhost:1135/api/todos', todo)
    if(res.status===200)
    setTodos(res.data)
  }
  catch(e){
    console.log(e);
  }
  }

  const completeTodo = () => {
    setbcolor("success")
    todo.completed = true
    updateTodo()
  }

  const deleteTodo = async () => {
    try{
      const res = await axios.delete(`http://localhost:1135/api/todos/${todo._id}`)
      if (res.status===200)
      setTodos(res.data)
    }
    catch(e){
      console.log(e);
      if (e.status===400)
        setTodos([])
    }
    
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>


        <Typography variant="body2" fontSize={"large"}>
          {title}
          <br />
        </Typography>
        <Typography variant="h5" component="div" fontSize={"small"}>
          {bull}{tags.map(t => { return (<>{t}{bull}</>) })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => { completeTodo() }} variant="contained" color={bcolor} endIcon={<CheckIcon />}>
          Complete
        </Button>
        <IconButton aria-label="delete" onClick={() => { deleteTodo() }} size="large" color="error">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large" color="primary" >
          {/* <BorderColorRoundedIcon /> */}
        <UpdateTodoButton todo={todo} updateTodo={updateTodo}></UpdateTodoButton>

        </IconButton>
      </CardActions>
    </Card>
  );
}
