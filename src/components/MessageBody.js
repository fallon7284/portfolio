import React from 'react'

export default ({ userName, createdAt, message, replyName }) => {
    const date = new Date(createdAt).toDateString()
    const replyString = (replyName !== undefined) ? `${userName} replied to ${replyName}: ` : ''
    return (
        <div className="message">
            <div className="name-date">
                <div>{userName}</div>
                <div>{date}</div>
            </div>
            <div className="message-content">{`${replyString}${message}`}</div>
        </div>
    )
}