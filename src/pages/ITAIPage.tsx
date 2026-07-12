import React from 'react';
import { Brain, Users, Award, Zap, TrendingUp, Target } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const ITAIPage = () => {
  const pageData = {
    title: "IT, AI & Automation",
    subtitle: "Intelligent Solutions for Digital Transformation",
    description: "Harness the power of artificial intelligence, machine learning, and intelligent automation to revolutionize your business operations. Our comprehensive IT solutions combine cutting-edge AI technologies with robust infrastructure to drive efficiency, innovation, and competitive advantage.",
    gradient: "from-purple-500 to-pink-600",
    icon: Brain,
    features: [
      "Custom AI/ML Model Development for specific business needs",
      "Intelligent Process Automation (RPA) implementation",
      "Cloud Infrastructure Design and Migration services",
      "Data Analytics and Business Intelligence platforms",
      "Computer Vision and Natural Language Processing",
      "Chatbots and Virtual Assistants development",
      "Predictive Maintenance using IoT and AI",
      "Cybersecurity Solutions with AI-powered threat detection",
      "Legacy System Modernization and Integration"
    ],
    benefits: [
      "Automated workflows reducing manual effort by up to 80%",
      "Data-driven insights for better decision making",
      "Enhanced customer experience through personalization",
      "Improved operational efficiency and cost savings",
      "Scalable solutions that grow with your business",
      "Competitive advantage through innovative technology adoption"
    ],
    process: [
      {
        step: 1,
        title: "Digital Assessment",
        description: "Comprehensive evaluation of current IT infrastructure, identifying automation opportunities and AI implementation potential across business processes."
      },
      {
        step: 2,
        title: "Solution Architecture",
        description: "Design tailored AI and automation solutions, selecting optimal technologies and creating detailed implementation roadmaps."
      },
      {
        step: 3,
        title: "Development & Training",
        description: "Build custom AI models, develop automation workflows, and train systems using your specific data and business requirements."
      },
      {
        step: 4,
        title: "Integration & Testing",
        description: "Seamless integration with existing systems, comprehensive testing, and performance optimization to ensure reliable operation."
      },
      {
        step: 5,
        title: "Deployment & Support",
        description: "Smooth deployment with minimal disruption, ongoing monitoring, maintenance, and continuous improvement of AI systems."
      }
    ],
    stats: [
      {
        number: "100+",
        label: "AI Projects Delivered",
        icon: Target
      },
      {
        number: "75%",
        label: "Process Efficiency Gain",
        icon: TrendingUp
      },
      {
        number: "24/7",
        label: "System Uptime",
        icon: Award
      }
    ],
    technologies: [
      "TensorFlow", "PyTorch", "OpenAI GPT", "Azure AI", "AWS ML",
      "Python", "R", "Docker", "Kubernetes", "Apache Spark",
      "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "React", "Node.js"
    ],
    caseStudy: {
      title: "Intelligent Document Processing System",
      description: "We developed an AI-powered document processing solution for a financial services company, automating the extraction and analysis of information from thousands of documents daily.",
      results: [
        "90% reduction in processing time",
        "99.5% accuracy in data extraction",
        "60% cost savings in operations",
        "Automated compliance reporting"
      ]
    }
  };

  return <ServicePageLayout {...pageData} />;
};

export default ITAIPage;