// import { CardMedia, Divider, Grid, Typography } from "@material-ui/core"
// import { Card,CardActions, CardContent, CardHeader } from "@material-ui/core";
// import { Box, IconButton } from "@material-ui/core";
// import { Button } from "@material-ui/core";
// import './Education.css';
// import sbhs from './sbhs.jpeg'
// import rutgers from './rutgers.jpeg'
// import gatech from './gatech.jpeg'
// import '@fontsource/roboto/400.css';


// function Education(){
//     return(
//         <div className = "Education">
//             <Grid container direction = "column">
//                 <Grid item xs = {3}>
//                     <Box p = {1} pl = {20} pb = {2}>
//                         <Typography variant = "h3" style = {{fontWeight: 500}}>Education</Typography>
//                         <Divider/>
//                     </Box>
//                 </Grid>
//                 <Grid item xs = {12}>
//                     <Grid display="flex" sx={{ flexGrow: 1 }} justifyContent = "center" container spacing = {1}>
//                         <Grid item xs = {3}>
//                             <Card style = {{width: '20vw', height: '65vh'}}>
//                                 <CardMedia component="img" height="180" image = {sbhs} alt = "sbhs"/>
//                                 <CardContent>
//                                     <Typography variant = "h5" style={{ fontWeight: 500 }}>South Brunswick High School</Typography >
//                                     <Typography variant = "subtitle1"style={{ fontWeight: 500, }}>South Brunswick, New Jersey</Typography>
//                                     <Typography variant = "body2"style={{ fontWeight: 400 }}>South Brunswick High School is a comprehensive community public high school serving students in ninth through twelfth grades at the school located in the Monmouth Junction.</Typography>
//                                 </CardContent>
//                                 <CardActions>
//                                     <Button>About</Button>
//                                     <Button>Coursework</Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                         <Grid item xs = {3}>
//                             <Card style = {{width: '20vw', height: '65vh'}}>
//                                 <CardMedia component="img" height="180" image = {rutgers} alt = "rutgers"/>
//                                 <CardContent>
//                                     <Typography variant = "h5" style={{ fontWeight: 500 }}>Rutgers University</Typography>
//                                     <Typography variant = "subtitle1"style={{ fontWeight: 500, }}>New Brunswick, New Jersey</Typography>
//                                     <Typography variant = "body2"style={{ fontWeight: 400 }}>Rutgers University–New Brunswick is one of three regional campuses of Rutgers University, New Jersey's public research university. It is located in New Brunswick and Piscataway. </Typography>
//                                 </CardContent>
//                                 <CardActions>
//                                     <Button>About</Button>
//                                     <Button>Coursework</Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                         <Grid item xs = {3}>
//                             <Card style = {{width: '20vw', height: '65vh'}}>
//                                 <CardMedia component="img" height="180" image = {gatech} alt = "gatech"/>
//                                 <CardContent>
//                                     <Typography variant = "h5" style={{ fontWeight: 500 }}>Georgia Institute of Technology</Typography>
//                                     <Typography variant = "subtitle1"style={{ fontWeight: 500, }}>Atlanta, Georgia</Typography>
//                                     <Typography variant = "body2"style={{ fontWeight: 400 }}>The Georgia Institute of Technology, commonly referred to as Georgia Tech or, in the state of Georgia, as Tech, is a public research university and institute of technology in Atlanta, Georgia.</Typography>
//                                 </CardContent>
//                                 <CardActions>
//                                     <Button>About</Button>
//                                     <Button>Coursework</Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }

// export default Education;

// const { Grid } = require("@nextui-org/react");

// <Grid.Container>
//     <Grid xs = {12}>

//     </Grid>
// </Grid.Container>

import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import { textAlign } from "@mui/system";
import { Text, useTheme, Card, Image, Button} from "@nextui-org/react";


