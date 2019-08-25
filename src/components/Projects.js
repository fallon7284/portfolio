import React from 'react'
import projects from '../projects'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProjectThumb from './ProjectThumb'


export default () => {
    return (
        <div className="projects">
        <div className="background"></div>
            <div className="content">
                <MuiThemeProvider>
                    <TopBar/>
                </MuiThemeProvider>
            </div>
            <div className="project-list">
                {projects.map((p, i) => {
                    return (
                        <ProjectThumb key={i} p={p}/>
                    )}
                )}
            </div>
        </div>
    )
}