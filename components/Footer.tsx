// components/Footer.tsx
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ p: 2, backgroundColor: 'primary.main', color: 'white' }}>
    <Typography variant="body2" align="center">
      © {new Date().getFullYear()} GreenRoots. All rights reserved.
    </Typography>
    <Box sx={{ textAlign: 'center', mt: 1 }}>
      <Link href="#" color="inherit" sx={{ mx: 1 }}>
        Facebook
      </Link>
      <Link href="#" color="inherit" sx={{ mx: 1 }}>
        Twitter
      </Link>
      <Link href="#" color="inherit" sx={{ mx: 1 }}>
        Instagram
      </Link>
    </Box>
  </Box>
);

export default Footer;
