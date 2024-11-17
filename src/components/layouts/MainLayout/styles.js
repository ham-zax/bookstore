// src/components/layouts/MainLayout/styles.js
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const LayoutRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}));

export const MainContent = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const Footer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 0),
  marginTop: 'auto',
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
}));
