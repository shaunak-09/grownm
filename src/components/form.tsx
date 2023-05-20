import React, {  useState } from 'react';
import { TextField, Button, Box,Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
interface FormState {
  name: string;
  email: string;
  number: Number;
}

const initialFormState: FormState = {
  name: '',
  email: '',
 number: 0,
};


const Form: React.FC = () => {
  const navigate=useNavigate();
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log(JSON.stringify(formState));
    localStorage.setItem("profile-data",JSON.stringify(formState))
    toast.success("Login Successfull")
     // Do something with the form data
    setFormState(initialFormState);
     // Reset form fields
    navigate("/home")
   
    
  };
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
       {/* <ToastContainer/> */}
       <h1>Login</h1>
    <Box component="form"    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
     onSubmit={handleSubmit}
     >
      <TextField
        label="Name"
        name="name"
        value={formState.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <br />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <br />
      <TextField
        label="Number"
        name="number"
        type="number"
        value={formState.number}
        onChange={handleChange}
        margin="normal"
        required
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
    </Container>
    </ThemeProvider>
  );
};

export default Form;
