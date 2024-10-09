// components/Header.tsx

'use client'; // Client component for interactivity

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Link href="/" passHref>
          <Button color="inherit">GreenRoots</Button>
        </Link>
      </Typography>
      <Link href="/" passHref>
        <Button color="inherit">Home</Button>
      </Link>
      <Link href="/about" passHref>
        <Button color="inherit">About</Button>
      </Link>
      <Link href="/projects" passHref>
        <Button color="inherit">Projects</Button>
      </Link>
      <Link href="/contact" passHref>
        <Button color="inherit">Contact</Button>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
