import React from "react";

import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

const EnterDetails = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Personal details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="plate"
            name="plate"
            label="License Plate"
            fullWidth
            autoComplete="license plate"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="lnum"
            name="lnum"
            label="Driver's License Number"
            fullWidth
            autoComplete="license number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="make"
            name="make"
            label="Car Brand"
            fullWidth
            autoComplete="car brand"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="model"
            name="model"
            label="Car Model"
            fullWidth
            autoComplete="Car model"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default EnterDetails;
