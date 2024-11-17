// src/components/layouts/MainLayout/index.jsx
import PropTypes from 'prop-types';
import { Container, Typography } from '@mui/material';
import Navigation from '../Navigation';
import { LayoutRoot, MainContent, Footer } from './styles';

const MainLayout = ({ children }) => {
  return (
    <LayoutRoot>
      <Navigation />
      <MainContent maxWidth="lg">
        {children}
      </MainContent>
      <Footer>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} BookStore. All rights reserved.
          </Typography>
        </Container>
      </Footer>
    </LayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
