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
            replyName: '',
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
            const { data } = await axios.get('http://localhost:5000')
            this.setState({messages: data})
        } catch(error){
            console.log(error)
        }
    }

    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    comment = () => {
        this.setState({commenting: true, isReplyTo: null, replyName: ''})
    }

    closeContact = () => {
        this.setState({commenting: false, isReplyTo: null, replyName: ''})
    }

    reply = (name, id) => {
        console.log(name, id, 'REPLYING')
        this.setState({commenting: true, isReplyTo: id, replyName: name})
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
            console.log(data, messages, 'messages adding to state')
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
        const messageValid = (userName.length > 0 && userEmail.length > 0 && !!this.isEmail(userEmail) && !!message)
        return (
            <div>
                <MuiThemeProvider>
                    <TopBar/>
                </MuiThemeProvider>
                <div className="contact">
                    <div className="contact-left">
                        <div class-name="contact-me">
                        If you'd like to get in touch with me, you can
                        leave a message below, or click the email button in the top bar.  
                        I'd love to hear from you.
                        <button onClick={this.comment}>Leave a Comment</button>
                        </div>
                        <div className="form-area">
                        {this.state.commenting &&
                            <ContactForm 
                                closeContact={this.closeContact}
                                replyName={this.state.replyName}
                                className="comment-form"
                                handleSubmit={this.handleSubmit} 
                                messageValid={messageValid} 
                                handleChange={this.handleChange} 
                                state={this.state}
                            />}
                        </div>
                    </div>
                    <div className="messages">
                            {this.state.messages.map((m) => {
                                console.log(m)
                                return <Message 
                                    // replyClick={this.reply.bind(this)}
                                    replyClick={() => this.reply(m.userName, m.id)}
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