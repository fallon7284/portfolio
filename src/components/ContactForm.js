import React from 'react'
import TextField from '@material-ui/core/TextField'
const x = require('../images/x.png')

export default ({
    messageValid,
    state,
    handleChange,
    handleSubmit,
    replyingTo,
    closeContact,
}) => {
    return (
        <div style={{ position: 'relative' }}>
            {replyingTo.name.length > 0 && (
                <div
                    style={{
                        color: 'black',
                        fontSize: '.5em',
                    }}
                >
                    <div
                        style={{
                            borderRadius: '20px',
                            cursor: 'pointer',
                        }}
                        onClick={closeContact}
                    >
                        <img
                            style={{
                                width: '6vh',
                                height: 'auto',
                            }}
                            src={x}
                        />
                    </div>
                    {`replying to ${replyingTo.name}'s comment: \"${replyingTo.message}"`}
                </div>
            )}
            <form
                className="form"
                onSubmit={e => {
                    e.preventDefault()
                    handleSubmit()
                }}
            >
                <input
                    name="userName"
                    placeholder="Name"
                    value={state.name}
                    onChange={handleChange}
                />
                <input
                    name="userEmail"
                    placeholder="Email"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    name="message"
                    placeholder="Message"
                    value={state.message}
                    onChange={handleChange}
                />
                {messageValid && (
                    <div
                        onClick={handleSubmit}
                        className="comment-button"
                        style={{
                            marginTop: '2vh',
                            cursor: 'pointer',
                        }}
                    >
                        Submit
                    </div>
                )}
            </form>
        </div>
    )
}
