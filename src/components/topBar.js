import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
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
        position: 'fixed',
    },
    button: {
        color: 'inherit',
        alignItems: 'left',
    },
    typography: {
        fontFamily: 'nick',
        color: 'black',
        fontSize: 'calc(20px + (50 - 20) * ((100vw - 300px) / (1600 - 300)))',
    },
    links: {
        display: 'flex',
        paddingRight: '15px',
        textAlign: 'center',
    },
}

export default () => {
    const resume =
        window.location.pathname === '/resume' ? (
            <Button
                className="button"
                style={styles.button}
                href={Resume}
                download
            >
                <Typography
                    style={{ ...styles.typography, color: 'rgb(60, 240, 260)' }}
                >
                    Download
                </Typography>
            </Button>
        ) : (
            <Button
                className="button"
                style={styles.button}
                component={Link}
                to={'/resume'}
                rel="prefetch"
            >
                <Typography style={styles.typography}>Resume</Typography>
            </Button>
        )
    const contact =
        window.location.pathname === '/contact' ? (
            <Button
                className="button"
                style={styles.button}
                href="mailto:brendanc.fallon@gmail.com"
                rel="noopener noreferrer"
            >
                <Typography
                    style={{ ...styles.typography, color: 'rgb(60, 240, 260)' }}
                >
                    Email
                </Typography>
            </Button>
        ) : (
            <Button
                className="button"
                style={styles.button}
                component={Link}
                to={'/contact'}
                rel="prefetch"
            >
                <Typography style={styles.typography}>Contact</Typography>
            </Button>
        )

    return (
        <AppBar className={`top-bar`} style={styles.appBar}>
            <Button
                className="button"
                style={styles.button}
                component={Link}
                to={'/'}
                rel="prefetch"
            >
                <Typography style={{ ...styles.typography }}>
                    Brendan Fallon
                </Typography>
            </Button>
            <div className="links" style={{ ...styles.links }}>
                <div>
                    <Button
                        className="button"
                        style={styles.button}
                        component={Link}
                        to={'/'}
                        rel="prefetch"
                    >
                        <Typography
                            style={{
                                ...styles.typography,
                                color:
                                    window.location.pathname === '/'
                                        ? '#ff8534'
                                        : styles.typography.color,
                            }}
                        >
                            Bio
                        </Typography>
                    </Button>
                    <Button
                        className="button"
                        style={styles.button}
                        component={Link}
                        to={'/projects'}
                        rel="prefetch"
                    >
                        <Typography
                            style={{
                                ...styles.typography,
                                color:
                                    window.location.pathname === '/projects'
                                        ? '#ff8534'
                                        : 'black',
                            }}
                        >
                            Projects
                        </Typography>
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
