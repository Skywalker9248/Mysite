import React from "react";
import { styled } from '@material-ui/core/styles';
import { Card, Typography,CssBaseline, Grid, Container}  from '@material-ui/core';
import data from "./data.js";


class Projects extends React.Component {
    render() {
        return (
                < div style={{backgroundColor: "black" ,height : '100%vh'}}>
                    <CssBaseline/>
                    <Container>
                        <Grid 
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                         justifyContent="center"
                       >
                          {data.map(count=>
                            {
                                 return(
                                         <div key={count.id}>
                                                     <Grid item key={MyCard}>
                                                         <MyCard>
                                                             <Topic>
                                                                <p>{count.topic}</p>
                                                             </Topic>
                                                             <Des>
                                                                 <p>{count.des}</p>
                                                             </Des>
                                                         </MyCard>
                                                     </Grid>                       
                                         </div>
                                       )
                                       }
                                    )
                            }                
                        </Grid>
                    </Container>
                </div>
               )    
    }
}

const MyCard = styled(Card)({
    
      borderRadius:'15px', /* added */
      background: '#202020',
      display: 'flex',
      width:'80vw',
      flexDirection: 'column',
      padding: '15px 15px',
      marginTop:'15px',
      position:'relative',
      boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)'
      
});
     
const Topic = styled(Typography)
({
    
    color:'#FFA500',
    fontFamily: 'Poppins',
    fontSize: '32px',
    display: 'flex-right',
    fontWeight: 700,
    align: 'center', 
    
});

// const Des = styled(Typography)({
    
//     color:'c',
//     fontFamily: 'Poppins',
//     fontSize: '12.5px',
//     fontWeight: 500,
//     align: 'right',
//     position:'absolute',
//     letterSpacing: '0.4px',
//     bottom:'20px',
//     left:'20px'
      
// });



const Des = styled(Typography)
({
    
    color: '#7CFC00	',
    fontFamily: 'poppins',
    fontSize: '18.5px',
    align: 'center',
  
});



export default Projects;