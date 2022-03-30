// import './Landing.css';
// import { Typography } from '@mui/material';
// //import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import { Grid } from '@mui/material';
// import Typist from 'react-typist';
// import '../node_modules/react-typist/dist/Typist.css'
// import { IconButton } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';
// import { LinkedIn } from '@mui/icons-material';



// function Landing() {
//   return (     
//     <div className = "Landing">
//       <Grid container direction="column" justifyContent="center" alignItems="center" align = "center" justify = "center" paddingTop={45} paddingBottom = {45}>
//         <Grid item xs= { 12 }>
//           {/* <Typist cursor = {{show: false, hideWhenDone: true, blink: true, element: "|", hideWhenDoneDelay: 0}} avgTypingDelay = {125}> */}
//             <Typography variant = 'h1' className = 'title' paddingBottom={0} sx={{color: 'black', display: 'inline-block',fontWeight: 'bold'}} style = {{fontWeight: 500}}>
//               Aakash Prasad
//             </Typography>
//           {/* </Typist> */}
//         </Grid>
//         <Grid item xs= { 12 } paddingTop={0} marginTop={0}>
//           {/* <Typist cursor = {{show: false, }} avgTypingDelay = {125}> */}
//             {/* <Typist.Delay ms = { 1950 } /> */}
//             <Typography variant = 'h4' className = 'caption' sx = {{color: 'black', display: 'inline-block' }} style = {{fontWeight: 400}}>
//               Developer
//             </Typography>
//           {/* </Typist> */}
//         </Grid>
//         <Grid display="flex" sx={{ flexGrow: 1 }} justifyContent = "center" container spacing = {0} paddingTop={0}>
//           <Grid item xs = {4} sx = {{padding: '0%', margin: '0%'}}>
//             {/* <IconButton size="large" sx={{color: "#00D620"}} href = ""><Phone/></IconButton> */}
//             <IconButton size="large" style={{color: "#00D620", padding: "2%"}} href = ""><Email/></IconButton>
//             <IconButton size="large" style={{color: "#00D620",padding: "2%"}} href = "https://www.linkedin.com/in/aakash-prasad/"><LinkedIn/></IconButton>
//             <IconButton size="large" style={{color: "#00D620",padding: "2%"}} href = "https://github.com/ap-202"><GitHub/></IconButton>
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }


// export default Landing;

import { Button, Text, Grid } from '@nextui-org/react';
import { useTheme } from '@nextui-org/react';
import Education from './Education';
import { IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { Phone } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Divider } from '@nextui-org/react';


function Landing() {

  const { theme } = useTheme();

  return(
    <div className = "Landing"
      style = {{
        background: theme.colors.gray900.value,
        height: '200vh',
        width: '100vw'
      }}
    
    >
      <Grid.Container direction = "row" style = {{paddingBottom: '40%', height: '100vh'}}>
        <Grid xs = {12}>
          <Text id = "name"
            style = {{     
              color: 'white',
              fontSize: '500%',
              fontWeight: theme.fontWeights.extrabold.value,
              paddingBottom: 0,
              paddingTop: theme.space[48].value,
              paddingLeft: theme.space[24].value,
              paddingRight: 0,
            }}
          >
            Aakash Prasad
          </Text>
        </Grid>
        <Grid xs = {6}>
          <Text id = "cap"
            style = {{     
              color: theme.colors.blue300.value,
              fontSize: theme.fontSizes.md.value,
              fontWeight: theme.fontWeights.bold.value,
              paddingLeft: theme.space[24].value,
              paddingTop:0
            }}
          >
            &lt;Developer/&gt;
          </Text>
        </Grid>
        <Grid  xs = {12}>
             {/* <IconButton size="large" sx={{color: "#00D620"}} href = ""><Phone/></IconButton> */}
             <IconButton size="large" style={{color: theme.colors.blue300.value ,paddingLeft: theme.space[24].value}} href = ""><Email/></IconButton>
             <IconButton size="large" style={{color: theme.colors.blue300.value ,paddingLeft: theme.space[6].value}} href = "https://www.linkedin.com/in/aakash-prasad/"><LinkedIn/></IconButton>
             <IconButton size="large" style={{color: theme.colors.blue300.value ,paddingLeft: theme.space[6].value}} href = "https://github.com/ap-202"><GitHub/></IconButton>
        </Grid>
      </Grid.Container>
      
      {/* <Grid.Container 
        spacing = {0}
        justify = "left"
        gap = {0}
        style = {{
          paddingLeft: theme.space[24].value
        }}
      > */}
      {/*         
          <Button.Group
            style = {{
              paddingLeft: theme.space[18].value
            }}
            size = "lg"
          >
            <Button auto light style = {{color: theme.colors.blue100.value}} icon = {<Mail/>}></Button>
            <Button auto light style = {{color: theme.colors.blue100.value}} icon = {<GitHub/>}></Button>
            <Button auto light style = {{color: theme.colors.blue100.value}} icon = {<LinkedIn/>}></Button>
          </Button.Group> */}
      {/* </Grid.Container> */}
      
      <Education />
    </div>
  );
}

export default Landing;