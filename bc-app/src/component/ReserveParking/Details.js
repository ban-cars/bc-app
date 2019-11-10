import React from "react";

import { Typography, Grid, TextField } from "@material-ui/core";

const EnterDetails = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Parking spot details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Address: 1551 Charland Ave Coquitlam, BC V3K 3L6
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Owner: John Smith
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Owner number: 416-567-1111
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Price: $1.50/hr
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="start" label="Start time" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="end" label="End time" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default EnterDetails;
