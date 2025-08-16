import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Satellite, Eye, Shield } from 'lucide-react';

const Constellation = () => {
  const benefits = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Enhanced Disaster Response",
      description: "Near real-time imaging and mapping during emergencies for accurate assessment of impacted areas."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Climate Monitoring",
      description: "Crucial data on deforestation, land degradation, and rising sea levels for sustainable policies."
    },
    {
      icon: <Satellite className="w-12 h-12" />,
      title: "Natural Resource Management",
      description: "Monitoring land use, vegetation growth, and soil moisture for sustainable agriculture practices."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Illegal Activity Combat",
      description: "Help combat illegal activities such as deforestation, illegal mining, and fishing."
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
            StriX Constellation
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A Global Monitoring Constellation for Unmet Social Needs - 30 satellites working together 
            to provide comprehensive Earth observation capabilities
          </motion.p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Vision Section */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Constellation Vision</h2>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-4">30</div>
                <div className="text-gray-300">Small SAR Satellites</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-4">2020s</div>
                <div className="text-gray-300">Deployment Timeline</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Development Approach */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Development Approach</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Customer/Society-Centric Development</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  By focusing on customer needs and broader societal challenges, satellite development becomes 
                  more tailored and impactful. This outcome hinges on extensive research and feedback collection, 
                  active engagement with potential users and stakeholders.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The primary objective includes improving disaster management and response, monitoring Earth's 
                  environment and climate change, and supporting sustainable infrastructure development and maintenance.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
                <h4 className="text-xl font-bold text-cyan-400 mb-4">Key Focus Areas:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Disaster management and response</li>
                  <li>• Environmental monitoring</li>
                  <li>• Climate change observation</li>
                  <li>• Sustainable infrastructure support</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-500/30">
                <h4 className="text-xl font-bold text-cyan-400 mb-4">Innovation Goals:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Improved image resolution</li>
                  <li>• More frequent revisit times</li>
                  <li>• Optimized power efficiency</li>
                  <li>• Extended satellite lifespan</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Innovative R&D for Future Generations</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The next wave of SAR satellites prioritize improved image resolution, more frequent revisit times, 
                  and optimized power efficiency. With superior SAR sensors, we can capture higher-resolution images 
                  and detect subtle changes on the Earth's surface.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By increasing revisit frequency, we can monitor Earth's dynamic changes in near real-time, 
                  offering invaluable insights for disaster response, urban planning, and agriculture.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">From Tailor-Made to Parallel Production</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Manufacturers have transitioned from a tailor-made process to constructing multiple satellites 
                  simultaneously, known as parallel production. This shift has brought significant advancements 
                  in satellite technology and increased accessibility to SAR data.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Multiple satellites can be constructed simultaneously, accelerating the manufacturing process 
                  and reducing expenses significantly compared to traditional methods.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <h4 className="text-xl font-bold text-cyan-400 mb-4">Production Benefits:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Accelerated manufacturing</li>
                  <li>• Reduced production costs</li>
                  <li>• Improved quality control</li>
                  <li>• Scalable operations</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefits Grid */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Constellation Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sustainability */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Sustainable Operations</h2>
            <p className="text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto mb-8">
              For the constellation's sustainability, we prioritize environmentally friendly materials in construction, 
              adopt efficient power management systems, and ensure responsible disposal methods after missions conclude.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                <h4 className="font-bold text-green-400 mb-2">Eco-Friendly Materials</h4>
                <p className="text-gray-300 text-sm">Sustainable construction materials for reduced environmental impact</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <h4 className="font-bold text-blue-400 mb-2">Efficient Power Systems</h4>
                <p className="text-gray-300 text-sm">Advanced power management for extended operational life</p>
              </div>
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                <h4 className="font-bold text-purple-400 mb-2">Responsible Disposal</h4>
                <p className="text-gray-300 text-sm">Proper end-of-mission disposal protocols</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Constellation;