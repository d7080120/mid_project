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
import UpdatePostButton from './UpdatePostButton';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

export default function Post(props) {
  const { post, setPosts } = props
  const { title, body } = post
  const [bcolor, setbcolor] = useState("s")
  
  const updatePost = async () => {
    try{
    const res = await axios.put('http://localhost:1135/api/posts', post)
    if(res.status===200)
    setPosts(res.data)
  }
  catch(e){
    console.log(e);
  }
  }

  const deletePost = async () => {
    try{
      const res = await axios.delete(`http://localhost:1135/api/posts/${post._id}`)
      if (res.status===200)
      setPosts(res.data)
    }
    catch(e){
      console.log(e);
      if (e.status===400)
        setPosts([])
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
          {bull}{body}
        </Typography>
      </CardContent>
      <CardActions>
              <IconButton aria-label="delete" onClick={() => { deletePost() }} size="large" color="error">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large" color="primary" >
          {/* <BorderColorRoundedIcon /> */}
        <UpdatePostButton post={post} updatePost={updatePost}></UpdatePostButton>

        </IconButton>
      </CardActions>
    </Card>
  );
}
