import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbars/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
