import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default () => {
    return (
        <div>
            <MuiThemeProvider>
                <TopBar/>
            </MuiThemeProvider>
            Homepage
            <Link to="/projects">See projects page</Link>
            <Link to="/contact">Contact me</Link>
            <Link to="/bio">Read about who I am</Link>
            {/* <Link to="/insta">Check me out on Instagram</Link> */}
        </div>
    )
}