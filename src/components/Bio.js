import React from 'react'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default () => {
    const style = {textDecoration: 'none'}
    return (
        <div className="bio">
            <MuiThemeProvider>
                <TopBar/>
            </MuiThemeProvider>
            <div className="bio-content">
                <a href="#two" id="one">
                    <div  style={style} className="section">
                    I took the first step on my journey to Software Development 
                    in late 2018, ending a career in NYC construction to enroll 
                    at Fullstack Academy.</div>
                </a>
                <a href="#three"id="two">
                    <div className="section">I discovered a passion and talent for problem solving as well as a 
                    culture of curiosity that excited me in a way I had long wished for.</div>
                </a>
                <a href="/projects" id="three">
                    <div className="section">I discovered a passion and talent for problem solving as well as a culture of curiosity that excited</div>
                </a>
            </div>
        </div>
    )
}