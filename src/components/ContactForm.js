import React from 'react'

export default ({messageValid, state, handleChange, handleSubmit}) => {
    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
            }}>
            <input name="name" placeholder="Your Name" value={state.name} onChange={handleChange}></input>
            <input name="email" placeholder="Your Email Address" value={state.email} onChange={handleChange}></input>
            <input name="message" placeholder="Your Message" value={state.message} onChange={handleChange}></input>
            {messageValid && <button type="submit">Submit</button>}
        </form>
    )
}

