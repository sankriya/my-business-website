import React from 'react';
import { Home, Users, Award, Zap, TrendingUp, Target } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const DesignPage = () => {
  const pageData = {
    title: "Interior & Exterior Design",
    subtitle: "Architectural Excellence Meets Innovation",
    description: "Transform spaces into extraordinary environments through our comprehensive interior and exterior design solutions. We blend aesthetic excellence with functional innovation, incorporating smart technology and sustainable practices to create spaces that inspire and perform.",
    gradient: "from-cyan-500 to-blue-600",
    icon: Home,
    features: [
      "3D Visualization and Virtual Reality walkthroughs",
      "Smart Home Integration with IoT devices",
      "Sustainable Design practices and materials",
      "Space Optimization using advanced planning tools",
      "Custom Furniture Design and manufacturing",
      "Lighting Design with energy-efficient solutions",
      "Landscape Architecture and outdoor spaces",
      "Project Management from concept to completion",
      "Building Information Modeling (BIM) integration"
    ],
    benefits: [
      "Enhanced property value through professional design",
      "Improved functionality and space utilization",
      "Energy-efficient and sustainable solutions",
      "Personalized designs reflecting client vision",
      "Seamless project execution and timeline management",
      "Integration of smart technology for modern living"
    ],
    process: [
      {
        step: 1,
        title: "Consultation & Vision",
        description: "In-depth consultation to understand client needs, preferences, lifestyle requirements, and budget parameters for the design project."
      },
      {
        step: 2,
        title: "Concept Development",
        description: "Create initial design concepts, mood boards, and 3D visualizations to communicate the design vision and gather client feedback."
      },
      {
        step: 3,
        title: "Design Refinement",
        description: "Refine designs based on client input, finalize material selections, and create detailed technical drawings and specifications."
      },
      {
        step: 4,
        title: "Implementation Planning",
        description: "Develop comprehensive project timelines, coordinate with contractors and suppliers, and manage all aspects of project execution."
      },
      {
        step: 5,
        title: "Project Completion",
        description: "Oversee installation, conduct quality checks, and ensure client satisfaction with final walkthrough and project handover."
      }
    ],
    stats: [
      {
        number: "300+",
        label: "Spaces Transformed",
        icon: Target
      },
      {
        number: "96%",
        label: "Client Satisfaction",
        icon: TrendingUp
      },
      {
        number: "25+",
        label: "Design Awards",
        icon: Award
      }
    ],
    technologies: [
      "AutoCAD", "SketchUp", "3ds Max", "Revit", "Lumion",
      "Virtual Reality", "Augmented Reality", "Smart Home Systems",
      "LED Lighting", "Sustainable Materials", "BIM Software",
      "Project Management Tools", "Color Matching Technology"
    ],
    caseStudy: {
      title: "Luxury Residential Complex",
      description: "We designed a 50-unit luxury residential complex featuring smart home integration, sustainable materials, and innovative space optimization solutions.",
      results: [
        "100% unit pre-sales before completion",
        "30% energy efficiency improvement",
        "Award-winning sustainable design",
        "Smart home features in every unit"
      ]
    }
  };

  return <ServicePageLayout {...pageData} />;
};

export default DesignPage;