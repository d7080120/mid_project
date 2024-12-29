import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Navbars from './Components/Navbars';
import Todos from './Components/Todo/Todos';
import Posts from './Components/Post/Posts';

import Users from './Components/User/Users';



function App() {
  const user={
    title:"sssssss",
    tags:["dd","jj"]
  }
  return (
    <div className="App">
      <Navbars/>
      <Routes>      
        {/* <UpdateUser user={user}/> */}

        <Route path='/' element={<Home/>} />
        <Route path='/todos' element={<Todos/>} />
        <Route path='/posts' element={<Posts/>} />
        {/* <Route path='/post/:_id' element={<Post post={post}/>} /> */}

        <Route path='/users' element={<Users/>} />
        
{/* =======
import Navbars from './Components/Navbars';
import Todos from './Components/Todo/Todos';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbars/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todos' element={<Todos/>} />
        {/* <Route path='/posts' element={<Posts/>} />
        <Route path='/photos' element={<Photos/>} />
        <Route path='/users' element={<Users/>} /> */}

{/* >>>>>>> 51abc03662a76c10b66fa9f9fb1cf441b6ce9e21 */} 
      </Routes>
    </div>
  );
}

export default App;
