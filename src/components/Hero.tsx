import React, { useState, useEffect } from 'react';
import { Play, Pause, Calendar, Clock, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-08-17T00:00:00+07:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {isVideoPlaying ? (
          <iframe
            src="https://www.youtube.com/embed/jNENSvVFsf4?autoplay=1&mute=1&loop=1&playlist=jNENSvVFsf4&controls=0&showinfo=0&rel=0&modestbranding=1"
            className="w-full h-full object-cover"
            style={{ minHeight: '100vh' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(216, 27, 27, 0.7), rgba(0, 0, 0, 0.5)), url('https://i.postimg.cc/bvM5QpCx/HUT-RI-80-Template-Web-Banner-1920x1080.jpg')`
            }}
          />
        )}
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/50 via-transparent to-black/70 z-10" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/20 rounded-full animate-float"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (Math.random() * 3 + 2) + 's'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="animate-fadeInUp">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="https://png.pngtree.com/png-clipart/20250602/original/pngtree-indonesian-independence-day-2025-greeting-card-with-80th-anniversary-logo-vector-png-image_21114474.png" 
              alt="Logo HUT RI 80" 
              className="mx-auto h-24 w-auto lg:h-32 animate-float"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Dirgahayu</span>
            <span className="block bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
              Republik Indonesia
            </span>
            <span className="block text-yellow-300 text-3xl lg:text-5xl mt-2">
              ke-80
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl mb-8 font-medium text-red-100">
            Bersatu • Tumbuh • Berkarya
          </p>
          
          <p className="text-lg lg:text-xl mb-12 text-gray-200 max-w-2xl mx-auto">
            17 Agustus 2025 - Mari rayakan kemerdekaan dengan semangat persatuan dan kebanggaan sebagai bangsa Indonesia
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/10 glass rounded-2xl p-6 lg:p-8 mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300 flex items-center justify-center">
              <Clock className="mr-2" size={28} />
              Hitung Mundur Hari Kemerdekaan
            </h3>
            <div className="grid grid-cols-4 gap-4 lg:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-red-600 rounded-xl p-4 lg:p-6 mb-2">
                    <div className="text-2xl lg:text-4xl font-bold">{value}</div>
                  </div>
                  <div className="text-sm lg:text-base font-medium text-gray-200 capitalize">
                    {unit === 'days' ? 'Hari' : 
                     unit === 'hours' ? 'Jam' : 
                     unit === 'minutes' ? 'Menit' : 'Detik'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <button
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="btn-primary flex items-center space-x-3 text-lg hover-lift"
            >
              {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
              <span>{isVideoPlaying ? 'Jeda Video' : 'Putar Video'}</span>
            </button>
            
            <a 
              href="#events" 
              className="btn-secondary flex items-center space-x-3 text-lg hover-lift"
            >
              <Calendar size={20} />
              <span>Lihat Acara</span>
            </a>
            
            <a 
              href="#participation" 
              className="btn-primary bg-yellow-600 hover:bg-yellow-500 flex items-center space-x-3 text-lg hover-lift"
            >
              <Users size={20} />
              <span>Ikut Berpartisipasi</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 text-sm lg:text-base text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-custom"></div>
              <span>80 Tahun Merdeka</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse-custom"></div>
              <span>17.000+ Pulau</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse-custom"></div>
              <span>270+ Juta Jiwa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse-custom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;