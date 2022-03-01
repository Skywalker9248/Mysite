import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import { styled } from '@material-ui/core/styles';

// import yoda  from 'public';

function Welcome() {
    return (
        <div style={{backgroundColor: "black" ,height : '100vh'}} >
            <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center">
                <ImageBox>
                     <img src="/obiwan.gif" alt="logo"  width='100%vw' style={{ size: "100%"}} />
                </ImageBox>
                <p>
                    <Txt><h1 >...HEY, MY NAME IS RON SUNNY...</h1></Txt>
                </p>
             </Grid>   
           
        </div>
    );
  }
const ImageBox= styled(Box)
({
    
    flexGrow:'1',
    position:'sticky',
    padding:'10px',

 
   
});
const Txt= styled(Typography)
({
    color:'#7CFC00',
    fontFamily: 'Poppins',
    fontWeight: 500,
    letterSpacing: '0.4px',
})
export default Welcome;