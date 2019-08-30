import React from 'react'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FaLinkedin from 'react-icons/fa'
import ContactForm from './ContactForm'

export default class Contact extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
            messages: []
        }
    }

    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        const { name, email, message } = this.state
        this.setState({messages: [...this.state.messages, {name, email, message}], name: '', email: '', message: ''})
    }

    isEmail = (email) => {
        const regex = /^([A-z\d\.-]+)@([A-z\d-]+)\.([A-z]{2,8})(\.[A-z]{2,8})?$/
        return (regex.exec(email) !== null)
    }

    render(){
        const {name, email, message} = this.state
        const messageValid = (name.length > 0 && email.length > 0 && this.isEmail(email) && message)
        return (
            <div>
                <MuiThemeProvider>
                    <TopBar/>
                </MuiThemeProvider>
                <div className="contact">
                    {/* <div className="section"> */}
                        <div className="form">
                            <ContactForm handleSubmit={this.handleSubmit} messageValid={messageValid} handleChange={this.handleChange} state={this.state}/>
                        </div>
                        <div className="messages">
                                {this.state.messages.map((m, i) => {
                                    return <div key={i}>{`${m.name} at ${m.email} says ${m.message}`}</div>
                                })}
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}