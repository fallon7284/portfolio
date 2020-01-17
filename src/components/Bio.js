import React from 'react'
import TopBar from './topBar'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const me = require('../images/me.jpg')

export default () => {
    return (
        <div className="bio" style={{ display: 'block' }}>
            <MuiThemeProvider>
                <TopBar />
            </MuiThemeProvider>
            <div className="bio-body">
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'inline-block' }}>
                        <div>Hi. I'm Brendan. I'm a Software Engineer.</div>
                        <div>
                            I specialize in full stack JavaScript utilizing{' '}
                            <span>Node</span> and <span>Express</span> on the
                            back end, <span>React</span> and <span>Redux</span>{' '}
                            on the front end, <span>PostgreSQL</span> databases
                            and, of course, <span>HTML5</span> and{' '}
                            <span>CSS3</span>.
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <img
                        style={{ marginRight: '1%', marginBottom: '1%' }}
                        src={me}
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <div>
                            Here I am receiving my certificate of completion on
                            my last day at Fullstack Academy!
                        </div>
                        <div>
                            Want to know more about how I got here? Well...
                        </div>
                    </div>
                </div>
                <div>
                    In December of 2018, after completing a one-week bootcamp
                    prep course at Fullstack Academy, I decided that I wanted to
                    change my life by changing my career path, and I enrolled in
                    the full-time immersive program at Fullstack Academy.
                </div>
                <br />
                <div>
                    I love building software that is functional and provides a
                    delightful user experience. From <span>REST API</span>{' '}
                    design to reusable <span>React</span> components to complex{' '}
                    <span>state management</span>, I am focused and driven to
                    master the technologies that underpin visually appealing,
                    fast, and functional software.
                </div>
                <br />
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/projects">
                        <b className="link-bio-projects">
                            Check out some of my work!
                        </b>
                    </Link>
                </div>
            </div>
        </div>
    )
}
