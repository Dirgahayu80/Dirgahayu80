import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Events from './components/Events';
import ParticipationForm from './components/ParticipationForm';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Gallery />
      <Events />
      <ParticipationForm />
      <Footer />
      <AudioPlayer />
    </div>
  );
}

export default App;