import Login from './page/login';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './page/signup';
import Post from './page/post';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/post' element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
