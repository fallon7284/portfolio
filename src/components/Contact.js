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
            messages: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.getComments()
    }


    async getComments(){
        try{
            const { data } = await axios.get('http://localhost:5000')
            this.setState({messages: [...data]})
        } catch(error){
            console.log(error)
        }
    }

    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    async handleSubmit(e){
        const { userName, userEmail, message, isReplyTo } = this.state
        const body = { userName, userEmail, message, isReplyTo }
        try {
            const { data } = await axios.post('http://localhost:5000', body)
            console.log(body, data)
            this.setState({messages: [...this.state.messages, data]})
        } catch(error){
            console.log(error)
        }
    }

    isEmail = (email) => {
        const regex = /^([A-z\d\.-]+)@([A-z\d-]+)\.([A-z]{2,8})(\.[A-z]{2,8})?$/
        return (regex.exec(email) !== null)
    }

    render(){
        const {userName, userEmail, message} = this.state
        const messageValid = (userName.length > 0 && userEmail.length > 0 && !!this.isEmail(userEmail) && !!message)
        console.log(messageValid)
        return (
            <div>
                <MuiThemeProvider>
                    <TopBar/>
                </MuiThemeProvider>
                <div className="contact">
                    {/* <div className="section"> */}
                        <div className="form">
                            <ContactForm 
                                handleSubmit={this.handleSubmit} 
                                messageValid={messageValid} 
                                handleChange={this.handleChange} 
                                state={this.state}
                            />
                        </div>
                        <div className="messages">
                                {this.state.messages.map((m) => {
                                    return <Message 
                                        key={m.id} 
                                        message={m.message} 
                                        userName={m.userName}
                                        userEmail={m.userEmail}
                                        createdAt={m.createdAt}
                                        isReplyTo={m.isReplyTo}
                                    />
                                })}
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}