// API Configuration
export const API_BASE_URL = `http://localhost:5000` ||'https://idr-backend-1.onrender.com';

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
} as const;
