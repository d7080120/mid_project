import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Navbars from './Components/Navbars';
import Todos from './Components/Todo';
import Users from './Components/User/Users';
import UpdateUser from './Components/User/UpdateUser';



function App() {
  const user={
    title:"sssssss",
    tags:["dd","jj"]
  }
  return (
    <div className="App">
      <Navbars/>
      <UpdateUser user={user}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/login' element={<Login/>} /> */}
        <Route path='/todos' element={<Todos/>} />
        {/* { <Route path='/photo' element={<Photo/>} /> */}
        <Route path='/users' element={<Users/>} />
        {/* <Route path='/post' element={<Post/>} />  */}
        
=======
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

>>>>>>> 51abc03662a76c10b66fa9f9fb1cf441b6ce9e21
      </Routes>
    </div>
  );
}

export default App;
