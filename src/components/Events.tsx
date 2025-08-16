import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Plus, Filter, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedCity, setSelectedCity] = useState('Semua Kota');
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['Semua', 'Upacara', 'Lomba', 'Pertunjukan', 'Pameran', 'Workshop'];
  const cities = ['Semua Kota', 'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Makassar', 'Yogyakarta'];

  const events = [
    {
      id: 1,
      title: 'Upacara Bendera HUT RI ke-80',
      date: '2025-08-17',
      time: '07:00 WIB',
      location: 'Istana Merdeka, Jakarta',
      city: 'Jakarta',
      category: 'Upacara',
      description: 'Upacara bendera resmi memperingati HUT RI ke-80 yang dipimpin langsung oleh Presiden RI.',
      capacity: 500,
      registered: 245,
      image: 'https://cdn1.katadata.co.id/media/images/thumb/2024/08/15/doa_upacara_17_Agustus_2024_HUT_RI_ke-79-2024_08_15-13_06_51_78306a3af5a8b77082a856a74a1f728e_960x640_thumb.jpg?w=500',
      status: 'Tersedia'
    },
    {
      id: 2,
      title: 'Lomba Merdeka Virtual Se-Indonesia',
      date: '2025-08-15',
      time: '13:00 WIB',
      location: 'Platform Online',
      city: 'Jakarta',
      category: 'Lomba',
      description: 'Lomba virtual meliputi: lomba foto, video kreativitas, dan desain poster kemerdekaan.',
      capacity: 10000,
      registered: 7543,
      image: 'https://www.ancol.com/shared//file-manager/Event%20Banner/Agustus%202025/WEB--merdekaria.jpg?w=500',
      status: 'Tersedia'
    },
    {
      id: 3,
      title: 'Festival Seni Budaya Nusantara',
      date: '2025-08-16',
      time: '15:00 WIB',
      location: 'Taman Mini Indonesia Indah',
      city: 'Jakarta',
      category: 'Pertunjukan',
      description: 'Pertunjukan seni tradisional dari berbagai daerah di Indonesia menampilkan keragaman budaya.',
      capacity: 2000,
      registered: 1456,
      image: 'https://iaimlumajang.ac.id/wp-content/uploads/2024/07/Budaya-Indonesia.png',
      status: 'Tersedia'
    },
    {
      id: 4,
      title: 'Pameran Sejarah Kemerdekaan',
      date: '2025-08-14',
      time: '09:00 WIB',
      location: 'Museum Nasional',
      city: 'Jakarta',
      category: 'Pameran',
      description: 'Pameran koleksi bersejarah tentang perjuangan kemerdekaan dan perkembangan Indonesia.',
      capacity: 800,
      registered: 234,
      image: 'https://static.republika.co.id/uploads/images/inpicture_slide/190809140214-282.jpg',
      status: 'Tersedia'
    },
    {
      id: 5,
      title: 'Workshop Kreativitas Anak Bangsa',
      date: '2025-08-13',
      time: '10:00 WIB',
      location: 'Gedung Serbaguna Pemuda',
      city: 'Bandung',
      category: 'Workshop',
      description: 'Workshop untuk mengembangkan kreativitas pemuda dalam berbagai bidang seni dan teknologi.',
      capacity: 150,
      registered: 89,
      image: 'https://cdn.medcom.id/dynamic/content/2025/07/23/1770277/K69homjC1l.jpg?w=480',
      status: 'Tersedia'
    },
    {
      id: 6,
      title: 'Parade Kemerdekaan Surabaya',
      date: '2025-08-17',
      time: '08:00 WIB',
      location: 'Jalan Tunjungan, Surabaya',
      city: 'Surabaya',
      category: 'Pertunjukan',
      description: 'Parade besar-besaran melibatkan seluruh elemen masyarakat Surabaya dalam kostum tradisional.',
      capacity: 5000,
      registered: 3210,
      image: 'https://cakrawalanews.co/wp-content/uploads/2025/08/HUT-RI-80-Template-Web-Banner-1920x1080-1.jpg',
      status: 'Tersedia'
    }
  ];

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === 'Semua' || event.category === selectedCategory;
    const cityMatch = selectedCity === 'Semua Kota' || event.city === selectedCity;
    return categoryMatch && cityMatch;
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const addToCalendar = (event: typeof events[0]) => {
    const startDate = new Date(`${event.date} ${event.time.split(' ')[0]}`);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="events" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Calendar className="text-red-600" size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Agenda Acara HUT RI ke-80
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jangan lewatkan berbagai acara menarik dalam rangka memperingati HUT RI ke-80. 
            Daftarkan diri Anda dan rayakan kemerdekaan bersama!
          </p>
        </div>

        {/* Filters */}
        <div className={`bg-white rounded-2xl p-6 shadow-lg mb-12 transition-all duration-700 delay-200 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex items-center mb-4">
            <Filter className="text-red-600 mr-2" size={20} />
            <h3 className="text-lg font-semibold text-gray-900">Filter Acara</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Kategori</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Kota</label>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCity === city
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-400 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.category === 'Upacara' ? 'bg-red-600 text-white' :
                    event.category === 'Lomba' ? 'bg-blue-600 text-white' :
                    event.category === 'Pertunjukan' ? 'bg-green-600 text-white' :
                    event.category === 'Pameran' ? 'bg-yellow-600 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 px-2 py-1 rounded-full text-xs font-medium text-gray-900">
                    {event.status}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2 text-red-600" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2 text-red-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2 text-red-600" />
                    <span className="text-sm line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-2 text-red-600" />
                    <span className="text-sm">
                      {event.registered.toLocaleString()} / {event.capacity.toLocaleString()} peserta
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-6 line-clamp-3">
                  {event.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Pendaftar</span>
                    <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((event.registered / event.capacity) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 btn-primary text-sm py-2">
                    <Plus size={14} className="mr-1" />
                    
                  </button>
                  <button
                    onClick={() => addToCalendar(event)}
                    className="btn-secondary text-sm py-2 px-4"
                    title="Tambah ke Kalender"
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tidak Ada Acara</h3>
            <p className="text-gray-600 mb-6">
              Tidak ada acara yang sesuai dengan filter yang dipilih. Coba ubah filter atau periksa kembali nanti.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setSelectedCity('Semua Kota');
              }}
              className="btn-primary"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className={`text-center transition-all duration-700 delay-600 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Jadilah Bagian dari Sejarah
            </h3>
            <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
              Bergabunglah dengan jutaan rakyat Indonesia dalam merayakan HUT RI ke-80. 
              Daftarkan diri Anda sekarang!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#participation" 
                className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Daftar Event
              </a>
              <button className="bg-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors">
                Buat Event Komunitas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;