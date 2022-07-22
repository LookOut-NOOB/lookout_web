import React from 'react'
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const SignUp = () => {
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
              Create account
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
                label="First & Last Name"
                id="names"
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
              <Button variant="contained" size="small" color="primary">
                Sign In
              </Button>
            </Typography>
            <Typography align="left" className="my-2">
              <Button size="small">Trouble Signing in</Button>
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <Button size="small">Terms of Service</Button>
            {'  '}
              <Button size="small">Privacy Policy</Button>
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Don't have an account, you can
              <Button size="small">Sign Up</Button> here.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SignUp