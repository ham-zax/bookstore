
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';


// Custom styled button using MUI's styled API
export const StyledButton = styled(MuiButton)(({ theme }) => ({
  // Custom styles here
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none', // Prevents automatic uppercase
  padding: '8px 16px',
  // You can add more custom styles
}));