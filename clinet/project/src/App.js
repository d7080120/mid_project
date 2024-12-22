import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbars/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/books' element={<Suspense fallback="loading..."><Books bookslist={bookslist}/></Suspense>} />
        <Route path='/book/:id' element={<Suspense fallback="loading..."><Book bookslist={bookslist}/></Suspense> } />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
