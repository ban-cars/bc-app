import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button } from "@material-ui/core";

class UserSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 100
    };
  }

  render() {
    return (
      <main>
        <Paper>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography>{this.props.userSpot[0].location}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{`${this.state.time} minutes`}</Typography>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                this.setState({ time: this.state.time + 30 });
              }}
            >
              Add Time
            </Button>
          </Grid>
        </Paper>
      </main>
    );
  }
}

export default UserSpot;
