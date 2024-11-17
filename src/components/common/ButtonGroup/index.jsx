// src/components/common/ButtonGroup/index.jsx
import PropTypes from 'prop-types';
import { ButtonGroup as MuiButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButtonGroup = styled(MuiButtonGroup)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  // Custom styles
}));

export const ButtonGroup = ({ children, ...props }) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
