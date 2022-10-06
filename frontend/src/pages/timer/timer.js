import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper } from '@material-ui/core';


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
    return data
  };


  

  return (
    <p>house of the timer</p>
  )

};

export default TimerTab
