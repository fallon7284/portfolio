import React from 'react'
import { Link } from 'react-router-dom'
const cartoon = require('../images/devToon.png')
// import TopBar from './topBar'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default () => {
    return (
        <div>
            <div className="home">
                <Link to="/bio" style={{textDecoration: 'none', color: 'black'}} rel="prefetch">
                    <div className="quote">
                        <div className="quote1">
                             {"{ brendanFallon: "}
                        </div>
                        <div className="quote2">
                            {"['Fullstack', 'Software', 'Engineer']}"}
                        </div>
                    </div>
                    <img src={cartoon}></img>
                </Link>
            </div>
        </div>
    )
}