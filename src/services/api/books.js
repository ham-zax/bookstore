import { API_ENDPOINTS, API_CONFIG, ERROR_MESSAGES } from '@/utils/constants';
// Helper function to construct URL with query parameters
const constructUrl = (params) => {
  const queryParams = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        queryParams.append(key, value);
      }
    });
  }

  const queryString = queryParams.toString();
  return queryString ? `?${queryString}` : '';
};

// Helper function to handle API errors
const handleApiError = (error, customMessage) => {
  if (error.response) {
    // Server responded with error status
    throw new Error(error.response.data.message || customMessage);
  } else if (error.request) {
    // Request made but no response received
    throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
  } else {
    // Error in request setup
    throw new Error(error.message || customMessage);
  }
};
export const booksApi = {
  getBooks: async (params = {}) => {
    try {
      // Merge default params with provided params
      const queryParams = {
        page: params.page || API_CONFIG.DEFAULT_PAGE,
        limit: params.limit || API_CONFIG.DEFAULT_PAGE_SIZE,
        ...params
      };

      const response = await fetch(
        `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.BOOKS}${constructUrl(queryParams)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        books: data.books,
        pagination: {
          currentPage: data.currentPage,
          totalPages: data.totalPages,
          totalBooks: data.totalBooks
        }
      };
    } catch (error) {
      handleApiError(error, ERROR_MESSAGES.FETCH_BOOKS);
    }
  },
  getBookById: async (id) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.BOOKS}/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      handleApiError(error, ERROR_MESSAGES.FETCH_BOOK);
      
    }
  },
  getCategories: async () => {
    try {
      const response = await fetch(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CATEGORIES}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      handleApiError(error);
    }
  }
};