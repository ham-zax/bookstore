// src/pages/HomePage/components/BooksFilters.jsx
import PropTypes from 'prop-types';
import {
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box
} from '@mui/material';

const BooksFilters = ({ filters, onFilterChange }) => {
  const handleChange = (field) => (event) => {
    onFilterChange({
      ...filters,
      [field]: event.target.value
    });
  };

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={filters.search}
          onChange={handleChange('search')}
          sx={{ flexGrow: 1 }}
        />

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={filters.sortBy}
            label="Sort By"
            onChange={handleChange('sortBy')}
          >
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="author">Author</MenuItem>
            <MenuItem value="price">Price</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Order</InputLabel>
          <Select
            value={filters.sortOrder}
            label="Order"
            onChange={handleChange('sortOrder')}
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
};
BooksFilters.propTypes = {
  filters: PropTypes.shape({
    page: PropTypes.number,
    limit: PropTypes.number,
    category: PropTypes.string,
    search: PropTypes.string,
    sortBy: PropTypes.string,
    sortOrder: PropTypes.string
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default BooksFilters;
