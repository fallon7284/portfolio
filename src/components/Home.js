import React from 'react'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default () => {
    return (
        <div>
            <MuiThemeProvider>
                <TopBar/>
            </MuiThemeProvider>
            <div className="home"></div>
            {/* <Link to="/insta">Check me out on Instagram</Link> */}
        </div>
    )
}