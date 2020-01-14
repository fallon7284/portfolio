import React, { useState } from 'react'
import MessageBody from './MessageBody'

export default ({
    number,
    userName,
    userEmail,
    createdAt,
    message,
    isReplyTo,
    replies,
    replyClick,
}) => {
    const seeRepliesString = replies.length
        ? `See ${replies.length} ${replies.length === 1 ? 'reply' : 'replies'}.`
        : 'No replies'
    const [repliesOpen, setRepliesOpen] = useState(0)
    const replyButton = repliesOpen ? 'Close replies' : seeRepliesString
    const clickHandler =
        replies.length > 0
            ? () => {
                  if (!repliesOpen) {
                      setRepliesOpen(number)
                  } else {
                      setRepliesOpen(0)
                  }
              }
            : undefined

    return (
        <div>
            <div className="message-area">
                <MessageBody
                    createdAt={createdAt}
                    userName={userName}
                    message={message}
                />
                <div className="replies">
                    <div
                        onClick={clickHandler}
                        style={
                            replies.length
                                ? { cursor: 'pointer' }
                                : { cursor: 'default' }
                        }
                    >
                        {replyButton}
                    </div>
                    <div onClick={replyClick} style={{ cursor: 'pointer' }}>
                        Reply to this comment
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: '8px' }}>
                {repliesOpen > 0 &&
                    replies.map(r => {
                        return (
                            <MessageBody
                                replyName={userName}
                                key={r.id}
                                createdAt={r.createdAt}
                                userName={r.userName}
                                message={r.message}
                            />
                        )
                    })}
            </div>
        </div>
    )
}
