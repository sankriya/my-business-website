import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 XXXXX XXXXX",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@sankriyasolutions.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "India",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #3b82f6 25%, transparent 25%), 
                           linear-gradient(-45deg, #3b82f6 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, #3b82f6 75%), 
                           linear-gradient(-45deg, transparent 75%, #3b82f6 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-medium text-sm">Get In Touch</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '0.2s' }}>
            Ready to transform your ideas into reality? Let's discuss how we can help 
            you achieve your goals through innovative technology solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} style={{ transitionDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Send us a Message
                  </span>
                </h3>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-blue-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-gray-50 hover:bg-white group-hover:border-blue-300"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '0.6s' }}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </h3>

                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent transform hover:-translate-y-1"
                      style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <div className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-10 blur-xl rounded-xl transition-opacity duration-300`}></div>
                      
                      <div className="relative flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                            {info.title}
                          </h4>
                          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Additional CTA */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="font-bold text-gray-800 mb-2">Ready to Start?</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Whether you need research solutions, supply chain optimization, 
                    AI implementation, or any of our specialized services, we're here 
                    to help turn your vision into reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;