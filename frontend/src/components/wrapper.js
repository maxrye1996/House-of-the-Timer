import React, { Component } from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'


// wrapper to enable dark theme
class Wrapper extends Component {
  static childContextTypes = {
    changeTheme: PropTypes.func,
  }

  constructor(props) {
    super(props)
    const theme = createTheme({
      palette: { type: "dark" },
      typography: {
        useNextVariants: true,
      },
    })
    this.state = { toggle: true, theme: theme }
  }
  
  render = () => {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}

export default Wrapper
