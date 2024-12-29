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
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
import { useEffect, useState } from "react"
import PersonAdd from '@mui/icons-material/PersonAdd';
import ListItemIcon from '@mui/material/ListItemIcon';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CreateUserButton(props) {

  const [open, setOpen] = React.useState(false);
  const { createUser } = props

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (save) => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button onClick={() => { handleClickOpen() }} style={{ Margin: 120 }}>
        {/* <AddIcon style={{ color: "white" }} /> */}
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
      </Button>
      <BootstrapDialog
        onClose={() => { handleClose() }}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Dialog
          open={open}
          onClose={() => { handleClose() }}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const phone = formJson.phone;
              const address = formJson.address;
              const email = formJson.email;
              const username = formJson.username;
              const name = formJson.name
              const user = {
                name,
                email,
                username,
                address,
                phone
              }
              if(!username||username==='')return
              createUser(user)
              handleClose();
            },
          }}
        >
          <DialogTitle
            sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Create new user
          </DialogTitle>
          <TextField
          id="username"
          label="username"
          defaultValue={''}
          variant="filled"
           type='username'
          name='username'
          required='true'
          
        />
          <TextField
          id="name"
          label="Name"
          defaultValue={''}
          variant="filled"
           type='name'
          name='name'
        />
             <TextField
          id="phone"
          label="Phone"
          defaultValue={''}
          variant="filled"
           type='phone'
          name='phone'
        />
              <TextField
          id="email"
          label="email"
          defaultValue={''}
          variant="filled"
           type='email'
          name='email'
        />
              <TextField
          id="address"
          label="address"
          defaultValue={''}
          variant="filled"
           type='address'
          name='address'
        />
         
          <IconButton
            aria-label="close"
            onClick={() => { handleClose() }}

            // onClick={handleClose}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
          </DialogContent>
          <DialogActions>
            <Button type="submit" >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </BootstrapDialog>
    </React.Fragment>
  );
}
