import React from "react";
import { styled } from '@material-ui/core/styles';
import { Grid, Typography} from "@material-ui/core";


function About() 
{
  return (
    <div style={{backgroundColor: "black" ,height : '100%vh'}}>
      <Grid
        container
        spacing={0}
        direction="column">
        <Topic>
           <b><p>BASIC INFO</p></b>
         </Topic>
        <Txt>
          <b>
            <p>RON SUNNY</p>
            WEB DEVELOPER, SOFTWARE ENGINEER, BLOCKCHAIN DEVELOPER
        </b>
        </Txt>
        <Topic>
         <p><b>ACHIEVEMENTS</b></p>
       </Topic>
       <Txt>
         <b>
         <ul>
          <li>Selected to National level for SMART India Hackathon</li>
        </ul>
         </b>
       </Txt>
       <Topic>
         <p><b>CERTIFICATIONS</b></p>
       </Topic>
       <Txt>
         <b>
         <ul>
          <li>C Certification by IIT Bombay</li>
          <li>C++, Python, Javascript Certification by Sololearn</li>
          <li>Image Processing</li>
        </ul>
         </b>
       </Txt>
       <Topic>
         <p><b>EDUCATION</b></p>
       </Topic>
       <Txt>
         <b>
         <ul>
          <li>Bachelor of Technology - Providence College of Engineering (KTU) [Graduating:2022]</li>
          <li>Class XII- MarThoma Senior Secondary School [Graduated:2018]</li>
          <li>Class X- Believers Church Residential School[Graduated:2016]</li>
        </ul>
         </b>
       </Txt>
      </Grid>
    </div>
  );
  
}

const Topic= styled(Typography)
({
    color:'lightgreen',
    fontFamily: 'Poppins',
    fontWeight: 500,
    letterSpacing: '0.5px',
    fontSize:'32px',
    padding : '5px'
})

const Txt= styled(Typography)
({
    color:'white',
    fontFamily: 'Poppins',
    fontWeight: 500,
    letterSpacing: '0.4px',
    fontSize:'18.72px',
    padding : '5px'
})

export default About;