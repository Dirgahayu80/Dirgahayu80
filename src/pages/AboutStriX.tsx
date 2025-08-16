import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Zap, Satellite, Radio, Battery } from 'lucide-react';
import SpecificationTable from '../components/SpecificationTable';

const AboutStriX = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-20 pb-16"
    >
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            StriX Satellite
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Born from the Cabinet Office's R&D Initiatives - A revolutionary small SAR satellite 
            developed through Japan's ImPACT Program
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Origins Section */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Born from Innovation</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                StriX is a small, innovative, and low-cost Synthetic Aperture Radar (SAR) satellite that was 
                jointly developed by Synspective, the University of Tokyo, the Tokyo Institute of Technology, 
                and the Japan Aerospace Exploration Agency (JAXA).
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The technology originated from the Impulsing Paradigm Change through Disruptive Technologies 
                (ImPACT) Program, a Japanese government-led R&D initiative. The Council for Science, Technology, 
                and Innovation (CTSP), which oversees science and technology policies in Japan, initiated the ImPACT Program.
              </p>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Calendar size={20} />
                <span>Development: FY2015 - FY2019</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://synspective.com/wp-content/uploads/2024/10/strix_img01.png" 
                alt="StriX Satellite" 
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Inspired by Owl Section */}
        <motion.section variants={itemVariants} className="mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Inspired by the Owl: StriX</h2>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Synspective's StriX satellite draws its name from the owl's scientific name, 
                <strong className="text-cyan-400"> Strix Uralensis</strong>. Owls have highly developed 
                hearing and vision, allowing them to forage even in total darkness.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Being able to see at night is also an important feature of SAR satellites. The satellite's 
                extended antenna, reminiscent of bird wings, further underscores this connection to its namesake. 
                Often revered as a symbol of wisdom, the owl was also the sacred messenger of Athena, 
                the Greek Goddess of wisdom.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Specifications */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Technical Specifications</h2>
          <SpecificationTable />
        </motion.section>

        {/* Key Features */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Key Features</h2>
          
          <div className="space-y-16">
            {/* Miniaturization */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Satellite className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Miniaturizing for Large-Scale Production</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Synspective's StriX satellite is in the 100kg class and about 1/10 of a conventional large SAR satellite. 
                  It utilizes a foldable antenna design, which expands to a size equivalent to a 5m large satellite 
                  (deployable parallel-plate slot array antenna).
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Equipped with a high-output 1kW amplifier, it also features a balanced thermal control system. 
                  Its quality and stability reduces potential orbital failures, making it advantageous for stable 
                  production and operations.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <img 
                  src="https://synspective.com/wp-content/uploads/2024/10/strix_img01.png" 
                  alt="StriX Miniaturization" 
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Multi-point Imaging */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <img 
                  src="https://synspective.com/wp-content/uploads/2024/10/Frame-11155-1.png" 
                  alt="Wide Area Imaging" 
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <Battery className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Multi-point & Wide-area Imaging</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Wide-area imaging capabilities are crucial for routine monitoring and observations during disasters. 
                  StriX satellites, equipped with a high-output 1kW amplifier, have many solar cells and a 
                  corresponding high-capacity battery.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As a result, the observation width per scan is five to six times more expansive, leading to an 
                  observable area that is two to ten times larger than other satellites. This feature enables 
                  long-term and multi-point observations.
                </p>
              </div>
            </div>

            {/* Antenna Technology */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Radio className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Powerful Deployable Antenna</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  StriX is equipped with a deployable parallel plate slot array antenna, composed of seven 
                  independent panels. Before entering orbit, it measures approximately 80 cm on each side, 
                  forming a cube. After being placed into orbit, the folded panels then deploy in outer space.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The design of the antenna, especially the radio emission slots on its surface and its waveguides, 
                  requires detailed calculations related to the radio wave phase. However, once the design is set, 
                  the manufacturing and inspection processes are simplified.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <img 
                  src="https://synspective.com/wp-content/uploads/2024/09/about_strix_img03e.webp" 
                  alt="Manufacturing Process" 
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Production Goals */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Future Production Goals</h2>
            <p className="text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto">
              We are aiming to build a constellation of <strong className="text-cyan-400">30 small SAR satellites</strong> 
              by the latter half of the 2020s and are rapidly developing a system to manufacture these satellites at scale. 
              At Synspective, we have blended the expertise of space industry veterans with specialists from the aircraft, 
              automobile, and consumer electronics sectors.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AboutStriX;