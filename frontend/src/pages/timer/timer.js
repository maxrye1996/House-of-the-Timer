import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper, Typography } from '@material-ui/core';


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


const TimerTab = () => {

  const ENDPOINT = "http://localhost:5000" // needs changing to some component file?

  const classes = useStyles();
  const theme = useTheme();

  const [timers, setTimers] = React.useState([])
  const [timerContent, setTimerContent] = React.useState([])

  const makePostRequest = (path, data) => {
    fetch(`${ENDPOINT}${path}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function (response) {
      console.log(response);
    })
  };

  const makeGetRequest = async (path) => {
    const response = await fetch(`${ENDPOINT}${path}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getTimers = () => {
      // get timers from backend and create elements
      makeGetRequest("/api/get_timers");

      // add test one for now 
      let temp = [<TimerItem name="Test" timeSince="1 year, 200 days, 17 hours, 5 minutes, 3 seconds" />];
      setTimerContent(temp);
    }
    getTimers()
  }, [])


  return (
    <Grid container>
      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <Grid container>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant='h5'>Name:</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant='h5'>Time Since:</Typography>
          </Grid>

          
        </Grid>
        {timerContent}
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
    </Grid>
    
  )

};

const TimerItem = ({ name, timeSince }) => {
  return (
    <Grid container>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <Typography variant='h5'>{name}</Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <Typography variant='h5'>{timeSince}</Typography>
      </Grid>
    </Grid>
  )
}

export default TimerTab
