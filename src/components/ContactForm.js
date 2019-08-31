import React from 'react'
import TextField from '@material-ui/core/TextField'

const styles = {
    input: {
        height: "20vh",
        width: "100%",
        backgroundColor: '#303030',
        color: '#303030'
    },
    message: {
        height: "40vh",
        width: "100%"
    }
}

export default ({messageValid, state, handleChange, handleSubmit, replyName, closeContact}) => {
    return (
        <div>{replyName.length > 0 && <div><div style={{color: 'red', borderRadius: '20px', cursor: 'pointer', backgroundColor: 'black'}} onClick={closeContact}>X</div>{`replying to ${replyName}`}</div>}
            <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
            }}>
            { messageValid && <button type="submit">Submit</button>}
            <TextField 
                name="userName" 
                label="Your Name" 
                value={state.name} 
                onChange={handleChange}
                variant="outlined"
                style={styles.input}
            />
            <TextField 
                name="userEmail" 
                label="Your Email Address" 
                value={state.email} 
                onChange={handleChange}
                variant="outlined"
                style={styles.input}
            />
            <TextField 
                name="message" 
                label="Your Message" 
                value={state.message} 
                onChange={handleChange}
                variant="outlined"
                multiline
                rowsMax="10"
                style={styles.message}
            />
            </form>
        </div>
    )
}

