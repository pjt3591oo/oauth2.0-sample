import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Main from '../pages/main';

const routes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  )
}

export default routes;