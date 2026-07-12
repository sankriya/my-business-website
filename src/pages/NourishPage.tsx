import React from 'react';
import { Leaf, Users, Award, Zap, TrendingUp, Target } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const NourishPage = () => {
  const pageData = {
    title: "Nourish & Thrive",
    subtitle: "Sustainable Nutrition & Wellness Solutions",
    description: "Revolutionize nutrition and wellness through innovative technology, sustainable practices, and data-driven insights. Our comprehensive solutions promote healthy living while supporting environmental sustainability and community well-being.",
    gradient: "from-emerald-500 to-green-600",
    icon: Leaf,
    features: [
      "Personalized Nutrition Planning using AI algorithms",
      "Sustainable Food Production consulting and optimization",
      "Wellness Technology Solutions including mobile apps",
      "Nutritional Analysis and Tracking systems",
      "Community Health Programs and initiatives",
      "Organic Farming Technology and IoT integration",
      "Food Safety and Quality Assurance systems",
      "Supply Chain Transparency for food products",
      "Environmental Impact Assessment and reduction"
    ],
    benefits: [
      "Improved health outcomes through personalized nutrition",
      "Reduced environmental impact of food production",
      "Enhanced food safety and quality standards",
      "Cost-effective wellness program implementation",
      "Data-driven insights for better health decisions",
      "Sustainable community development and growth"
    ],
    process: [
      {
        step: 1,
        title: "Health Assessment",
        description: "Comprehensive evaluation of individual or community health needs, dietary requirements, and wellness goals using advanced assessment tools."
      },
      {
        step: 2,
        title: "Solution Design",
        description: "Create customized nutrition and wellness programs incorporating sustainable practices, technology solutions, and evidence-based approaches."
      },
      {
        step: 3,
        title: "Technology Implementation",
        description: "Deploy nutrition tracking apps, wellness platforms, and monitoring systems to support program delivery and progress tracking."
      },
      {
        step: 4,
        title: "Program Execution",
        description: "Implement wellness programs with ongoing support, education, and community engagement to ensure successful adoption and results."
      },
      {
        step: 5,
        title: "Impact Measurement",
        description: "Monitor health outcomes, environmental impact, and program effectiveness with detailed analytics and continuous improvement strategies."
      }
    ],
    stats: [
      {
        number: "10K+",
        label: "Lives Impacted",
        icon: Target
      },
      {
        number: "85%",
        label: "Health Improvement Rate",
        icon: TrendingUp
      },
      {
        number: "30%",
        label: "Carbon Footprint Reduction",
        icon: Award
      }
    ],
    technologies: [
      "Nutrition Analytics", "IoT Sensors", "Mobile Health Apps",
      "AI/ML Algorithms", "Blockchain", "Cloud Computing",
      "Wearable Integration", "Data Visualization", "GPS Tracking",
      "Biometric Monitoring", "Environmental Sensors", "Smart Agriculture"
    ],
    caseStudy: {
      title: "Corporate Wellness Transformation",
      description: "We implemented a comprehensive wellness program for a 2,000-employee corporation, including personalized nutrition plans, fitness tracking, and sustainable cafeteria solutions.",
      results: [
        "40% improvement in employee health metrics",
        "25% reduction in healthcare costs",
        "90% employee program participation",
        "Carbon-neutral cafeteria operations"
      ]
    }
  };

  return <ServicePageLayout {...pageData} />;
};

export default NourishPage;