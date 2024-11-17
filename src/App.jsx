// src/App.jsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Stack, Typography, Box } from '@mui/material';
import { theme } from './theme';
import { Button } from './components/common/Button';
import { Card } from './components/common/Card';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={4}>
          <Box>
            <Typography variant="h6" gutterBottom>Variant Examples</Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>Color Examples</Typography>
            <Stack direction="row" spacing={2}>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="error">Error</Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>Size Examples</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </Stack>
          </Box>
        </Stack>
        <Card
          title="Premium Wireless Headphones"
          image="/images/headphones.jpg"
          description="High-quality noise-canceling headphones with 30-hour battery life"
          actions={
            <>
              <Button size="small" color="primary">
                Learn More
              </Button>
              <Button size="small" color="primary">
                Add to Cart
              </Button>
            </>
          }
        />
        
      </Container>
    </ThemeProvider>
  );
}

export default App;