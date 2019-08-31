import React from 'react'

export default ({userName, userEmail, createdAt, message, isReplyTo}) => {
    const date = new Date(createdAt).toDateString()
    let messageClass = isReplyTo !== null ? "message-reply" : "message"
    console.log(isReplyTo, messageClass)
    return (
        <div className={messageClass}>
            <div>{userName}</div>
            <div>{date}</div>
            <div>{message}</div>
            <div>{isReplyTo}</div>
            <button>Reply</button>
        </div>
    )
}