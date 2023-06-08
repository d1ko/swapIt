import './App.css';
import { Routes, Route } from "react-router-dom";
import { Main, Auth } from './pages';

export const App = () => {
  return (
    <Routes>
            <Route path='/' element={<h1>main</h1>} />
            <Route path='/main' element={<Main />} />
            <Route path='/auth' element={<Auth />} />
    </Routes>
  );
}

