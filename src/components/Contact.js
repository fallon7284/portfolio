import React from 'react'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FaLinkedin from 'react-icons/fa'
import ContactForm from './ContactForm'
import Message from './Message'
import axios from 'axios'

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
    }

    closeContact = () => {
        this.setState({commenting: false, isReplyTo: null, replyingTo: {name: '', message: ''}})
    }

    reply = (name, message, id) => {
        const ellipse = message.length > 20 ? '...' : ''
        message = message.slice(0, 20) + ellipse
        console.log(name, message)
        this.setState({commenting: true, isReplyTo: id, replyingTo: {name, message}})
    }

    messageValid = (userName, userEmail, message) => {
        return (userName.length > 0 && userEmail.length > 0 && !!this.isEmail(userEmail) && !!message)
    }

    async handleSubmit(e){
        const { userName, userEmail, message, isReplyTo } = this.state
        const body = { userName, userEmail, message, isReplyTo, replies: [] }
        console.log('submitting', body)
        try {
            const { data } = await axios.post('http://localhost:5000', body)
            let messages
            if (data.isReplyTo){
                messages = this.state.messages.map(m => {
                    console.log(m)
                    if (m.id === data.isReplyTo){
                        m.replies.push(data)
                    }
                    return m
                })
            }
            else messages = [...this.state.messages, data]
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
                        If you'd like to get in touch with me, you can
                        leave a message below, or click the email button in the top bar.  
                        I'd love to hear from you.
                        </div>
                        <button 
                            style={{
                                height: '10vh',
                                backgroundImage: 'linear-gradient(to top, black, #303030)', 
                                marginTop: '2vh', 
                                color: 'white', 
                                fontFamily: 'futura, open sans condensed', 
                                fontSize: '14px'}} 
                            onClick={() => {
                                this.comment()
                                console.log(this.state)
                                }}>Leave a Comment</button>
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
        )
    }
}