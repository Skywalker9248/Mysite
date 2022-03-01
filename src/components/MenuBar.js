import React from 'react' 
import {Button}  from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { styled } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import {Link } from "react-router-dom";



function MenuBar() 
{
    return (
            <div>
                 <Bar > 
                     <Toolbar>
                        <Link to="/Welcome">                        
                            <B>
                                 <h3>Home</h3>
                            </B>
                       </Link>
                       <Link to="/About">  
                            <B>
                                 <h3>About Me</h3>
                            </B>
                        </Link>   
                        <Link to="/Projects">  
                            <B>
                                 <h3>My Projects</h3>
                            </B>
                        </Link>  
                        <Link to="/Contact">  
                            <B>
                                 <h3>Contact Me</h3>
                            </B>
                        </Link>                       
                    </Toolbar>        
                </Bar>
            </div>
        );
}

const Bar = styled(AppBar)
({
    
    background: '#202A44',
    position:'sticky',
    width:'100%vw',
    top:'0px',
    


});
const B= styled(Button)
({
    
    background: '#202A44',
    margin:'0.5px',
    color:'white',
    position:'relative',
    flexGrow:'1'
    
    
   
});

export default MenuBar;