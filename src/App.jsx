import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/layouts/layouts';
import {
  Dashboard,
  Stats,
  Categories,
  Settings,
  Login,
  Register,
} from '@/pages/index';

const user = false;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={user ? <Layout /> : <Navigate to="/login" replace />}>
          <Route index element={<Dashboard />} />
          <Route path="stats" element={<Stats />} />
          <Route path="categories" element={<Categories />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
