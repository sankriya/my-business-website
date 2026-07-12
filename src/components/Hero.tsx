import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-400">
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-cyan-400/20"></div>
        
        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="mb-6 flex justify-center">
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Innovation Driven</span>
          </div>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '0.2s', fontFamily: 'Outfit, sans-serif' }}>
          <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
            Re-imagine
          </span>
          <br />
          <span className="relative">
            Tomorrow
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
          </span>
        </h1>

        <p className={`text-xl md:text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '0.4s' }}>
          Smart Work. <span className="text-white font-semibold">Powered by Technology.</span>
          <br />
          <span className="text-lg text-cyan-200 mt-2 block">Multidisciplinary solutions driven by innovation and passion</span>
        </p>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => scrollToSection('#services')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection('#contact')}
            className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold backdrop-blur-md hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center space-x-2">
              <span>Get in Touch</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-ping"></div>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;