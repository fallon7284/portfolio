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
        ' in late 2018, enrolling in one-week bootcamp prep course at Fullstack Academy.', 'The course ended on a Sunday, and on Monday I gave my two weeks notice at my job of nine years.',
        'I had learned just enough to know that this was the field that I wanted to pursue; one that I found more challenging and rewarding than I could have imagined.', 
        'At Fullstack I discovered a passion and talent for problem solving.' + 
        ' I also found a community of smart, curious people who were excited by the same things that excited me.', 
        'For 13 weeks on-campus, we struggled and learned, failed and succeeded together.  Here are some of the things that we built:']
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