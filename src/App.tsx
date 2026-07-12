import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ResearchPage from './pages/ResearchPage';
import SupplyChainPage from './pages/SupplyChainPage';
import ITAIPage from './pages/ITAIPage';
import EventsPage from './pages/EventsPage';
import NourishPage from './pages/NourishPage';
import DesignPage from './pages/DesignPage';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/research" element={<ResearchPage />} />
        <Route path="/services/supply-chain" element={<SupplyChainPage />} />
        <Route path="/services/it-ai" element={<ITAIPage />} />
        <Route path="/services/events" element={<EventsPage />} />
        <Route path="/services/nourish" element={<NourishPage />} />
        <Route path="/services/design" element={<DesignPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;