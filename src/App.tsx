import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Machinery from './pages/Machinery';
import MachineryDetail from './pages/MachineryDetail';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/machinery/:id" element={<MachineryDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

