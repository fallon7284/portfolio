import React from 'react'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import { FaLinkedin, FaGithub } from 'react-icons/fa'
import ContactForm from './ContactForm'
import Message from './Message'
import axios from 'axios'
const github = require('../images/github.png')
const linkedin = require('../images/linked.svg')

export default class Contact extends React.Component{
    constructor(){
        super()
        this.state = {
            userName: '',
            userEmail: '',
            message: '',
            isReplyTo: null,
            replyingTo: {name: '', message: ''},
            messages: [],
            commenting: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.getComments()
    }


    async getComments(){
        try{
            // const { data } = await axios.get('https://portfolio-comments.herokuapp.com/comments')
            const { data } = await axios.get('http://localhost:5000/comments')
            this.setState({messages: data})
        } catch(error){
            console.log(error)
        }
    }

    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    comment = () => {
        this.setState({commenting: !this.state.commenting, isReplyTo: null})
        window.scrollTo(0, 0)
    }

    closeContact = () => {
        this.setState({commenting: false, isReplyTo: null, replyingTo: {name: '', message: ''}})
    }

    reply = (name, message, id) => {
        const ellipse = message.length > 20 ? '...' : ''
        message = message.slice(0, 20) + ellipse
        this.setState({commenting: true, isReplyTo: id, replyingTo: {name, message}})
    }

    messageValid = (userName, userEmail, message) => {
        return (userName.length > 0 && userEmail.length > 0 && !!this.isEmail(userEmail) && !!message)
    }

    async handleSubmit(e){
        const { userName, userEmail, message, isReplyTo } = this.state
        const body = { userName, userEmail, message, isReplyTo, replies: [] }
        try {
            // const { data } = await axios.post('https://portfolio-comments.herokuapp.com/comments', body)
            const { data } = await axios.post('http://localhost:5000/comments', body)
            console.log(data)
            let messages
            if (data.isReplyTo){
                messages = this.state.messages.map(m => {
                    if (m.id === data.isReplyTo){
                        m.replies.push(data)
                    }
                    return m
                })
            }
            else messages = [data, ...this.state.messages]
            this.setState({
                messages: [...messages], 
                userEmail: '',
                userName: '',
                message: '',
                isReplyTo: null,
                commenting: false
        })
        } catch(error){
            console.log(error)
        }
    }

    isEmail = (email) => {
        const regex = /^([A-z\d\.-]+)@([A-z\d-]+)\.([A-z]{2,8})(\.[A-z]{2,8})?$/
        return (regex.exec(email) !== null)
    }

    render(){
        const { userName, userEmail, message } = this.state
        return (
            <div>
                <MuiThemeProvider>
                    <TopBar/>
                </MuiThemeProvider>
                <div className="contact">
                    <div className="contact-left">
                        <div className="contact-me">
                        <div className="link-icons" style={{marginTop: '5px'}}>
                            <a href="http://linkedin.com/in/brendanfallondev" target="blank" rel="noopener noreferrer">
                                {/* <FaLinkedin className="icons" /> */}
                                <img style={{width: '8vh', height: 'auto'}} src={linkedin}/>
                            </a>
                            <a href="http://github.com/fallon7284" target="blank" rel="noopener noreferrer">
                                {/* <FaGithub className="icons" /> */}
                                <img style={{width: '8vh', height: 'auto'}} src={github}/>
                            </a>  
                        </div>
                        If you'd like to get in touch with me, you can
                        leave a message below, or click the email button in the top bar.  
                        I'd love to hear from you.
                        </div>
                        <div 
                            className={`comment-button${this.state.commenting ? '-open' : ''}`}
                            style={{
                                marginTop: '1vh',
                                fontFamily: 'nick',
                                cursor: 'pointer',
                            }} 
                            onClick={() => {
                                this.comment()
                                }}>Leave a Comment</div>
                        <div className="form-area">
                        {this.state.commenting &&
                            <ContactForm 
                                closeContact={this.closeContact}
                                replyingTo={this.state.replyingTo}
                                className="comment-form"
                                handleSubmit={this.handleSubmit} 
                                messageValid={this.messageValid(userName, userEmail, message)} 
                                handleChange={this.handleChange} 
                                state={this.state}
                            />}
                        </div>
                    </div>
                    <div className="messages">
                            <div className="comments-title">COMMENTS</div>
                            <div className="messages-body">
                            {this.state.messages.map((m) => {
                                return <Message 
                                    replyClick={() => this.reply(m.userName, m.message, m.id)}
                                    key={m.id} 
                                    number={m.id}
                                    message={m.message} 
                                    userName={m.userName}
                                    userEmail={m.userEmail}
                                    createdAt={m.createdAt}
                                    isReplyTo={m.isReplyTo}
                                    replies={m.replies}
                                />
                            })}
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}