// Blog service for fetching blog data from API

import { API_BASE_URL, API_URLS } from '../config/api';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  excerpt?: string;
}

// Helper function to get proper image URL
export const getImageUrl = (imagePath: string | null | undefined): string => {
  if (!imagePath) {
    console.log('No image path provided');
    return '';
  }
  
  if (imagePath.startsWith('http')) {
    console.log('Image path is already a full URL:', imagePath);
    return imagePath;
  }
  
  const fullUrl = `${API_BASE_URL}${imagePath}`;
  console.log('API_BASE_URL:', API_BASE_URL);
  console.log('imagePath:', imagePath);
  console.log('Constructed image URL:', fullUrl);
  
  // Test if the image URL is accessible
  fetch(fullUrl, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        console.log('Image is accessible:', fullUrl);
      } else {
        console.error('Image not accessible, status:', response.status, fullUrl);
      }
    })
    .catch(error => {
      console.error('Network error testing image:', fullUrl, error);
    });
  
  return fullUrl;
};

export const blogService = {
  // Fetch all blog posts
  async getAllBlogs(): Promise<BlogPost[]> {
    try {
      const response = await fetch(API_URLS.BLOGS);
      
      console.log('Fetching from:', API_URLS.BLOGS);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('API Response:', data);
      
      // Handle the API response structure
      let blogsData = [];
      if (data.success && data.data) {
        blogsData = data.data;
      } else if (Array.isArray(data)) {
        blogsData = data;
      }
      
      // Transform API data to match our interface
      return blogsData.map((blog: any) => {
        // Process content array - extract HTML content
        let content = '';
        if (blog.content && Array.isArray(blog.content)) {
          blog.content.forEach((section: any) => {
            if (section.heading && section.content) {
              // Parse the JSON content and convert to HTML
              try {
                const parsedContent = JSON.parse(section.content);
                if (Array.isArray(parsedContent)) {
                  content += `<h2>${section.heading}</h2>`;
                  parsedContent.forEach((item: any) => {
                    if (item.heading && item.content) {
                      content += `<h3>${item.heading}</h3><p>${item.content}</p>`;
                    }
                  });
                }
              } catch (e) {
                console.warn('Error parsing content:', e);
              }
            }
          });
        } else {
          content = blog.content || '';
        }

        return {
          id: blog._id || blog.id,
          title: blog.title,
          content: content,
          date: new Date(blog.createdAt || blog.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          author: blog.authorName || 'Aadhar Team',
          readTime: `${blog.readingTime || 5} min read`,
          category: blog.category || 'Real Estate',
          image: getImageUrl(blog.featuredImage),
          tags: Array.isArray(blog.tags) ? blog.tags : [],
          excerpt: blog.summary || content.substring(0, 150) + '...'
        };
      });
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Return empty array or fallback data
      return [];
    }
  },

  // Get single blog post by ID
  async getBlogById(id: string): Promise<BlogPost | null> {
    try {
      // First try to get all blogs and find the specific one
      const response = await fetch(API_URLS.BLOGS);
      
      console.log('Fetching blog by ID from:', API_URLS.BLOGS);
      console.log('Looking for blog ID:', id);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('API Response for single blog:', data);
      
      // Handle the API response structure
      let blogsData = [];
      if (data.success && data.data) {
        blogsData = data.data;
      } else if (Array.isArray(data)) {
        blogsData = data;
      }
      
      // Find the blog post by ID in the data array
      const blogData = blogsData.find((blog: any) => 
        (blog._id === id || blog.id === id)
      );
      
      console.log('Found blog data:', blogData);
      
      if (!blogData) return null;

      // Process content array - extract HTML content
      let content = '';
      if (blogData.content && Array.isArray(blogData.content)) {
        blogData.content.forEach((section: any) => {
          if (section.heading && section.content) {
            // Parse the JSON content and convert to HTML
            try {
              const parsedContent = JSON.parse(section.content);
              if (Array.isArray(parsedContent)) {
                content += `<h2>${section.heading}</h2>`;
                parsedContent.forEach((item: any) => {
                  if (item.heading && item.content) {
                    content += `<h3>${item.heading}</h3><p>${item.content}</p>`;
                  }
                });
              }
            } catch (e) {
              console.warn('Error parsing content:', e);
            }
          }
        });
      } else {
        content = blogData.content || '';
      }

      // Transform API data to match our interface
      return {
        id: blogData._id || blogData.id,
        title: blogData.title,
        content: content,
        date: new Date(blogData.createdAt || blogData.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: blogData.authorName || 'Aadhar Team',
        readTime: `${blogData.readingTime || 5} min read`,
        category: blogData.category || 'Real Estate',
        image: getImageUrl(blogData.featuredImage),
        tags: Array.isArray(blogData.tags) ? blogData.tags : [],
        excerpt: blogData.summary || content.substring(0, 150) + '...'
      };
    } catch (error) {
      console.error('Error fetching blog:', error);
      return null;
    }
  }
};
