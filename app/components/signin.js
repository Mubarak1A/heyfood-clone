import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';

const SignInDialog = ({ open, onClose, onSwitchToSignUp }) => {
  const [phoneNumber, setPhoneNumber] = useState("")
    const [pin, setPin] = useState("")
    const [isSignIn, setIsSignIn] = useState(false)

    const handleSubmit = () => {
        const user = {
            phoneNumber,
            pin,
        }
        
        setLoading(true)
        const url = "https://heyfood-clone-backend.onrender.com/restaurants/signin"
        fetch(url, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(user)
        })
        .then((response) => {
            setLoading(false);
            if (!response.ok) {
                console.log('Network response was not ok');
            }
            return response.json();
        })
        .then((user) => {
            localStorage.setItem("currentuser", JSON.stringify(user));
            setIsSignIn(true)
            onClose()
        })
        .catch((err) => {
            setLoading(false)
            setError(true)
            //console.log(err)
        })
    }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Welcome back!</DialogTitle>
      <Typography variant='h4'>Fill in your details to proceed</Typography>
      <DialogContent>
        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          margin="normal"
          type="tel"
        />

        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary">Sign In</Button>
      </DialogActions>

      <DialogContent>
        <Typography variant="subtitle2">
          Don't have an account?{' '}
          <Button
            variant="text"
            color="primary"
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
