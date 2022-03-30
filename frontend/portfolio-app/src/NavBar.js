import { appBarClasses } from "@mui/material";
import { AppBar } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

function NavBar(){
    return(
        <Box sx = {{flexGrow : 1}}>
            <AppBar style={{backgroundColor: "#1C4670"}}>
                <Toolbar>
                    <Grid container direction = "row" justifyContent="center" alignItems="center" align = "center" justify = "center">
                        <Grid item xs = {2}>
                            <Button sx = {{}}>
                                <Typography 
                                    variant = 'body1'
                                    className = 'caption'
                                    sx = {{
                                        color: 'black',
                                        display: 'inline-block',
                                        font: "arial",
                                        color: "#EAEAE0 "
                                    }}
                                    >
                                    About Me
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs = {2}>
                            <Button sx = {{}}>
                                <Typography 
                                    variant = 'body1'
                                    className = 'caption'
                                    sx = {{
                                        color: 'black',
                                        display: 'inline-block',
                                        font: "arial",
                                        color: "#EAEAE0"
                                    }}
                                    >
                                    Education
                                </Typography>
                            </Button>
                        </Grid>  
                        <Grid item xs = {2}>
                            <Button sx = {{}}>
                                <Typography 
                                    variant = 'body1'
                                    className = 'caption'
                                    sx = {{
                                        color: 'black',
                                        display: 'inline-block',
                                        font: "arial",
                                        color: "#EAEAE0"
                                    }}
                                    >
                                    Work
                                </Typography>
                            </Button>
                        </Grid>  
                        <Grid item xs = {2}>
                            <Button sx = {{}}>
                                <Typography 
                                    variant = 'body1'
                                    className = 'caption'
                                    sx = {{
                                        color: 'black',
                                        display: 'inline-block',
                                        font: "arial",
                                        color: "#EAEAE0"
                                    }}
                                    >
                                    Projects
                                </Typography>
                            </Button>
                        </Grid>  
                        <Grid item xs = {2}>
                            <Button sx = {{}}>
                                <Typography 
                                    variant = 'body1'
                                    className = 'caption'
                                    sx = {{
                                        color: 'black',
                                        display: 'inline-block',
                                        font: "arial",
                                        color: "#EAEAE0"
                                    }}
                                    >
                                    Contacts
                                </Typography>
                            </Button>
                        </Grid>                  
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;