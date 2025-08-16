import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutStriX from './pages/AboutStriX';
import Constellation from './pages/Constellation';
import LaunchMissions from './pages/LaunchMissions';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 pointer-events-none"></div>
        <div className="relative z-10">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/satellite-strix" element={<AboutStriX />} />
              <Route path="/constellation" element={<Constellation />} />
              <Route path="/launch-missions" element={<LaunchMissions />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;