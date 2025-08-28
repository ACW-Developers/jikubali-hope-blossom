// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://localhost:8000',
  ENDPOINTS: {
    TESTIMONIALS: '/testimonials',
    CONTACT: '/contact',
    PROGRAMS: '/programs'
  }
} as const;

// Helper function to build complete API URLs
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};