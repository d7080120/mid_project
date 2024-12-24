import logo from './logo.svg';
import './App.css';
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

      </Routes>
    </div>
  );
}

export default App;
