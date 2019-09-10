import React from 'react'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const Resume = require('../images/BrendanFallonResume.pdf')



export default () => {
    return (
        <div className="resume">
            <MuiThemeProvider>
                <TopBar />
            </MuiThemeProvider>
            <iframe height="100%" title="brendan-fallon-resume" src={Resume}></iframe>
        </div>
    )
}