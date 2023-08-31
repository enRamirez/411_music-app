import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignIn(props) {
  return (
    <Box
        component="form"
      sx={{
         margin: '150px auto',
         maxWidth: '300px',
         display: 'grid',
         gridGap: '10px'
        }}

      noValidate
      autoComplete='off'
>
      <TextField id= "outlined-basic" label="Email" variant='outlined' type='email' required></TextField>
      <TextField id= "outlined-basic" label="Password" variant='outlined' type='password' required></TextField>
      <Button variant="contained" onClick={() => props.setIsLoggedIn(true)}>Login</Button>

    </Box>
  );
}