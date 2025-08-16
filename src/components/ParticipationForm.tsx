import React, { useState, useRef } from 'react';
import { Send, Upload, X, Heart, Star, Camera, MapPin } from 'lucide-react';

const ParticipationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    message: '',
    email: ''
  });
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const cities = [
    'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Makassar', 'Palembang',
    'Yogyakarta', 'Semarang', 'Denpasar', 'Bandar Lampung', 'Padang',
    'Malang', 'Samarinda', 'Balikpapan', 'Pekanbaru', 'Manado', 'Lainnya'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Ukuran file terlalu besar. Maksimal 5MB.');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('File harus berupa gambar.');
        return;
      }

      setUploadedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', city: '', message: '', email: '' });
      setUploadedImage(null);
      setImagePreview(null);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  if (submitted) {
    return (
      <section id="participation" className="py-20 lg:py-32 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Terima Kasih! 🇮🇩
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ucapan kemerdekaan Anda telah berhasil dikirim dan akan ditampilkan setelah moderasi. 
                Mari bersama-sama rayakan HUT RI ke-80!
              </p>
              <div className="flex items-center justify-center space-x-4 text-red-600">
                <Heart className="animate-pulse-custom" size={24} />
                <span className="font-semibold">Dirgahayu Indonesia ke-80</span>
                <Heart className="animate-pulse-custom" size={24} />
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 btn-primary"
              >
                Kirim Ucapan Lain
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="participation" className="py-20 lg:py-32 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Heart className="text-red-600" size={32} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kirim Ucapan Kemerdekaan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bagikan semangat dan harapan Anda untuk Indonesia di HUT ke-80 ini. 
            Ucapan Anda akan menjadi bagian dari galeri digital kemerdekaan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                    Nama Lengkap <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 text-gray-900"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                {/* City Field */}
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-900 mb-3">
                    Kota/Daerah <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 text-gray-900"
                  >
                    <option value="">Pilih kota/daerah Anda</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                    Email (Opsional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 text-gray-900"
                    placeholder="email@contoh.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-3">
                    Pesan Kemerdekaan <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-200 text-gray-900 resize-none"
                    placeholder="Bagikan harapan, doa, atau semangat Anda untuk Indonesia di HUT ke-80 ini..."
                  />
                  <div className="text-right mt-2 text-sm text-gray-500">
                    {formData.message.length}/500 karakter
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Upload Foto (Opsional)
                  </label>
                  
                  {!imagePreview ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-red-400 hover:bg-red-50 transition-all duration-200"
                    >
                      <Camera className="mx-auto text-gray-400 mb-3" size={48} />
                      <p className="text-gray-600 font-medium mb-2">
                        Klik untuk upload foto
                      </p>
                      <p className="text-sm text-gray-500">
                        JPG, PNG, atau GIF (Maksimal 5MB)
                      </p>
                    </div>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.city || !formData.message}
                  className={`w-full flex items-center justify-center space-x-3 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    isSubmitting || !formData.name || !formData.city || !formData.message
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner w-5 h-5"></div>
                      <span>Mengirim Ucapan...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Kirim Ucapan Kemerdekaan</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              {/* Guidelines */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Star className="text-yellow-500 mr-2" size={24} />
                  Panduan Pengiriman
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Tulis pesan yang positif dan membangun semangat kemerdekaan</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Sertakan harapan atau doa untuk Indonesia ke depan</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Foto yang diunggah akan dimoderasi sebelum tampil</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Hindari konten yang bersifat SARA atau negatif</span>
                  </li>
                </ul>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Partisipasi Masyarakat</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">15.847</div>
                    <div className="text-sm text-red-200">Ucapan Terkirim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">34</div>
                    <div className="text-sm text-red-200">Provinsi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">8.921</div>
                    <div className="text-sm text-red-200">Foto Dibagikan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">512</div>
                    <div className="text-sm text-red-200">Kota</div>
                  </div>
                </div>
              </div>

              {/* Social Sharing */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bagikan Semangat</h3>
                <p className="text-gray-600 mb-4">
                  Ajak teman dan keluarga untuk ikut merayakan HUT RI ke-80!
                </p>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Facebook
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm">
                    WhatsApp
                  </button>
                  <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                    X (Twitter)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationForm;