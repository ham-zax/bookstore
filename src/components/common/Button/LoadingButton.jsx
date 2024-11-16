// Enhanced Button component with loading state
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { Button } from './index';

export const LoadingButton = ({ loading, children, ...props }) => {
  return (
    <Button
      disabled={loading}
      {...props}
    >
      {loading ? <CircularProgress size={24} /> : children}
    </Button>
  );
};

LoadingButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
