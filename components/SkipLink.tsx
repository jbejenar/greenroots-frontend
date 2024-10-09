// components/SkipLink.tsx
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const SkipLink = styled('a')(() => ({
  position: 'absolute',
  top: '-40px',
  left: '0',
  backgroundColor: '#000',
  color: '#fff',
  padding: '8px',
  zIndex: 100,
  '&:focus': {
    top: '0',
  },
}));

const SkipToContent: React.FC = () => (
  <Link href="#main-content" passHref legacyBehavior>
    <SkipLink>Skip to Content</SkipLink>
  </Link>
);

export default SkipToContent;
