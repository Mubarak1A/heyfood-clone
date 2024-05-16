import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const SignUpDialog = ({ open, onClose, onSwitchToSignIn }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const user = {
      name: name,
      phoneNumber: phoneNumber,
      pin: pin,
    };

    const url = "https://heyfood-clone-backend.onrender.com/register";
    axios.post(url, user)
      .then((response) => {
        localStorage.setItem("currentuser", JSON.stringify(response.data));
        onClose();
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Typography variant='h5' sx={{ paddingLeft: '20px', paddingTop: '10px', color: 'green'}}>Sign Up!</Typography>
      <Typography variant='h6' sx={{ paddingLeft: '20px', paddingTop: '10px', color: 'green'}}>Enter your details to create an account.</Typography>
      { error && <Typography variant='body1' sx={{paddingLeft: '20px', paddingTop: '15px', color: 'red'}}>Something went wrong pls try again!</Typography>}
      <DialogContent>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          onChange={(e) => setName(e.target.value)}
        />

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
          label="Create 4 digit pin"
          variant="outlined"
          margin="normal"
          type="password"
          onChange={(e) => setPin(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit} sx={{ color: 'white', background: 'green', margin: '5px'}}>Sign Up</Button>
      </DialogActions>

      <DialogContent>
        <Typography variant="subtitle2">
          Already have an account?{' '}
          <Button
            variant="text"
            sx={{ color: 'green'}}
            onClick={onSwitchToSignIn}
          >
            Sign In
          </Button>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;
