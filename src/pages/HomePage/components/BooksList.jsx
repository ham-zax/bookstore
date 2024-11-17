// src/pages/HomePage/components/BooksList.jsx
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';

const BooksList = ({ filters }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        // Convert filters to URL parameters
        const params = new URLSearchParams({
          page: filters.page,
          limit: filters.limit,
          category: filters.category,
          search: filters.search,
          sortBy: filters.sortBy,
          sortOrder: filters.sortOrder
        });

        const response = await fetch(`/api/books?${params}`);
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data.books);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [filters]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book._id}>
          {/* Book Card Component will go here */}
          <Box>Book Card Placeholder</Box>
        </Grid>
      ))}
    </Grid>
  );
};
BooksList.propTypes = {
  filters: PropTypes.shape({
    page: PropTypes.number,
    limit: PropTypes.number,
    category: PropTypes.string,
    search: PropTypes.string,
    sortBy: PropTypes.string,
    sortOrder: PropTypes.string
  }).isRequired
};

export default BooksList;
