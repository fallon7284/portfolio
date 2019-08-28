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
        this.story = ['I took the first step on my journey to Software Development' +
        ' in late 2018, ending a career in NYC construction to enroll ' +
        'at Fullstack Academy.', 'I discovered a passion and talent for problem solving as well as a' + 
        'culture of curiosity that excited me in a way I had long wished for.', 
        'this story also has a third part']
    }

    incrementStoryPart(){
        const part = this.state.part + 1
        this.setState({part})
        console.log('incrementing story', this.state.part)
    }

    render(){
        console.log(this.state.part)
        const pages = (this.state.part === this.story.length - 1) ? 
        <Link to="/projects" style={{textDecoration: 'none'}} prefetch="true"><BioPages 
            part={this.state.part} 
            story={this.story} 
            canClickToProjects={this.canClickToProjects}/></Link>
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
                {pages}
            </div>
        )
    }
}