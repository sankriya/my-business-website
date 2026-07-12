import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Truck, 
  Brain, 
  Calendar, 
  Leaf, 
  Home,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Search,
      title: "Research & Product Development",
      description: "Innovative solutions through cutting-edge research and strategic product development methodologies.",
      gradient: "from-blue-500 to-purple-600",
      shadowColor: "blue-500/25",
      route: "/services/research"
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description: "Optimized logistics and supply chain solutions powered by advanced analytics and automation.",
      gradient: "from-green-500 to-teal-600",
      shadowColor: "green-500/25",
      route: "/services/supply-chain"
    },
    {
      icon: Brain,
      title: "IT, AI & Automation",
      description: "Transform your business with intelligent automation, AI solutions, and modern IT infrastructure.",
      gradient: "from-purple-500 to-pink-600",
      shadowColor: "purple-500/25",
      route: "/services/it-ai"
    },
    {
      icon: Calendar,
      title: "Events & Trade",
      description: "Comprehensive event management and trade solutions with technological excellence and precision.",
      gradient: "from-orange-500 to-red-600",
      shadowColor: "orange-500/25",
      route: "/services/events"
    },
    {
      icon: Leaf,
      title: "Nourish & Thrive",
      description: "Sustainable solutions for nutrition and wellness through innovative technology and research.",
      gradient: "from-emerald-500 to-green-600",
      shadowColor: "emerald-500/25",
      route: "/services/nourish"
    },
    {
      icon: Home,
      title: "Interior & Exterior Design",
      description: "Creative architectural and design solutions that blend functionality with aesthetic excellence.",
      gradient: "from-cyan-500 to-blue-600",
      shadowColor: "cyan-500/25",
      route: "/services/design"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-medium text-sm">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Multidisciplinary expertise across diverse domains, bringing together innovation, 
            technology, and passion to solve real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } isolation-auto`}
                onClick={() => navigate(service.route)}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  boxShadow: `0 10px 40px -10px rgba(59, 130, 246, 0.1)`
                }}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 blur-lg rounded-2xl transition-opacity duration-300 pointer-events-none -z-10`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg pointer-events-none`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 pointer-events-none">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 pointer-events-none">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center space-x-2 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1 pointer-events-none">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;