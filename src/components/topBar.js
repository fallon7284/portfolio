import history from '../history'
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import '../App.css';
import AppBar from 'material-ui/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';


export default () => {console.log(`top-bar-${window.location.pathname.split('/').join('').toLowerCase()}`)
    return (
        <div>
            <AppBar
                title="Brendan Fallon's Developer Portfolio"
                className={`top-bar-${window.location.pathname.split('/').join('').toLowerCase()}`}
                style={{fontFamily: 'futura'}}
            >
                <Button style={{color: "inherit"}} component={Link} to={'/projects'}>
                <Typography style={{fontFamily: 'futura', color: "white"}}>Projects</Typography>
                </Button>
                <Button style={{color: "inherit"}} component={Link} to={'/contact'}>
                <Typography style={{fontFamily: 'futura', color: "white"}}>Contact</Typography>
                </Button>
                <Button style={{color: "inherit"}} component={Link} to={'/bio'}>
                <Typography style={{fontFamily: 'futura', color: "white"}}>Bio</Typography>
                </Button>
                <Button style={{color: "inherit"}} component={Link} to={'/'}>
                <Typography style={{fontFamily: 'futura', color: "white"}}>Home</Typography>
                </Button>
            </AppBar>
        </div>
        )
  }