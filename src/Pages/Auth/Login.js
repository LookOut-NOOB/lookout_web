import React from "react";
import { useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/dashboard') 
  }

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleRecovery = () => {
    navigate("/recover");
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={6} md={8} className="mt-5">
        <Paper elevation={6}>
          <Box p={3} sx={{ width: 350 }}>
            <Typography variant="h5" component="div">
              Sign in with email
            </Typography>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                fullWidth
                label="Email"
                id="email"
                variant="standard"
              />
              <TextField
                fullWidth
                label="Password"
                id="password"
                variant="standard"
              />
            </FormControl>
            <Typography align="right" className="my-2">
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => handleSignIn()}
              >
                Sign In
              </Button>
            </Typography>
            <Typography align="left" className="my-2">
              <Button size="small" 
              onClick={() => handleRecovery()}
              >
                Trouble Signing in
              </Button>
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              By continuing, you are indicating that you accept our
              <Button size="small">Terms of Service</Button>
              and
              <Button size="small">Privacy Policy</Button>
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Don't have an account, you can
              <Button size="small" 
              onClick={() => handleSignUp()}
              >
                Sign Up
              </Button>{" "}
              here.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
