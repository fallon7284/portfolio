import React from 'react'
import TextField from '@material-ui/core/TextField'

const styles = {
    input: {
        height: "20vh",
        width: "100%"
    },
    message: {
        height: "40vh",
        width: "100%"
    }
}

export default ({messageValid, state, handleChange, handleSubmit}) => {
    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
            }}>
            <TextField 
                name="name" 
                label="Your Name" 
                value={state.name} 
                onChange={handleChange}
                variant="outlined"
                style={styles.input}
            />
            <TextField 
                name="email" 
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
            {messageValid && <button type="submit">Submit</button>}
        </form>
    )
}

