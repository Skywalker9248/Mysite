import React from "react";
import {styled, Grid, Typography, Box} from "@material-ui/core";
import {FaEnvelope, FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

function Contact() {
    return (
        <div style={{backgroundColor: "black" ,height : '100vh'}}>
           <Grid 
           container
           spacing={0}
           direction="column"
           alignItems="center"
            justifyContent="center">
              <TBox>
                  <IBox>{FaEnvelope}</IBox>
                  <Text> : ronsunny19@gmail.com</Text>
              </TBox>
              <TBox>
                  <IBox>{FaGithub}</IBox>
                  <Text> : <a href="https://github.com/Skywalker9248"> My Github Profile</a></Text>
              </TBox>
              <TBox>
                  <IBox>{FaLinkedinIn}</IBox>
                  <Text> : <a href="https://www.linkedin.com/in/ron-sunny/"> My LinkedIn Profile</a> </Text>
              </TBox>
              <TBox>
                  <IBox>{FaInstagram}</IBox>
                  <Text> :<a href="https://www.instagram.com/r_s_1_9/"> r_s_1_9</a></Text>
              </TBox>
           </Grid>
            
        </div>
    );
  }
const Text= styled(Typography)
({
    color:'#7CFC00',
    fontFamily: 'Poppins',
    fontWeight: 500,
    letterSpacing: '0.4px',
    position:'absolute',
    left: '60px',
})
const TBox= styled(Box)
({
    borderRadius:'15px', /* added */
    background: '#202020',
    display: 'flex',
    width:'50vh',
    flexDirection: 'column',
    padding: '10px 10px',
    margin:'10px 10px',
    position:'relative',
    boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)'
})
const IBox= styled(Box)
({
    height: '35px',
    width: '35px',
    borderRadius:'5px',
    padding:'5px 5px',
    background:'#c7c7c7',
    position:'relative',
})
export default Contact;