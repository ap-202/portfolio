import './Landing.css';
import { Typography, Button } from '@mui/material';
//import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Grid } from '@mui/material';
import Typist from 'react-typist';
import '../node_modules/react-typist/dist/Typist.css'
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

function Landing() {
  return (
    <ThemeProvider theme = {theme}>
     
    <div className = "Landing">
      <Grid container direction="column" justifyContent="center" alignItems="center" align = "center" justify = "center" paddingTop={45} paddingBottom = {45}>
        <Grid item xs= { 12 }>
          <Typist cursor = {{show: false, hideWhenDone: true, blink: true, element: "|", hideWhenDoneDelay: 0}} avgTypingDelay = {125}>
            <Typography 
              variant = 'h1'
              className = 'title'
              paddingBottom={0}
              sx={{
                color: 'black',
                display: 'inline-block',
                fontWeight: 'bold',
                color: "#37FF8B"
              }}
            >
              Aakash Prasad
            </Typography>
          </Typist>
        </Grid>
        <Grid item xs= { 12 }>
          <Typist cursor = {{show: false, }} avgTypingDelay = {125}>
            <Typist.Delay ms = { 1950 } />
            <Typography 
              variant = 'h4'
              className = 'caption'
              sx = {{
                color: 'black',
                display: 'inline-block',
                color: "#37FF8B"
              }}
            >
              Student
            </Typography>
          </Typist>
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}


export default Landing;