function Education() {

    const { theme } = useTheme();

    return (
        <div style = {{paddingLeft:theme.space[24].value, paddingRight:theme.space[24].value, background: theme.colors.gray900.value}}>
        <Text id = "name"
            style = {{     
              color: 'white',
              fontSize: '400%',
              fontWeight: theme.fontWeights.extrabold.value,
              paddingBottom: 0,
              paddingTop: theme.space[10].value,
              paddingLeft: theme.space[24].value,
              paddingRight: theme.space[24].value,
              textAlign: 'center'
            }}
          >
            Education
          </Text>
            <Timeline position = "alternate" style = {{paddingLeft: theme.space[12].value, paddingRight: theme.space[12].value}}>
            <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        {/* <Card boredered hoverable shadow = "false" style = {{
                            background: '#000A29'
                        }}> */}
                            <Text
                                style = {{     
                                    color: theme.colors.blue300.value,
                                    fontSize: theme.fontSizes.md.value,
                                    fontWeight: theme.fontWeights.bold.value,
                                    padding: 0
                                }}
                            >
                                South Brunswick High School
                            </Text>
                            <Text
                                style = {{     
                                    color: theme.colors.gray500.value,
                                    fontSize: theme.fontSizes.sm.value,
                                    fontWeight: theme.fontWeights.bold.value,
                                    padding: 0
                                }}
                            >
                                2016 - 2020
                            </Text>
                            <Text
                                style = {{     
                                    color: '#FFF',
                                    fontSize: theme.fontSizes.sm.value,
                                    fontWeight: theme.fontWeights.normal.value,
                                    padding: 0
                                }}
                            >
                                South Brunswick High School is a comprehensive community public high school serving students in ninth through twelfth grades at the school located in the Monmouth Junction.
                            </Text>
                        {/* </Card> */}
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        {/* <Card boredered hoverable shadow = "false" style = {{
                            background: '#000A29'
                        }}> */}
                            <Text
                                style = {{     
                                    color: theme.colors.blue300.value,
                                    fontSize: theme.fontSizes.md.value,
                                    fontWeight: theme.fontWeights.bold.value,
                                    padding: 0
                                }}
                            >
                                Rutgers University - New Brunswick
                            </Text>
                            <Text
                                style = {{     
                                    color: theme.colors.gray500.value,
                                    fontSize: theme.fontSizes.sm.value,
                                    fontWeight: theme.fontWeights.bold.value,
                                    padding: 0
                                }}
                            >
                                2020 - 2021
                            </Text>
                            <Text
                                style = {{     
                                    color: '#FFF',
                                    fontSize: theme.fontSizes.sm.value,
                                    fontWeight: theme.fontWeights.normal.value,
                                    padding: 0
                                }}
                            >
                                Rutgers University–New Brunswick is one of three regional campuses of Rutgers University, New Jersey's public research university. It is located in New Brunswick and Piscataway.
                            </Text>
                        {/* </Card> */}
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        {/* <Card boredered hoverable shadow = "false" style = {{
                            background: '#000A29',
                        }}> */}
                            <Text
                                style = {{     
                                    color: theme.colors.blue300.value,
                                    fontSize: theme.fontSizes.md.value,
                                    fontWeight: theme.fontWeights.bold.value,
                                    padding: 0
                                }}
                            >
                                Georgia Institute of Technology
                            </Text>
                            <Text
                                style = {{     
                                    color: theme.colors.gray500.value,
                                    fontSize: theme.fontSizes.sm.value,
                                    fontWeight: theme.fontWeights.bold.value,
                                    padding: 0
                                }}
                            >
                                2021 - Present
                            </Text>
                            <Text
                                style = {{     
                                    color: '#FFF',
                                    fontSize: theme.fontSizes.sm.value,
                                    fontWeight: theme.fontWeights.normal.value,
                                    padding: 0
                                }}
                            >
                                The Georgia Institute of Technology, commonly referred to as Georgia Tech or, in the state of Georgia, as Tech, is a public research university and institute of technology in Atlanta, Georgia.
                            </Text>
                        {/* </Card> */}
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}

export default Education;