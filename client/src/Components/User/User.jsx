import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import UpdateUser from './UpdateUser';



export default function User(props) {
    const {user}=props
    const {setUsersData}=props
    const userq={
      title:"sssssss",
      tags:["dd","jj"]
    }
    console.log()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };
  const deleteUsers = async () => {
    const Id = user._id
    try{
        const res = await axios.delete(`http://localhost:1135/api/users/${Id}`)
    console.log(Id)

        if(res.status===200){
            setUsersData(res.data)

        }
    }
    
    catch(err){
        console.log(err.message)
        console.log(err.status)

        if (err.status===400)
            setUsersData([])
    }
}
const updateUser = async () => {
  const objUser = {
      email: "ccc@gmail.com",
      name: "ccc",
      phone: "0583271152",
      username: "ccc1152",
      _id:"675727cec84cae9608d85008"
  }
  try{
    const res = await axios.put('http://localhost:1135/api/users',objUser)
    if(res.status===200){
        setUsersData(res.data)
    }
}
catch(err){
    console.log(err.message)
    console.log(err.status)
}
}
  const deleteUser = () => {
    handleClose()
    deleteUsers()

  };
  const setting=()=>{
    // handleClose()
    // updateUser()
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{user.name[0].toUpperCase()}</Avatar>
          </IconButton>
        </Tooltip>
        <Typography sx={{ minWidth: 100 }}>{user.name}</Typography>
        {/* <Typography sx={{ minWidth: 100 }}></Typography> */}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={setting}>
        
        
        <ListItemIcon>
            {/* <Settings fontSize="small" /> */}
            <UpdateUser user={user}/>
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={deleteUser}>
          <ListItemIcon>
        <DeleteIcon  fontSize="small"  color="default"/>
          </ListItemIcon>
          delete
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

// const User=()=>{
//     return(  
//     <>
 
//   home!
//     </>
//     )

// }
// export default User