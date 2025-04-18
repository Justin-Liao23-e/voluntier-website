import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import BetaSignup from './pages/BetaSignup';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/beta" element={<BetaSignup />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
