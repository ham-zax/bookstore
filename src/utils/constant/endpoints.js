// src/utils/constants/endpoints.js
export const API_ENDPOINTS = {
  BASE_URL: 'http://localhost:5000/api',
  BOOKS: '/books',
  CATEGORIES: '/categories'
};

// src/utils/constants/config.js
export const API_CONFIG = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE: 1,
  TIMEOUT: 5000
};

// src/utils/constants/queryParams.js
export const QUERY_PARAMS = {
  PAGE: 'page',
  LIMIT: 'limit',
  CATEGORY: 'category',
  SEARCH: 'search',
  MIN_PRICE: 'minPrice',
  MAX_PRICE: 'maxPrice',
  SORT_BY: 'sortBy',
  SORT_ORDER: 'sortOrder'
};

// src/utils/constants/errorMessages.js
export const ERROR_MESSAGES = {
  FETCH_BOOKS: 'Failed to fetch books',
  FETCH_BOOK: 'Failed to fetch book details',
  NETWORK_ERROR: 'Network error occurred',
  INVALID_ID: 'Invalid book ID provided'
};
