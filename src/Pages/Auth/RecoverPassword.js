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

const RecoverPassword = () => {
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate("/");
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
              Recover Password
            </Typography>

            <Typography variant="p" component="div">
              Get Instructions on how to recover your account sent to this email
            </Typography>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                fullWidth
                label="Email"
                id="email"
                variant="standard"
              />
            </FormControl>
            <Typography className="my-2">
              <Typography align="right" className="my-2">
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => handleContinue()}
                >
                  Send
                </Button>
              </Typography>
              <Typography align="right" className="my-2">
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleContinue()}
                >
                  Cancel
                </Button>
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RecoverPassword;
