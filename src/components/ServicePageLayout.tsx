import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  icon: React.ComponentType<any>;
  features: string[];
  benefits: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  stats: Array<{
    number: string;
    label: string;
    icon: React.ComponentType<any>;
  }>;
  technologies?: string[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  subtitle,
  description,
  gradient,
  icon: Icon,
  features,
  benefits,
  process,
  stats,
  technologies,
  caseStudy
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
          {/* Tech Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
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
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-24 left-6 z-20 flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Content */}
        <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-6 flex justify-center">
            <div className={`w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {title}
          </h1>

          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>

          <button
            onClick={() => {
              const element = document.querySelector('#features');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
          >
            Explore Details
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                Key Features
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <StatIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                Our Process
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 mb-12 last:mb-0">
                <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                Why Choose Us
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl"
              >
                <div className={`w-8 h-8 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Star className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {technologies && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  Technologies We Use
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-gray-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Section */}
      {caseStudy && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                    Success Story
                  </span>
                </h2>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{caseStudy.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {title.toLowerCase()} solutions can transform your business.
          </p>
          <button
            onClick={() => navigate('/#contact')}
            className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;