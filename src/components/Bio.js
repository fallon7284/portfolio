import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import BioPages from './BioPages'

export default class Bio extends React.Component{
    constructor(){
        super()
        this.state = {
            part: 0,
            canClickToProjects: false
        }
        this.incrementStoryPart = this.incrementStoryPart.bind(this)
        this.story = [['I took the first step on my journey to Software Development in late 2018, enrolling in one-week bootcamp prep course at Fullstack Academy.', ' The day after the course ended I resigned from the job where I had spent nine years and enrolled in the full-time immersive program.'],
        ['At Fullstack I discovered a passion and talent for problem solving, and I found a community of smart, curious people who shared my excitement about solving technical challenges.', ' Click here to see some of the things that we built together and some things that I have built since:']]
    }

    componentDidMount(){
        this.setState({part: 0})
    }

    incrementStoryPart(){
        const part = this.state.part + 1
        this.setState({part})
        console.log('incrementing story', this.state.part)
    }

    render(){
        const pages = (this.state.part === this.story.length - 1) ? 
        <Link to="/projects" 
            style={{textDecoration: 'none'}} 
            prefetch="true">
            <BioPages 
                part={this.state.part} 
                story={this.story} 
                canClickToProjects={this.canClickToProjects}/>
        </Link>
        :
        <BioPages 
            part={this.state.part} 
            story={this.story} 
            canClickToProjects={this.canClickToProjects} 
            clickLink={this.incrementStoryPart}/>
        return (
            <div className="bio">
                <MuiThemeProvider>
                    <TopBar/>
                </MuiThemeProvider>
                {/* {pages} */}
                <div className="bio-content" >This is the body of my bio page</div>
            </div>
        )
    }
}