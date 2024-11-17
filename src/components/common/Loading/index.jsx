// src/components/common/Loading/index.jsx
import { CircularProgress, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const LoadingWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '200px',
  gap: theme.spacing(2),
}));

export const Loading = ({ message = 'Loading...' }) => {
  return (
    <LoadingWrapper>
      <CircularProgress />
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </LoadingWrapper>
  );
};
Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
