const BASE_URL = 'http://localhost:5000/api';

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/books`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
};
