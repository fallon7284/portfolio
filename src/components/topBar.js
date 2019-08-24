import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';



export default () => {
console.log(window.location)
let page 
// switch(window.location.pathname.split('/').join('').toLowerCase()){
//     case 'bio':
//     page = 'black'
//     break
//     case 'contact':
//     page = 'red'
//     break 
//     case 'projects':
//     page = 'green'
//     break  
//     default:
//     page = '#808080'    
// }

const styles = {
    appBar: {
        fontFamily: 'futura', 
        backgroundColor: 'black', 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        // opacity: .5,
        position: 'fixed'
    },
    button: {
        color: "inherit",
        alignItems: 'left'
    },
    typography: {
        fontFamily: 'futura', 
        color: "white"
    },
    links: {
        display: 'flex',
        flexDirection: 'row-reverse',
        paddingRight: '15px'
    }
}
    return (
        <AppBar 
            className={`top-bar-`}
            style={styles.appBar}
        >
            <Button 
                style={styles.button} 
                component={Link} 
                to={'/'}
            >
                <Typography style={{...styles.typography, fontSize: '2em'}}>Brendan Fallon</Typography>
            </Button>
            <div style={styles.links}>
                {/* <Button 
                    style={styles.button} 
                    component={Link} 
                    to={'/resume'}
                    >
                    <Typography style={styles.typography}>Resume</Typography>
                </Button> */}
                <Button 
                    style={styles.button} 
                    component={Link} 
                    to={'/contact'}
                >
                    <Typography style={styles.typography}>Contact</Typography>
                </Button>
                <Button 
                    style={styles.button} 
                    component={Link} 
                    to={'/projects'}
                >
                    <Typography style={styles.typography}>Projects</Typography>
                </Button>
                <Button 
                    style={styles.button} 
                    component={Link} 
                    to={'/bio'}
                >
                    <Typography style={styles.typography}>Bio</Typography>
                </Button>            
            </div>
        </AppBar>
    )
  }