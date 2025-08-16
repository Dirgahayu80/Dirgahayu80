import React from 'react';
import { Flag, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Sejarah', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Acara', href: '#events' },
    { name: 'Partisipasi', href: '#participation' }
  ];

  const eventLinks = [
    { name: 'Upacara Bendera', href: '#events' },
    { name: 'Lomba Merdeka', href: '#events' },
    { name: 'Festival Budaya', href: '#events' },
    { name: 'Pameran Sejarah', href: '#events' },
    { name: 'Workshop Kreativitas', href: '#events' },
    { name: 'Parade Kemerdekaan', href: '#events' }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://i.postimg.cc/zX5cwdjc/pngtree-official-logo-of-indonesian-independence-2025-ri-anniversary-80-vector-png-image-16402671.png" 
                alt="HUT RI 80 Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">HUT RI ke-80</h3>
                <p className="text-red-400 text-sm">Dirgahayu Indonesia</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Merayakan 80 tahun kemerdekaan Indonesia dengan semangat persatuan, 
              pertumbuhan, dan kreativitas bangsa. Bersatu, Tumbuh, Berkarya.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`bg-gray-800 p-3 rounded-full ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Acara Utama</h4>
            <ul className="space-y-3">
              {eventLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">
                    Istana Merdeka<br />
                    Jakarta Pusat 10110<br />
                    Indonesia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-red-500" size={18} />
                <p className="text-gray-300">+62 21 3846 8726</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-red-500" size={18} />
                <p className="text-gray-300">info@hutri80.go.id</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-yellow-400">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-red-500 text-white"
                />
                <button className="bg-red-600 px-4 py-2 rounded-r-lg hover:bg-red-700 transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <Flag className="text-red-500" size={18} />
              <span>
                © {currentYear} HUT RI ke-80. Hak cipta dilindungi Undang-Undang.
              </span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>

          {/* Patriotic Message */}
          <div className="text-center mt-8 py-6 border-t border-gray-800">
            <div className="flex items-center justify-center space-x-4 text-red-400">
              <Heart className="animate-pulse-custom" size={20} />
              <span className="text-lg font-semibold">
                Dirgahayu Republik Indonesia ke-80 - Bersatu, Tumbuh, Berkarya
              </span>
              <Heart className="animate-pulse-custom" size={20} />
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              Merdeka! Mari bersama membangun Indonesia yang lebih maju dan sejahtera
            </p>
          </div>

          {/* Government Partners */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 mb-4">Didukung oleh:</p>
            <div className="flex flex-wrap items-center justify-center space-x-8 text-xs text-gray-600">
              <span>Kementerian Komunikasi dan Informatika</span>
              <span>•</span>
              <span>Sekretariat Negara RI</span>
              <span>•</span>
              <span>Pemerintah Daerah Se-Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;