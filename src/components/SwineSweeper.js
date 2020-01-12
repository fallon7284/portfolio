import React from 'react'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default () => {
    return (
        <div>
            <MuiThemeProvider>
                <TopBar />
            </MuiThemeProvider>
            <iframe
                style={{
                    height: '100vh',
                    width: '100%',
                }}
                title="brendan-fallon-resume"
                src="https://sharp-cray-74c6dd.netlify.com/"
            ></iframe>
        </div>
    )
}
