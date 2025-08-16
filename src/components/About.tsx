import React, { useState, useEffect, useRef } from 'react';
import { Flag, Heart, Star, Award } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Flag, number: '80', label: 'Tahun Merdeka', color: 'text-red-600' },
    { icon: Heart, number: '270+', label: 'Juta Jiwa', color: 'text-red-500' },
    { icon: Star, number: '17.000+', label: 'Pulau', color: 'text-yellow-600' },
    { icon: Award, number: '34', label: 'Provinsi', color: 'text-green-600' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <Flag className="text-red-600" size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              80 Tahun Indonesia Merdeka
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Merayakan perjalanan panjang bangsa Indonesia menuju kemerdekaan dan kemajuan. 
              Dari proklamasi 17 Agustus 1945 hingga kini, Indonesia terus tumbuh dan berkarya.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full mr-3"></div>
                  Semangat Kemerdekaan
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pada tanggal 17 Agustus 1945, Ir. Soekarno dan Drs. Mohammad Hatta memproklamasikan 
                  kemerdekaan Indonesia. Moment bersejarah ini menandai lahirnya Negara Kesatuan Republik Indonesia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Kini, 80 tahun kemudian, Indonesia telah berkembang menjadi negara demokratis yang kuat, 
                  dengan kekayaan budaya, sumber daya alam, dan sumber daya manusia yang luar biasa.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full mr-3"></div>
                  Visi 2025
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  HUT RI ke-80 mengusung tema <strong>"Bersatu, Tumbuh, Berkarya"</strong> sebagai 
                  refleksi semangat gotong royong, inovasi, dan kreativitas bangsa Indonesia dalam 
                  menghadapi tantangan masa depan dan membangun negeri yang lebih maju.
                </p>
              </div>
            </div>

            {/* Right Content - Images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift">
                  <img 
                    src="https://i.postimg.cc/6qx1mzNT/pngtree-happy-indonesian-independence-day-2025-ri-80th-anniversary-vector-png-image-16283725.png" 
                    alt="HUT RI 80 Design" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/50 to-transparent"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift">
                  <img 
                    src="https://i.postimg.cc/cHnbh22V/logo-hut-ri-2025-1753336329493-169.jpg" 
                    alt="Logo HUT RI 2025" 
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="mt-12">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift">
                  <img 
                    src="https://i.postimg.cc/Gp9N8HQ3/HUTRI80-Lapisan-2.png" 
                    alt="HUTRI 80 Design" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center bg-white rounded-2xl p-8 shadow-lg hover-lift transition-all duration-300 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  stat.color === 'text-red-600' ? 'bg-red-100' :
                  stat.color === 'text-red-500' ? 'bg-red-50' :
                  stat.color === 'text-yellow-600' ? 'bg-yellow-100' :
                  'bg-green-100'
                }`}>
                  <stat.icon className={stat.color} size={32} />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Mari Bersama Rayakan Kemerdekaan
              </h3>
              <p className="text-xl mb-8 text-red-100">
                Bergabunglah dengan jutaan rakyat Indonesia dalam merayakan HUT RI ke-80
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#events" 
                  className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Lihat Agenda Acara
                </a>
                <a 
                  href="#participation" 
                  className="bg-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Kirim Ucapan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;