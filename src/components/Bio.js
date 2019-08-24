import React from 'react'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default () => {
    return (
        <div className="bio">
            <MuiThemeProvider>
                <TopBar/>
            </MuiThemeProvider>
            <section id="bio-top">
                <div className="section">
                    top
                </div>
            </section>
            <section id="bio-middle">
                <div>
                    middle
                </div>
            </section>
            <section id="bio-bottom">
                <div>
                    bottom
                </div>
            </section>
        </div>
    )
}