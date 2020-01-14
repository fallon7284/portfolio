import React from 'react'

export default ({ userName, createdAt, message, replyName }) => {
    const date = new Date(createdAt).toDateString()
    const replyString =
        replyName !== undefined ? `${userName} replied to ${replyName}: ` : ''
    const style = replyName
        ? {
              width: '95%',
              alignSelf: 'right',
              backgroundColor: '#e7e7e7',
              marginLeft: '5%',
          }
        : {}
    return (
        <div className="message" style={style}>
            <div className="name-date">
                <div>{userName}</div>
                <div>{date}</div>
            </div>
            <div className="message-content">{`${replyString}${message}`}</div>
        </div>
    )
}
