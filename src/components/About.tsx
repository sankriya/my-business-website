import React, { useEffect, useState } from 'react';
import { Eye, Target, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading multidisciplinary technology company that transforms ideas into impactful realities, driving innovation across diverse industries and creating sustainable solutions for a better tomorrow.",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0s"
    },
    {
      icon: Target,
      title: "Mission",
      description: "To leverage cutting-edge technology, research, and innovation to solve real-world problems across multiple domains while fostering growth, sustainability, and excellence in every project we undertake.",
      gradient: "from-purple-500 to-pink-500",
      delay: "0.2s"
    },
    {
      icon: Zap,
      title: "Motto",
      description: "Smart Work. Powered by Technology. Inspired by the Telugu words 'Sanketikata' (technology) and 'Kriya' (action), we embody the perfect fusion of innovation and execution.",
      gradient: "from-emerald-500 to-teal-500",
      delay: "0.4s"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-50 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium text-sm">About Sankriya</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '0.2s' }}>
            A multidisciplinary company driven by <span className="text-blue-600 font-semibold">technology</span>, 
            <span className="text-cyan-500 font-semibold"> innovation</span>, and a 
            <span className="text-purple-600 font-semibold"> passion</span> for solving real-world problems. 
            Inspired by the Telugu words for "technology" (Sanketikata) and "action" (Kriya), 
            we bring together expertise across diverse domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer border border-gray-100 hover:border-transparent transform hover:-translate-y-4 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: value.delay,
                  animationDelay: value.delay
                }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Glass Morphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <Icon className="w-8 h-8 text-white" />
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-30 blur-md rounded-xl transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${value.gradient} rounded-full mt-6 group-hover:w-full transition-all duration-500`}></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Company Heritage */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Heritage & Innovation
              </span>
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our name embodies our essence - <span className="font-semibold text-blue-600">"Sanketikata"</span> representing 
              technology's power to transform, and <span className="font-semibold text-cyan-500">"Kriya"</span> symbolizing 
              purposeful action. Together, they form Sankriya - where innovation meets execution, 
              and ideas become impactful realities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;