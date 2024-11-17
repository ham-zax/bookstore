// src/components/common/Card/index.jsx
import { Card as MUICard, CardContent, CardMedia, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

// Custom styled components
const StyledCard = styled(MUICard)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

export const Card = ({
  title,
  image,
  description,
  children,
  actions,
  ...props
}) => {
  return (
    <StyledCard {...props}>
      {image && (
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
      )}
      <CardContent>
        {title && (
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
        {children}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.node,
};
export default Card;
