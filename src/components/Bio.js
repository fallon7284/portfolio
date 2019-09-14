import React from 'react'
import TopBar from './topBar'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const me = require('../images/me.jpg')

export default () => {
    return (
        <div className="bio" style={{display: 'block'}}>
            <MuiThemeProvider>
                <TopBar/>
            </MuiThemeProvider>
            <div className="bio-body" >
                <div style={{display: 'flex'}}>
                    <div style={{display: 'inline-block'}}>
                        <div>Hi.  It's me: the developer you've been looking for.</div>
                        <div>I specialize in full stack JavaScript utilizing <span>Node</span> and <span>Express</span> on the back end, <span>React</span> on the front end with <span>React-Hooks</span> or <span>Redux</span> for state management, <span>PostgreSQL</span> databases and, of course,  <span>HTML5</span> and <span>CSS3</span>.</div>
                    </div>
                </div>
                <div className="middle">
                    <img style={{marginRight: '1%', marginBottom: '1%'}} src={me}/>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div>
                            Here I am receiving my certificate of completion on my last day at Fullstack Academy!
                        </div>
                        <div>
                            Want to know more about how I got here?  Well...
                        </div>
                    </div>
                </div>
                <div>Not very long ago I was contributing my daily efforts to building skyscrapers rather than of web applications, but in November of 2018 I took a week-long bootcamp prep course at Fullstack Academy and my life changed forever.</div>
                <div>First it was () =>{'{}'}s, []s, and ""s. Then for (let i = 0)s, while (condition)s, and {'{}'}s.</div>
                <div>The next thing I knew it was recursion, factory functions, classes, prototypal inheritance.</div>
                <div>The prep course ended on a Sunday, and after 9 years in my field I gave my notice the next day.</div>
                <div>I knew right away that I wanted this, I knew that I was good, and I couldn't wait.</div>
                <div>2 weeks of studying later I was accepted into the next full-time immersive cohort at Fullstack.</div>
                <div>5 more weeks and I was on the road to Chicago. <Link style={{textDecoration: 'none'}} to="/projects"><b style={{color: '#ff8534'}}>Check out some of the projects I built there and since!</b></Link></div>
                
            </div>
        </div>
    )
}