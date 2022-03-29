import Stack from '@mui/material/Stack';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import MuiNextLink from '../components/MuiNextLink';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box component="footer" sx={{  py: 1, bgcolor: 'primary.main', width:"100vw" }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
        <MuiNextLink
          sx={{ textDecoration: 'none', color: '#939393' }}
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: 'none', color: '#939393' }}
          href="https://YourInstagramLink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: 'none', color: '#939393' }}
          href="https://YourTwitterLink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter fontSize="large" />
        </MuiNextLink>
      </Stack>

      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="#939393">Donner et Aider</Link> {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

const Test = () => <h1>This is the footer</h1>;

export default Footer;
