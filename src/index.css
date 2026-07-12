@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom CSS Variables */
:root {
  --primary-gradient: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  --secondary-gradient: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  --success-gradient: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: #1f2937;
  overflow-x: hidden;
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #0891b2);
}

/* Custom Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* Utility Classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
}

/* Glass Morphism */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Gradient Text */
.gradient-text {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Custom Shadows */
.shadow-glow {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

.shadow-glow-lg {
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.4);
}

/* Responsive Design Helpers */
@media (max-width: 768px) {
  .mobile-center {
    text-align: center;
  }
  
  .mobile-full {
    width: 100%;
  }
}

/* Focus States for Accessibility */
button:focus,
input:focus,
textarea:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Custom Grid */
.auto-fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Loading States */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Print Styles */
@media print {
  .no-print {
    display: none !important;
  }
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .gradient-text {
    -webkit-text-fill-color: #1f2937;
    background: none;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}