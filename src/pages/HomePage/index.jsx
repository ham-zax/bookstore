// src/pages/HomePage/index.jsx
import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import BooksFilters from './components/BooksFilters';
import BooksLists from './components/BooksList';

const HomePage = () => {
  // State for filters and pagination
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    category: '',
    search: '',
    sortBy: 'title',
    sortOrder: 'asc'
  });

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Welcome to BookStore
        </Typography>

        <BooksFilters
          filters={filters}
          onFilterChange={(newFilters) => setFilters(newFilters)}
        />

        <BooksLists filters={filters} />
      </Box>
    </Container>
  );
};

export default HomePage;
