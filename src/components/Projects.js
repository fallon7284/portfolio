import React from 'react'
import projects from '../projects'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProjectThumb from './ProjectThumb'

export default () => {
    window.scrollTo(0, 0)
    return (
        <div className="projects">
            <MuiThemeProvider>
                <TopBar />
            </MuiThemeProvider>
            <div className="project-list">
                {projects.map((p, i) => {
                    return <ProjectThumb key={i} p={p} />
                })}
            </div>
        </div>
    )
}
