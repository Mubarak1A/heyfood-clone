import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';

const SignUpDialog = ({ open, onClose, onSwitchToSignIn }) => {
  const [name, setName] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [pin, setPin] = useState("")

  const user = {
    name,
    phoneNumber,
    pin,
  }

  const handleSubmit = () => {
    setLoading(true)
    const url = "https://heyfood-clone-backend.onrender.com/restaurants/signup"
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
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
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          type="tel"
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          margin="normal"
          type="password"
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
        <Button variant="contained" color="primary" onClick={handleSubmit}>Sign Up</Button>
      </DialogActions>

      <DialogContent>
        <Typography variant="subtitle2">
          Already have an account?{' '}
          <Button
            variant="text"
            color="primary"
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
