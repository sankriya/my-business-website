import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center space-x-3 mb-6 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/25">
                <img 
                  src="/sankriya_logo.png" 
                  alt="Sankriya Solutions Logo" 
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Sankriya Solutions
              </h3>
              <p className="text-cyan-200 text-sm">Pvt Ltd</p>
            </div>
          </div>

          {/* Company Description */}
          <p className="text-cyan-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Multidisciplinary technology solutions driven by innovation, 
            passion, and a commitment to transforming ideas into impactful realities.
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8"></div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm">
            <button className="text-cyan-200 hover:text-white transition-colors duration-300 hover:underline">
              Privacy Policy
            </button>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <button className="text-cyan-200 hover:text-white transition-colors duration-300 hover:underline">
              Terms of Service
            </button>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <button className="text-cyan-200 hover:text-white transition-colors duration-300 hover:underline">
              Careers
            </button>
          </div>

          {/* Copyright Information */}
          <div className="border-t border-blue-700/50 pt-8 space-y-2">
            <p className="text-cyan-200 font-medium">
              © 2025 Sankriya Solutions Pvt Ltd. All Rights Reserved.
            </p>
            <p className="text-blue-300 text-sm">
              CIN: [Company Identification Number]
            </p>
            <p className="text-cyan-300 text-xs mt-4">
              Built with passion in India 🇮🇳
            </p>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 opacity-20">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;