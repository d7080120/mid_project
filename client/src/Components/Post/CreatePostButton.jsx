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


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CreatePostButton(props) {

  const [open, setOpen] = React.useState(false);
  const { setPosts } = props
  const { createPost } = props
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (save) => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button onClick={() => { handleClickOpen() }} style={{ Margin: 120 }}>
        <AddIcon style={{ color: "white" }} />
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
              const title = formJson.title;
              const body = formJson.body
              const post = {
                body: body,
                title: title
              }

              createPost(post)
              handleClose();
            },
          }}
        >
          <DialogTitle
            sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Create new post
          </DialogTitle>
          <TextField
            // onChange={()=>{setT(value)}}
            // value={newTitle}
            // ref={newTitle}
            id="title"
            label="Title"
            defaultValue=''
            // value={newTitle}
            variant="filled"
            autoFocus
            type='title'
            name='title'
          />
          {/* <TextField
            id="body"
            label="Body"
            defaultValue=''
            variant="filled"
            type='body'
            name='body'
          /> */}
          <TextField
            id="body"
            label="Body"
            multiline
            maxRows={4}
            variant="filled"
            type='body'
            name='body'
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
            <Button type="submit" autoFocus onClick={() => { handleClose() }}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </BootstrapDialog>
    </React.Fragment>
  );
}
