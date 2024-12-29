import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Settings from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function UpdateUser(props) {
  const {setUsersData}=props
  
  // const {handleCloseu}=props

  const [open, setOpen] = React.useState(false);
    const {user}=props
    const {name,username,phone,address,email}=user
    console.log(user.name)
    // const stringTags=tags.join()
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const setting=()=>{
  //   // handleClose()
  //   updateUser()
  // }
  const updateUserDB = async (user) => {
        try{
      const res = await axios.put('http://localhost:1135/api/users',user)
      if(res.status===200){
          setUsersData(res.data)
      }
  }
  catch(err){
      console.log(err.message)
      console.log(err.status)
  }
  }
  // const save=()=>{
  //   handleClose()

  // }
  return (
    <React.Fragment>
      <Button  onClick={handleClickOpen} style={{Margin:120}}>
      {/* <BorderColorRoundedIcon /> */}
      {/* <MenuItem onClick={setting}>  */}
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          {/* Settings */}
      {/* </MenuItem> */}
      

      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            console.log("formJson.name");

            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const phone = formJson.phone;
            const address = formJson.address;
            const email = formJson.email;
            const username = formJson.username;
            const name=formJson.name
            user.name=name
            user.email=email
            user.username=username
            user.address=address
            user.phone = phone
            updateUserDB(user)
            handleClose();
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          update {name}
        </DialogTitle>
        <TextField
          id="username"
          label="username"
          defaultValue={username}
          variant="filled"
           type='username'
          name='username'
          required='true'
        />
        <TextField
          id="name"
          label="Name"
          defaultValue={name}
          variant="filled"
           type='name'
          name='name'
        />
             <TextField
          id="phone"
          label="Phone"
          defaultValue={phone}
          variant="filled"
           type='phone'
          name='phone'
        />
              <TextField
          id="email"
          label="email"
          defaultValue={email}
          variant="filled"
           type='email'
          name='email'
        />
              <TextField
          id="address"
          label="address"
          defaultValue={address}
          variant="filled"
           type='address'
          name='address'
        />
         
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}>
          {/* // size="small"
          // sx={{ ml: 2 }}
          // aria-controls={open ? 'account-menu' : undefined}
          // aria-haspopup="true"
          // aria-expanded={open ? 'true' : undefined} */}
        
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        </DialogContent>
        <DialogActions>
          <Button type="submit" >
            Save changes
          </Button>
        </DialogActions>
        </Dialog>
      </BootstrapDialog>
    </React.Fragment>
  );
}
