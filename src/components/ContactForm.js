import React from 'react'
import TextField from '@material-ui/core/TextField'
const x = require('../images/x.png')

const styles = {
    input: {
        width: "100%",
        backgroundColor: 'white',
        color: 'white'
    },
    message: {
        height: "40vh",
        width: "100%",
        backgroundColor: '#303030'
    }
}

export default ({messageValid, state, handleChange, handleSubmit, replyingTo, closeContact}) => {
    return (
        <div>{replyingTo.name.length > 0 && <div style={{color: 'black', fontSize: '.5em'}}><div style={{borderRadius: '20px', cursor: 'pointer'}} onClick={closeContact}><img style={{width: '6vh', height: 'auto'}} src={x}/></div>{`replying to ${replyingTo.name}'s comment: \"${replyingTo.message}"`}</div>}
            <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
            }}>
            <TextField 
                name="userName" 
                label="Your Name" 
                value={state.name} 
                onChange={handleChange}
                // variant="outlined"
                style={styles.input}
            />
            {/* <input style={{height: '10vh', backgroundImage: 'linear-gradient(to top, black, #303030)', marginTop: '2vh', color: 'white', fontFamily: 'futura', fontSize: '14px', width: '100%'}}></input> */}
            <TextField 
                name="userEmail" 
                label="Your Email Address" 
                value={state.email} 
                onChange={handleChange}
                // variant="outlined"
                style={styles.input}
            />
            <TextField 
                name="message" 
                label="Your Message" 
                value={state.message} 
                onChange={handleChange}
                // variant="outlined"
                multiline
                // rowsMax="10"
                style={styles.input}
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

