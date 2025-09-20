import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/layouts';
import { Dashboard, Stats, Categories, Settings } from './pages/index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="stats" element={<Stats />} />
          <Route path="categories" element={<Categories />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
