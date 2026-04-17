// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://idr-backend-1.onrender.com';
// export const API_BASE_URL = 'http://localhost:5000';

// API Endpoints
export const API_ENDPOINTS = {
  // Blog endpoints
  BLOGS: '/api/aadharBlog/allBlogs',
  
  // Team endpoints
  TEAM_MEMBERS: '/api/team-members',
  
  // Properties endpoint
  PROPERTIES: '/api/properties',
  
  // Other endpoints can be added here
  CONTACT: '/api/contact',
  PROJECTS: '/api/projects',
  SERVICES: '/api/services',
  QUERIES: '/api/queries',
} as const;

// Helper function to construct full URLs
export const createApiUrl = (endpoint: string): string => {
  return `${API_BASE_URL}${endpoint}`;
};

// Export commonly used URLs
export const API_URLS = {
  BLOGS: createApiUrl(API_ENDPOINTS.BLOGS),
  TEAM_MEMBERS: createApiUrl(API_ENDPOINTS.TEAM_MEMBERS),
  PROPERTIES: createApiUrl(API_ENDPOINTS.PROPERTIES),
  CONTACT: createApiUrl(API_ENDPOINTS.CONTACT),
  PROJECTS: createApiUrl(API_ENDPOINTS.PROJECTS),
  SERVICES: createApiUrl(API_ENDPOINTS.SERVICES),
  QUERIES: createApiUrl(API_ENDPOINTS.QUERIES),
} as const;
