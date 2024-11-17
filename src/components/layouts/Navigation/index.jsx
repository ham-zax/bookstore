// src/components/layouts/Navigation/index.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Typography,
  Link,
  IconButton,
  useTheme
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { StyledAppBar, NavContainer, LogoContainer, NavLinks } from './styles';

const Navigation = () => {
  const theme = useTheme();

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Books', path: '/books' },
    // Add more navigation links as needed
  ];

  return (
    <StyledAppBar position="sticky">
      <NavContainer>
        <LogoContainer>
          <IconButton
            component={RouterLink}
            to="/"
            sx={{ color: theme.palette.primary.main }}
          >
            <MenuBookIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: theme.palette.text.primary,
              fontWeight: 700,
            }}
          >
            BookStore
          </Typography>
        </LogoContainer>

        <NavLinks>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              component={RouterLink}
              to={link.path}
              sx={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {link.title}
            </Link>
          ))}
        </NavLinks>
      </NavContainer>
    </StyledAppBar>
  );
};

export default Navigation;
