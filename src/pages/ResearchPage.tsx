import React from 'react';
import { Search, Users, Award, Zap, TrendingUp, Target } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const ResearchPage = () => {
  const pageData = {
    title: "Research & Product Development",
    subtitle: "Innovation Through Scientific Excellence",
    description: "We transform ideas into breakthrough products through rigorous research methodologies, cutting-edge technology, and strategic development processes. Our multidisciplinary approach ensures that every solution is backed by solid scientific foundation and market viability.",
    gradient: "from-blue-500 to-purple-600",
    icon: Search,
    features: [
      "Advanced Research Methodologies with AI-powered data analysis",
      "Rapid Prototyping using 3D printing and digital modeling",
      "Market Validation through comprehensive user testing",
      "Intellectual Property Development and patent filing support",
      "Cross-disciplinary Collaboration with industry experts",
      "Sustainable Innovation focusing on environmental impact",
      "Technology Transfer from research to commercial applications",
      "Quality Assurance with rigorous testing protocols",
      "Regulatory Compliance ensuring market readiness"
    ],
    benefits: [
      "Reduced time-to-market through streamlined development processes",
      "Higher success rates with data-driven decision making",
      "Cost-effective solutions optimized for scalability",
      "Competitive advantage through proprietary innovations",
      "Risk mitigation with thorough market analysis",
      "Sustainable growth through continuous R&D investment"
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Ideation",
        description: "We begin with comprehensive market research, stakeholder interviews, and brainstorming sessions to identify opportunities and define project scope."
      },
      {
        step: 2,
        title: "Research & Analysis",
        description: "Our team conducts in-depth technical research, feasibility studies, and competitive analysis to validate concepts and identify optimal approaches."
      },
      {
        step: 3,
        title: "Design & Prototyping",
        description: "We create detailed designs, build functional prototypes, and conduct iterative testing to refine the solution architecture."
      },
      {
        step: 4,
        title: "Development & Testing",
        description: "Full-scale development with continuous testing, quality assurance, and performance optimization to ensure robust solutions."
      },
      {
        step: 5,
        title: "Validation & Launch",
        description: "Market validation, user acceptance testing, and strategic launch planning to ensure successful product introduction."
      }
    ],
    stats: [
      {
        number: "50+",
        label: "Research Projects Completed",
        icon: Target
      },
      {
        number: "95%",
        label: "Success Rate",
        icon: TrendingUp
      },
      {
        number: "15+",
        label: "Patents Filed",
        icon: Award
      }
    ],
    technologies: [
      "Machine Learning", "IoT Sensors", "3D Printing", "CAD/CAM", 
      "Data Analytics", "Cloud Computing", "Blockchain", "AR/VR",
      "Biotechnology", "Nanotechnology", "Robotics", "AI/ML Frameworks"
    ],
    caseStudy: {
      title: "Smart Agriculture Monitoring System",
      description: "We developed an IoT-based precision agriculture solution that helps farmers optimize crop yields while reducing resource consumption. The system integrates soil sensors, weather monitoring, and AI-powered analytics.",
      results: [
        "30% increase in crop yield",
        "40% reduction in water usage",
        "25% decrease in fertilizer costs",
        "Real-time monitoring capabilities"
      ]
    }
  };

  return <ServicePageLayout {...pageData} />;
};

export default ResearchPage;