import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
const Resume = require('../images/BrendanFallon.pdf')


const styles = {
    appBar: {
        fontFamily: 'sketch',
        float: 'top',
        boxShadow: 'none',
        backgroundColor: 'white',
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
        fontFamily: 'nick',
        color: "black",
        // fontSize: '2.5em'
        fontSize: 'calc(20px + (50 - 20) * ((100vw - 300px) / (1600 - 300)))'
    },
    links: {
        display: 'flex',
        paddingRight: '15px',
        textAlign: 'center'
    }
}




export default () => {
    const resume = window.location.pathname === '/resume' ? 
            <Button 
                className="button"
                style={styles.button} 
                href={Resume}
                download
                >
                <Typography style={{...styles.typography, color: 'rgb(60, 240, 260)'}}>Download</Typography>
            </Button> :
            <Button 
                className="button"
                style={styles.button} 
                component={Link} 
                to={'/resume'}
                prerender="true"
                >
                <Typography style={styles.typography}>Resume</Typography>
            </Button>
    const contact = window.location.pathname === '/contact' ?
            <Button 
                className="button"
                style={styles.button} 
                href="mailto:brendanc.fallon@gmail.com" 
                rel="noopener noreferrer"
                >
                <Typography style={{...styles.typography, color: 'rgb(60, 240, 260)'}}>Email</Typography>
            </Button> :
            <Button 
                className="button"
                style={styles.button} 
                component={Link} 
                to={'/contact'}
                prerender="true"
                >
                <Typography style={styles.typography}>Contact</Typography>
            </Button>
    
    return (
        <AppBar 
            className={`top-bar`}
            style={styles.appBar}
        >
            <Button 
                className="button"
                style={styles.button} 
                component={Link} 
                to={'/'}
                prefetch="true"
            >
                <Typography style={{...styles.typography, fontSize: 'calc(25px + (60 - 25) * ((100vw - 300px) / (1600 - 300)))'}}>Brendan Fallon</Typography>
            </Button>
            <div className="links" style={{...styles.links, flexFlow: 'none'}}>
                <div >
                <Button 
                    className="button"
                    style={styles.button} 
                    component={Link} 
                    to={'/bio'}
                    prefetch="true"
                    >
                    <Typography style={{...styles.typography, color: window.location.pathname === '/bio' ? '#ff8534' : styles.typography.color}}>Bio</Typography>
                </Button>            
                <Button 
                    className="button"
                    style={styles.button} 
                    component={Link} 
                    to={'/projects'}
                    prefetch="true"
                    >
                    <Typography style={{...styles.typography, color: window.location.pathname === '/projects' ? '#ff8534' : 'black'}}>Projects</Typography>
                </Button>
                </div>
                <div>
                {contact}
                {resume}
                </div>
            </div>
        </AppBar>
    )
  }