import React from 'react';
import { motion } from 'framer-motion';

const SpecificationTable = () => {
  const satelliteSpecs = [
    { spec: 'Mass', value: '100kg class' },
    { spec: 'Size (Before deployment)', value: '0.8m × 1.0m × 0.8m' },
    { spec: 'Size (After deployment)', value: '5.0m × 1.0m × 0.8m' },
    { spec: 'Antenna Size', value: '5m × 0.8m' },
    { spec: 'Propulsion', value: 'Yes' },
    { spec: 'Mission Life', value: 'Approximately 5 years' }
  ];

  const sensorSpecs = [
    { spec: 'Center Frequency', value: '9.65 GHz (X-band)' },
    { spec: 'Look Direction', value: 'Right and Left' },
    { spec: 'PRF', value: 'Up to 7 kHz' },
    { spec: 'Chirp Bandwidth', value: 'Up to 300 MHz' },
    { spec: 'RF Peak Power', value: '1kW' },
    { spec: 'Polarization', value: 'VV' },
    { spec: 'Off-Nadir Angle', value: '15 – 45 degrees' }
  ];

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const SpecTable = ({ title, data, gradient }: { title: string, data: Array<{spec: string, value: string}>, gradient: string }) => (
    <div className="mb-8">
      <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h3>
      <motion.div
        variants={tableVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="overflow-x-auto"
      >
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 p-1">
          <table className="w-full">
            <tbody>
              {data.map((row, index) => (
                <motion.tr
                  key={index}
                  variants={rowVariants}
                  className={`border-b border-gray-700/50 last:border-b-0 hover:bg-gray-700/30 transition-colors duration-200`}
                >
                  <td className="py-4 px-6 font-semibold text-gray-200 bg-gradient-to-r from-gray-800/70 to-transparent">
                    {row.spec}
                  </td>
                  <td className="py-4 px-6 text-cyan-300 font-medium">
                    {row.value}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <SpecTable 
        title="Satellite Specification" 
        data={satelliteSpecs} 
        gradient="from-cyan-400 to-blue-500"
      />
      <SpecTable 
        title="Sensor Specification" 
        data={sensorSpecs} 
        gradient="from-blue-500 to-purple-500"
      />
    </div>
  );
};

export default SpecificationTable;