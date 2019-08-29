import React from 'react'
import { Link } from 'react-router-dom'
// import TopBar from './topBar'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default () => {
    return (
        <div>
            <div className="home">
                <Link to="/bio" style={{textDecoration: 'none', color: 'white'}} prefetch="true">
                    <div className="quote">
                    <div className="quote1">The journey of a thousand miles</div>
                    <div className="quote2">begins with a single step.</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}