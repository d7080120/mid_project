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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function UpdateTodoButton(props) {
  const [open, setOpen] = React.useState(false);
  const { todo } = props
  const { updateTodo } = props
  const { title, tags } = todo
  const stringTags = tags.join()
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (save) => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={() => { handleClickOpen() }} style={{ Margin: 120 }}>
        <BorderColorRoundedIcon />
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
              const tags = formJson.tags
              const newTags = tags.split(',');
              todo.tags = newTags
              todo.title = title
              updateTodo(todo)
              handleClose();
            },
          }}
        >
          <DialogTitle
            sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            update {title}
          </DialogTitle>
          <TextField
            // onChange={()=>{setT(value)}}
            // value={newTitle}
            // ref={newTitle}
            id="title"
            label="Title"
            defaultValue={title}
            // value={newTitle}
            variant="filled"
            autoFocus
            type='title'
            name='title'
          />
          <TextField
            id="tags"
            label="Tags"
            defaultValue={stringTags}
            variant="filled"
            type='tags'
            name='tags'
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
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </BootstrapDialog>
    </React.Fragment>
  );
}
