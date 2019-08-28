import React from 'react'
import TopBar from './topBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
        console.log(message)
        this.setState({messages: [...this.state.messages, {name, email, message}]})
        this.setState({name: '', email: '', message: ''})
    }

    isEmail = (email) => {
        return (
            email.split('@').length === 2 &&
            email.split('.').length > 1
            )
    }

    render(){
        console.log(this.state)
        const {name, email, message} = this.state
        const messageValid = (name.length > 0 && email.length > 0 && this.isEmail(email) && message)
        return (
            <div className="contact">
                <MuiThemeProvider>
                    <TopBar/>
                </MuiThemeProvider>
                <div className="contact">
                    <a href="mailto:brendanc.fallon@gmail.com" rel="noopener noreferrer">Shoot me an email
                    </a>
                    <form onSubmit={(e) => {
                            e.preventDefault()
                            this.handleSubmit()
                        }}>
                        <input name="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange}></input>
                        <input name="email" placeholder="Your Email Address" value={this.state.email} onChange={this.handleChange}></input>
                        <input name="message" placeholder="Your Message" value={this.state.message} onChange={this.handleChange}></input>
                        {messageValid && <button type="submit">Submit</button>}
                    </form>
                    </div>
                <div className="messages">
                        {this.state.messages.map(m => {
                            return <div>{`${m.name} at ${m.email} says ${m.message}`}</div>
                        })}
                </div>
            </div>
        )
    }
}