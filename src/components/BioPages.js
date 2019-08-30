import React from 'react'

export default ({story, clickLink, part}) => {
    return (
        <div key={part} className="bio-content">
            <div className="section" onClick={clickLink} style={{cursor: 'pointer'}}>
            {story[part]}
            </div>
        </div>
    )
}