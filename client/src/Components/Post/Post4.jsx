// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function Post(props) {
//     const {post}=props
//     const {title,body}=post
//   return (
//     <Card sx={{ maxWidth: 345 }}>

//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//          {body}
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <Link to={`/post/${post._id}`} post={post}>
//         <Button size="small">learn more</Button>
//         </Link>
//       </CardActions>
//     </Card>
//   );
// }