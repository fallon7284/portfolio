import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../projects'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default () => {
    return (
        <div>
            <MuiThemeProvider>
                <TopBar/>
            </MuiThemeProvider>
            {projects.map((p, i) => {
                return (
                    <div className="project-card" key={i}>
                        <div>{p.name}</div>
                        <div>{p.description}</div>
                        <img src={p.image}></img>
                    </div>
                )}
            )}
        </div>
    )
}