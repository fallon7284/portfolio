import React from 'react'
import projects from '../projects'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProjectThumb from './ProjectThumb'


export default () => {
    return (
        <div className="background">
            <div className="content" style={{position: 'fixed', left: 0, right: 0, zIndex: 9999}}>
                <MuiThemeProvider>
                    <TopBar/>
                </MuiThemeProvider>
            </div>
            <div className="project-list" style={{position: 'fixed', left: 0, right: 0, zIndex: 1}}>
                {projects.map((p, i) => {
                    return (
                        <ProjectThumb key={i} p={p}/>
                    )}
                )}
            </div>
        </div>
    )
}