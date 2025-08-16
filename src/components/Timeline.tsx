import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Flag, Users, Trophy, Zap, Target } from 'lucide-react';

const Timeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    {
      year: '1945',
      date: '17 Agustus',
      title: 'Proklamasi Kemerdekaan',
      description: 'Ir. Soekarno dan Drs. Mohammad Hatta memproklamasikan kemerdekaan Indonesia',
      icon: Flag,
      color: 'red'
    },
    {
      year: '1950',
      date: '17 Agustus',
      title: 'Negara Kesatuan RI',
      description: 'Pembentukan Negara Kesatuan Republik Indonesia yang kokoh',
      icon: Users,
      color: 'blue'
    },
    {
      year: '1998',
      date: 'Era Reformasi',
      title: 'Reformasi Indonesia',
      description: 'Dimulainya era reformasi dan demokratisasi di Indonesia',
      icon: Zap,
      color: 'yellow'
    },
    {
      year: '2020',
      date: '75 Tahun',
      title: 'HUT RI ke-75',
      description: 'Perayaan kemerdekaan dengan semangat persatuan di masa pandemi',
      icon: Trophy,
      color: 'green'
    },
    {
      year: '2025',
      date: '17 Agustus',
      title: 'HUT RI ke-80',
      description: 'Merayakan 80 tahun kemerdekaan dengan tema "Bersatu, Tumbuh, Berkarya"',
      icon: Target,
      color: 'purple'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'bg-red-600 text-red-600 border-red-200',
      blue: 'bg-blue-600 text-blue-600 border-blue-200',
      yellow: 'bg-yellow-600 text-yellow-600 border-yellow-200',
      green: 'bg-green-600 text-green-600 border-green-200',
      purple: 'bg-purple-600 text-purple-600 border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  return (
    <section id="timeline" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Calendar className="text-red-600" size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perjalanan Sejarah Indonesia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Melihat kembali momen-momen bersejarah dalam perjalanan 80 tahun kemerdekaan Indonesia
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 via-blue-500 to-purple-600 rounded-full"></div>

          {timelineEvents.map((event, index) => {
            const isVisible = visibleItems.includes(index);
            const isLeft = index % 2 === 0;
            const colorClasses = getColorClasses(event.color);

            return (
              <div
                key={index}
                className={`timeline-item relative flex items-center ${
                  isLeft ? 'justify-start' : 'justify-end'
                } mb-16`}
                data-index={index}
              >
                {/* Content */}
                <div
                  className={`w-full lg:w-5/12 transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
                >
                  <div className={`bg-white rounded-2xl p-8 shadow-lg hover-lift ${
                    isLeft ? 'lg:mr-8' : 'lg:ml-8'
                  }`}>
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      colorClasses.split(' ')[0]
                    } bg-opacity-10`}>
                      <event.icon className={colorClasses.split(' ')[1]} size={24} />
                    </div>

                    {/* Year Badge */}
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                      colorClasses.split(' ')[0]
                    } text-white`}>
                      {event.year}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-red-600 font-medium mb-4">
                      {event.date}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                    isVisible
                      ? `${colorClasses.split(' ')[0]} scale-110`
                      : 'bg-gray-300 scale-100'
                  }`}
                  style={{ zIndex: 10 }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mari Ciptakan Sejarah Baru
            </h3>
            <p className="text-gray-600 mb-6">
              HUT RI ke-80 adalah momentum untuk Indonesia yang lebih maju dan bersatu
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#events" 
                className="btn-primary"
              >
                Ikuti Acara Perayaan
              </a>
              <a 
                href="#gallery" 
                className="btn-secondary"
              >
                Lihat Galeri
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;