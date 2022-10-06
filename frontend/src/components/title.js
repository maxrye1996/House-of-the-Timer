import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper } from '@material-ui/core';
import { 
    Typography,
    Toolbar
} from '@material-ui/core';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 28,
    marginLeft: 15, 
    marginTop: 15,
    fontWeight: 'bold',
    color: "#d4d4d6",
  }
}));


const Title = () => {

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Toolbar className={classes.title}>
      <HourglassTopIcon style={{ fontSize: 30, marginTop:"8px" }}/>
      <Typography className={classes.title}>HOUSE OF THE TIMER</Typography>
    </Toolbar>
  )

};

export default Title
