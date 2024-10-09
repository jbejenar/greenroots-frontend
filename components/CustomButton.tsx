// components/CustomButton.tsx

'use client';

import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;  // Adding the 'label' prop
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, label, ...props }) => (
  <Button variant="contained" onClick={onClick} {...props}>
    {label}  {/* Using the label prop */}
  </Button>
);

export default CustomButton;
