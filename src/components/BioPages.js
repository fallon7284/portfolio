import React from 'react'
import Typing from 'react-typing-animation'

export default ({story, clickLink, part}) => {
    const [one, two] = story[part]
    console.log(one, two, story, part)
    return (
        <div key={part} className="bio-content">
            <Typing speed={25}>
            <div className="section" onClick={clickLink} style={{cursor: 'pointer'}}>
            {one}
            <Typing.Delay ms={1100}/>
            <br/>
            {two}
            </div>
            </Typing>
        </div>
    )
}