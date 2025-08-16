import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Calendar, MapPin, Target } from 'lucide-react';

const LaunchMissions = () => {
  const missions = [
    {
      name: 'StriX-α',
      patch: 'https://synspective.com/wp-content/uploads/2024/09/StriX-%CE%B1_patch.webp',
      status: 'Completed',
      description: 'First demonstration mission of the StriX technology platform'
    },
    {
      name: 'StriX-β',
      patch: 'https://synspective.com/wp-content/uploads/2024/09/StriX-b_patch.webp',
      status: 'Completed',
      description: 'Second validation mission with enhanced capabilities'
    },
    {
      name: 'StriX-1',
      patch: 'https://synspective.com/wp-content/uploads/2024/09/strix-1_patch.webp',
      status: 'Operational',
      description: 'First operational satellite of the commercial constellation'
    },
    {
      name: 'StriX-3',
      patch: 'https://synspective.com/wp-content/uploads/2024/09/strix-3_patch.webp',
      status: 'Operational',
      description: 'Third satellite continuing constellation deployment'
    },
    {
      name: 'StriX (Owl For One)',
      patch: 'https://synspective.com/wp-content/uploads/2024/10/Syns_5thStriX_OwlForOne_Patch_webimage_2.png',
      status: 'Latest Mission',
      description: 'Fifth StriX satellite with advanced imaging capabilities'
    }
  ];

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'Operational':
        return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'Latest Mission':
        return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
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
            Launch Missions
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Following the journey of StriX satellites from demonstration missions to 
            operational constellation deployment
          </motion.p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Mission Overview */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-cyan-400 mb-2">5</div>
              <div className="text-gray-300">Satellites Launched</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-gray-300">Operational</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-400 mb-2">2020s</div>
              <div className="text-gray-300">Mission Timeline</div>
            </div>
          </div>
        </motion.section>

        {/* Mission Patches */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Mission Patches</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={mission.patch}
                      alt={`${mission.name} Mission Patch`}
                      className="relative w-full h-48 object-contain rounded-xl"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{mission.name}</h3>
                  
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(mission.status)} mb-4`}>
                    {mission.status}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Timeline */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Mission Evolution</h2>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400 mb-4">Demonstration Phase</h3>
                <p className="text-gray-300 leading-relaxed">
                  StriX-α and StriX-β missions validated the core technology platform and proved 
                  the feasibility of small SAR satellites for commercial applications.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Operational Deployment</h3>
                <p className="text-gray-300 leading-relaxed">
                  StriX-1 and StriX-3 represent the transition to operational constellation, 
                  providing regular SAR imaging services for commercial and scientific applications.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Constellation Growth</h3>
                <p className="text-gray-300 leading-relaxed">
                  Latest missions like "Owl For One" continue expanding the constellation towards 
                  the goal of 30 satellites for comprehensive global coverage.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Future Missions */}
        <motion.section variants={itemVariants}>
          <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Future Mission Goals</h2>
            <p className="text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto mb-8">
              The StriX constellation will continue growing with regular launches throughout the 2020s, 
              working towards the ultimate goal of 30 operational satellites providing global Earth 
              observation capabilities for disaster response, climate monitoring, and environmental protection.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                <h4 className="text-xl font-bold text-cyan-400 mb-3">Target Constellation</h4>
                <p className="text-gray-300">30 satellites for comprehensive global coverage and frequent revisit times</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <h4 className="text-xl font-bold text-blue-400 mb-3">Mission Applications</h4>
                <p className="text-gray-300">Disaster response, climate monitoring, agriculture, and environmental protection</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default LaunchMissions;