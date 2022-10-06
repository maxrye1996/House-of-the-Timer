import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper } from '@material-ui/core';

import TimerTab from './timer/timer';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0 auto",
    marginTop: 25,
    width: "100%",
    fontFamily: "Roboto !important",
  },
  mainPaper: {
    width: "calc(100% + 50px)",
    marginLeft: -25,
    padding: 0,
  },
}));


const HouseOfTheTimer = () => {

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <CssBaseline />
      <div>
        <Router>
          <Grid container spacing={8} className={ classes.main }>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Paper className={ classes.mainPaper }>
                <Route exact path='/timer' component={ TimerTab } />
                <Route exact path='/' render={ () => <Redirect to="/timer" /> } />
              </Paper>
            </Grid>
          </Grid>
        </Router>
      </div>
    </div>
  )

};

export default HouseOfTheTimer
