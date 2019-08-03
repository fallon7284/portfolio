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
            This is my bio, fam, check it out
            <Link to="/">Go home</Link>
        </div>
    )
}