import React from 'react';
import { Truck, Users, Award, Zap, TrendingUp, Target } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const SupplyChainPage = () => {
  const pageData = {
    title: "Supply Chain Management",
    subtitle: "Optimized Logistics for Maximum Efficiency",
    description: "Transform your supply chain operations with our advanced analytics, automation technologies, and strategic optimization solutions. We help businesses reduce costs, improve delivery times, and enhance overall operational efficiency through data-driven insights and innovative logistics management.",
    gradient: "from-green-500 to-teal-600",
    icon: Truck,
    features: [
      "Real-time Inventory Management with automated tracking systems",
      "Predictive Analytics for demand forecasting and planning",
      "Route Optimization using AI-powered algorithms",
      "Vendor Management with performance monitoring dashboards",
      "Warehouse Automation including robotics integration",
      "Quality Control with IoT sensors and monitoring systems",
      "Risk Management through predictive modeling",
      "Cost Optimization with detailed analytics and reporting",
      "Sustainability Tracking for environmental impact reduction"
    ],
    benefits: [
      "Up to 30% reduction in operational costs",
      "Improved delivery times and customer satisfaction",
      "Enhanced visibility across the entire supply chain",
      "Reduced inventory holding costs and waste",
      "Better supplier relationships and negotiations",
      "Increased agility and responsiveness to market changes"
    ],
    process: [
      {
        step: 1,
        title: "Supply Chain Assessment",
        description: "Comprehensive analysis of current operations, identifying bottlenecks, inefficiencies, and optimization opportunities across the entire supply chain."
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Design customized supply chain strategies aligned with business objectives, incorporating best practices and innovative technologies."
      },
      {
        step: 3,
        title: "Technology Implementation",
        description: "Deploy advanced supply chain management systems, automation tools, and analytics platforms for enhanced operational control."
      },
      {
        step: 4,
        title: "Process Optimization",
        description: "Continuous monitoring and refinement of processes, using data insights to drive further improvements and efficiency gains."
      },
      {
        step: 5,
        title: "Performance Monitoring",
        description: "Ongoing performance tracking with KPI dashboards, regular reviews, and strategic adjustments to maintain optimal operations."
      }
    ],
    stats: [
      {
        number: "40+",
        label: "Supply Chains Optimized",
        icon: Target
      },
      {
        number: "35%",
        label: "Average Cost Reduction",
        icon: TrendingUp
      },
      {
        number: "99.5%",
        label: "On-time Delivery Rate",
        icon: Award
      }
    ],
    technologies: [
      "ERP Systems", "WMS Software", "TMS Platforms", "IoT Sensors",
      "RFID Technology", "Blockchain", "AI/ML Analytics", "Robotics",
      "Cloud Computing", "Mobile Apps", "GPS Tracking", "EDI Systems"
    ],
    caseStudy: {
      title: "E-commerce Fulfillment Optimization",
      description: "We redesigned the entire fulfillment process for a major e-commerce retailer, implementing automated sorting systems, predictive inventory management, and optimized delivery routes.",
      results: [
        "50% faster order processing",
        "25% reduction in shipping costs",
        "98% order accuracy rate",
        "Real-time inventory visibility"
      ]
    }
  };

  return <ServicePageLayout {...pageData} />;
};

export default SupplyChainPage;