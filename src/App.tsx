import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TeamMemberDetailPage from './pages/TeamMemberDetailPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
          <Route path="/team/:slug" element={<TeamMemberDetailPage />} />
    </Routes>
  );
}
