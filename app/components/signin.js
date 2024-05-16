import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const SignInDialog = ({ open, onClose, onSwitchToSignUp }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const user = {
      phoneNumber: phoneNumber,
      pin: pin,
    };

    const url = "https://heyfood-clone-backend.onrender.com/login";
    axios.post(url, user)
      .then((response) => {
        localStorage.setItem("currentuser", JSON.stringify(response.data));
        onClose();
      })
      .catch((err) => {
        setError(true);
        // console.log(err);
      });
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ alignItems: 'left'}}>
      <Typography variant='h5' sx={{ paddingLeft: '20px', paddingTop: '10px', color: 'green'}}>Welcome back!</Typography>
      <Typography variant='h6' sx={{ paddingLeft: '20px', paddingTop: '10px', color: 'green'}}>Fill in your details to proceed</Typography>
      { error && <Typography variant='body1' sx={{paddingLeft: '20px', paddingTop: '15px', color: 'red'}}>Something went wrong pls try again!</Typography>}
      <DialogContent>
        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          margin="normal"
          type="tel"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <TextField
          fullWidth
          label="Enter 4-digit pin"
          variant="outlined"
          margin="normal"
          type="password"
          onChange={(e) => setPin(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit} sx={{ color: 'white', background: 'green', margin: '5px'}}>Sign In</Button>
      </DialogActions>

      <DialogContent>
        <Typography variant="subtitle2">
          Don't have an account?{' '}
          <Button
            variant="text"
            sx={{ color: 'green'}}
            onClick={onSwitchToSignUp}
          >
            Sign Up
          </Button>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
