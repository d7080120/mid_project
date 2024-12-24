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
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Todo(props) {
    const {title}=props
    const {body}=props
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
     
        <Typography variant="h5" component="div">
          {bull}{title}{bull}
        </Typography>
        <Typography variant="body2">
          {body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="s" endIcon={<CheckIcon />}>
        complete
      </Button>
      <IconButton aria-label="delete" size="large"color="error">
        <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large" color="primary" >
        <BorderColorRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
