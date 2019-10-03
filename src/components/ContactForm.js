import React from 'react'
import TextField from '@material-ui/core/TextField'
const x = require('../images/x.png')

const styles = {
    input: {
        width: "100%",
        height: '40px',
        backgroundColor: 'white',
        color: 'white'
    },
    message: {
        width: "100%",
        backgroundColor: '#303030'
    },
    resize: {
        fontSize: '10px'
    }
}

export default ({messageValid, state, handleChange, handleSubmit, replyingTo, closeContact}) => {
    return (
        <div style={{position: 'relative'}}>{
            replyingTo.name.length > 0 && 
                <div 
                    style={{
                        color: 'black', 
                        fontSize: '.5em'
                        }}
                >
                    <div 
                        style={{
                            borderRadius: '20px', 
                            cursor: 'pointer'
                        }} 
                        onClick={closeContact}
                    >
                        <img 
                            style={{
                                width: '6vh', 
                                height: 'auto'
                            }} 
                            src={x}
                        />
                    </div>{`replying to ${replyingTo.name}'s comment: \"${replyingTo.message}"`}
                </div>}
            <form className="form" onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
            }}>
            {/* <TextField 
                name="userName" 
                label="Your Name" 
                value={state.name} 
                onChange={handleChange}
                // variant="outlined"
                style={styles.input}
            /> */}
             <input 
                name="userName"
                placeholder="Name"
                value={state.name} 
                onChange={handleChange}
            />
            {/* <input style={{height: '10vh', backgroundImage: 'linear-gradient(to top, black, #303030)', marginTop: '2vh', color: 'white', fontFamily: 'futura', fontSize: '14px', width: '100%'}}></input> */}
            {/* <TextField 
                name="userEmail" 
                label="Your Email Address" 
                value={state.email} 
                onChange={handleChange}
                // variant="outlined"
                style={styles.input}
                InputProps={styles.resize}
                InputLabelProps={styles.resize}
            /> */}
            <input 
                name="userEmail"
                placeholder="Email"
                value={state.email} 
                onChange={handleChange}
            />
            {/* <TextField 
                name="message" 
                label="Your Message" 
                value={state.message} 
                onChange={handleChange}
                // variant="outlined"
                multiline
                // rowsMax="10"
                style={styles.input}
            /> */}
             <input 
                name="message"
                placeholder="Message"
                value={state.message} 
                onChange={handleChange}
            />
            {messageValid && 
                <div 
                    onClick={handleSubmit} 
                    className="comment-button"
                    style={{
                        marginTop: '2vh', 
                        cursor: 'pointer'}}
                >Submit
                </div>}
            </form>
        </div>
    )
}

