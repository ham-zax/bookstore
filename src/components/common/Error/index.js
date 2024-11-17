// src/components/common/Error/index.jsx
import { Alert, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const ErrorWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const Error = ({
  message = 'An error occurred',
  onRetry,
  severity = 'error'
}) => {
  return (
    <ErrorWrapper>
      <Alert severity={severity} sx={{ width: '100%' }}>
        <Typography>{message}</Typography>
      </Alert>
      {onRetry && (
        <Button
          variant="contained"
          onClick={onRetry}
          color="primary"
        >
          Try Again
        </Button>
      )}
    </ErrorWrapper>
  );
};
Error.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
};

export default Error;
