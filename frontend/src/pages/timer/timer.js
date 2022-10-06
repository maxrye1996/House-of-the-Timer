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

  const classes = useStyles();
  const theme = useTheme();

  return (
    <p>house of the timer</p>
  )

};

export default TimerTab
