import Post from "./Post"
import { useEffect, useState } from "react"
import axios from 'axios'

// const Posts=()=>{
//     const [posts,setPosts]=useState([])
//     const getPosts=async()=>{
//         try{
//             const res=await axios.get('http://localhost:1135/api/posts')
//             if(res.status===200){
//                 console.log(res.data);
//                 setPosts(res.data)
//             }       
//         }
//         catch(e){
//             console.log(e);
//         }
//     }
//     useEffect(()=>{getPosts()},[])
//     return(<>
//         {posts.map(t=>{ console.log(t) ;return(<Post post={t} setPosts={setPosts}></Post>)})}
//     </>)
// }
// export default Posts
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
import CreatePostButton from "./CreatePostButton";



const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    try {
      const res = await axios.get('http://localhost:1135/api/posts')
      if (res.status === 200) {
        console.log(res.data);
        setPosts(res.data)
      }
    }
    catch (e) {
      if (e.status === 400) {
        setPosts([])
      }
      console.log(e);
    }
  }
  useEffect(() => { getPosts() }, [])
  const createPost = async (post) => {
    try {
      const res = await axios.post('http://localhost:1135/api/posts', post)
      if (res.status === 201)
        setPosts(res.data.post)
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
          Posts
        </Typography>
        {posts.map(t => { return (<Post post={t} setPosts={setPosts}></Post>) })}
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <CreatePostButton color="secondary" aria-label="add" setPosts={setPosts} createPost={createPost} ></CreatePostButton>
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
