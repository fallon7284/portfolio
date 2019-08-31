import React, { useState } from 'react'
import MessageBody from './MessageBody'

export default ({number, userName, userEmail, createdAt, message, isReplyTo, replies, replyClick}) => {
    const seeRepliesString = replies.length ? `See ${replies.length} replies.` : ''
    const [repliesOpen, setRepliesOpen] = useState(0)
    const replyButton = repliesOpen ? 'Close replies' : seeRepliesString
    return (
        <div>
            <div className="message">
                <MessageBody  createdAt={createdAt} userName={userName} message={message} />
                <div className="replies">
                    <div onClick={() => {
                        if (!repliesOpen){
                            setRepliesOpen(number)
                        }
                        else {
                            setRepliesOpen(0)
                        }
                        }}>
                        {replyButton}
                    </div>
                    <div onClick={replyClick} style={{cursor: 'pointer'}}>
                        Reply to this comment
                    </div>
                </div>
            </div>
            {repliesOpen > 0 && replies.map(r => {
            console.log(repliesOpen)
            return (
            <MessageBody replyName={userName} className="message-reply" key={r.id} createdAt={r.createdAt} userName={r.userName} message={r.message}/>
            )
            })}
        </div> 
    )
}