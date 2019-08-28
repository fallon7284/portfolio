import React from 'react'

export default ({story, clickLink, part}) => {
    return (
        <div key={part} className="bio-content">
            <div  style={{textDecoration: 'none', fontSize: '70px', cursor: 'pointer'}} className="section" onClick={clickLink}>
            {story[part]}
            </div>
        </div>
    )
}