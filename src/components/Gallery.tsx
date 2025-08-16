import React, { useState, useEffect } from 'react';
import { Image, Play, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const photos = [
    {
      src: 'https://i.postimg.cc/zX5cwdjc/pngtree-official-logo-of-indonesian-independence-2025-ri-anniversary-80-vector-png-image-16402671.png',
      alt: 'Logo Resmi HUT RI ke-80',
      category: 'Logo & Brand'
    },
    {
      src: 'https://png.pngtree.com/png-clipart/20250602/original/pngtree-indonesian-independence-day-2025-greeting-card-with-80th-anniversary-logo-vector-png-image_21114474.png',
      alt: 'Logo HUT RI 80 Resmi Presiden Prabowo',
      category: 'Logo & Brand'
    },
    {
      src: 'https://i.postimg.cc/6qx1mzNT/pngtree-happy-indonesian-independence-day-2025-ri-80th-anniversary-vector-png-image-16283725.png',
      alt: 'Happy Indonesian Independence Day 2025',
      category: 'Design & Artwork'
    },
    {
      src: 'https://i.postimg.cc/cHnbh22V/logo-hut-ri-2025-1753336329493-169.jpg',
      alt: 'Logo HUT RI 2025',
      category: 'Logo & Brand'
    },
    {
      src: 'https://i.postimg.cc/bvM5QpCx/HUT-RI-80-Template-Web-Banner-1920x1080.jpg',
      alt: 'HUT RI 80 Web Banner Template',
      category: 'Banner & Template'
    },
    {
      src: 'https://i.postimg.cc/Gp9N8HQ3/HUTRI80-Lapisan-2.png',
      alt: 'HUTRI 80 Design Layer 2',
      category: 'Design & Artwork'
    }
  ];

  const videos = [
    {
      id: 'jNENSvVFsf4',
      title: 'Video Resmi HUT RI ke-80',
      description: 'Video perayaan kemerdekaan Indonesia yang ke-80',
      thumbnail: 'https://img.youtube.com/vi/jNENSvVFsf4/maxresdefault.jpg'
    }
  ];

  const categories = ['Semua', 'Logo & Brand', 'Design & Artwork', 'Banner & Template'];
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredPhotos = activeCategory === 'Semua' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Image className="text-red-600" size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Galeri HUT RI ke-80
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kumpulan foto, video, dan desain resmi perayaan HUT RI ke-80 
            untuk digunakan dan dibagikan dalam semangat kemerdekaan
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-200 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="bg-gray-100 rounded-2xl p-2">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'photos'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              Foto & Desain
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'videos'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              Video
            </button>
          </div>
        </div>

        {/* Photo Gallery */}
        {activeTab === 'photos' && (
          <>
            {/* Category Filter */}
            <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Photos Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-600 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              {filteredPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="group cursor-pointer hover-lift"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white rounded-full p-3">
                          <Image className="text-gray-900" size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold mb-1">{photo.alt}</h3>
                      <p className="text-sm text-gray-200">{photo.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Video Gallery */}
        {activeTab === 'videos' && (
          <div className={`transition-all duration-700 delay-600 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {videos.map((video, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                  <div className="relative">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        className="w-full h-64 lg:h-80"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {video.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-red-600">
                        <Play size={16} className="mr-1" />
                        Putar Video
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className={`text-center transition-all duration-700 delay-800 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bagikan Semangat Kemerdekaan
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Unduh dan bagikan aset resmi HUT RI ke-80 untuk merayakan kemerdekaan bersama. 
              Mari sebarkan semangat patriotisme di media sosial!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#participation" 
                className="btn-primary"
              >
                Kirim Foto Anda
              </a>
              <button className="btn-secondary flex items-center space-x-2">
                <Download size={18} />
                <span>Unduh Semua Aset</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors z-10"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-4xl max-h-full">
            <img
              src={filteredPhotos[currentImage]?.src}
              alt={filteredPhotos[currentImage]?.alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold mb-2">
                {filteredPhotos[currentImage]?.alt}
              </h3>
              <p className="text-gray-300">
                {filteredPhotos[currentImage]?.category} • {currentImage + 1} dari {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;