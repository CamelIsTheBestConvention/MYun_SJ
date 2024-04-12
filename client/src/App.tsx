import Login from './page/login';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './page/signup';
import Post from './page/post';
import Main from './page/main';
import Write from './page/write';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          {/* <Route path='/main' element={<Main />}></Route> */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/post' element={<Post />}></Route>
          <Route path='/write' element={<Write />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
