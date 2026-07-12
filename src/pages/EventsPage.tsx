import React from 'react';
import { Calendar, Users, Award, Zap, TrendingUp, Target } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const EventsPage = () => {
  const pageData = {
    title: "Events & Trade",
    subtitle: "Exceptional Experiences Through Technology",
    description: "Create memorable and impactful events with our comprehensive event management and trade solutions. We combine traditional event planning expertise with cutting-edge technology to deliver seamless experiences that engage audiences and drive business results.",
    gradient: "from-orange-500 to-red-600",
    icon: Calendar,
    features: [
      "End-to-end Event Planning and Management services",
      "Virtual and Hybrid Event Platforms with interactive features",
      "Trade Show Management with digital integration",
      "Event Technology Solutions including mobile apps",
      "Live Streaming and Broadcasting capabilities",
      "Audience Engagement Tools and analytics",
      "Registration and Ticketing Systems",
      "Vendor and Supplier Coordination",
      "Post-event Analytics and ROI measurement"
    ],
    benefits: [
      "Increased attendee engagement and satisfaction",
      "Streamlined event operations and reduced costs",
      "Enhanced brand visibility and market presence",
      "Data-driven insights for future event optimization",
      "Seamless integration of physical and digital experiences",
      "Measurable ROI and business impact tracking"
    ],
    process: [
      {
        step: 1,
        title: "Event Conceptualization",
        description: "Collaborate with clients to understand objectives, define target audience, and create compelling event concepts that align with business goals."
      },
      {
        step: 2,
        title: "Strategic Planning",
        description: "Develop comprehensive event strategies, including venue selection, technology requirements, marketing plans, and budget optimization."
      },
      {
        step: 3,
        title: "Technology Integration",
        description: "Implement event technology solutions, registration systems, mobile apps, and digital engagement platforms for enhanced attendee experience."
      },
      {
        step: 4,
        title: "Execution & Management",
        description: "Flawless event execution with real-time monitoring, on-site coordination, technical support, and contingency management."
      },
      {
        step: 5,
        title: "Analysis & Follow-up",
        description: "Post-event analysis, attendee feedback collection, ROI measurement, and strategic recommendations for future events."
      }
    ],
    stats: [
      {
        number: "200+",
        label: "Events Managed",
        icon: Target
      },
      {
        number: "98%",
        label: "Client Satisfaction",
        icon: TrendingUp
      },
      {
        number: "50K+",
        label: "Attendees Engaged",
        icon: Award
      }
    ],
    technologies: [
      "Event Management Software", "Live Streaming Platforms", "Mobile Apps",
      "Registration Systems", "CRM Integration", "Analytics Tools",
      "Virtual Reality", "Augmented Reality", "Social Media Integration",
      "Payment Gateways", "Cloud Infrastructure", "Security Systems"
    ],
    caseStudy: {
      title: "International Tech Conference 2024",
      description: "We managed a hybrid international technology conference with 5,000+ attendees across multiple time zones, featuring keynote speakers, interactive workshops, and virtual networking sessions.",
      results: [
        "5,000+ global attendees",
        "95% attendee satisfaction rate",
        "40% increase in sponsor engagement",
        "Seamless hybrid experience delivery"
      ]
    }
  };

  return <ServicePageLayout {...pageData} />;
};

export default EventsPage;