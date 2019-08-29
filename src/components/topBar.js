import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
const Resume = require('../images/BrendanFallon.pdf')


const styles = {
    appBar: {
        fontFamily: 'futura', 
        backgroundColor: 'black', 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        opacity: 1,
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




export default () => {
        const resume = window.location.pathname === '/resume' ? 
                <Button 
                    style={styles.button} 
                    href={Resume}
                    download
                    >
                    <Typography style={{...styles.typography, color: 'rgb(60, 240, 260)'}}>Download</Typography>
                </Button> :
                <Button 
                    style={styles.button} 
                    component={Link} 
                    to={'/resume'}
                    prerender="true"
                    >
                    <Typography style={styles.typography}>Resume</Typography>
                </Button>
    
    return (
        <AppBar 
            className={`top-bar-`}
            style={styles.appBar}
        >
            <Button 
                style={styles.button} 
                component={Link} 
                to={'/'}
                prefetch="true"
            >
                <Typography style={{...styles.typography, fontSize: '2em'}}>Brendan Fallon</Typography>
            </Button>
            <div style={styles.links}>
                {resume}
                <Button 
                    style={styles.button} 
                    component={Link} 
                    to={'/contact'}
                    prefetch="true"
                >
                    <Typography style={styles.typography}>Contact</Typography>
                </Button>
                <Button 
                    style={styles.button} 
                    component={Link} 
                    to={'/projects'}
                    prefetch="true"
                >
                    <Typography style={styles.typography}>Projects</Typography>
                </Button>
                <Button 
                    style={styles.button} 
                    component={Link} 
                    to={'/bio'}
                    prefetch="true"
                >
                    <Typography style={styles.typography}>Bio</Typography>
                </Button>            
            </div>
        </AppBar>
    )
  }