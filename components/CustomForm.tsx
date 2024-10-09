// components/CustomForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import CustomButton from './CustomButton';

interface FormInputs {
  name: string;
  email: string;
  // Add other form fields as needed
}

const CustomForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Placeholder for form submission logic
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        {...register('name', { required: true })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        {...register('email', { required: true })}
        type="email"
        fullWidth
        margin="normal"
      />
      {/* Additional form fields */}
      <CustomButton type="submit" color="primary">
        Submit
      </CustomButton>
    </form>
  );
};

export default CustomForm;
