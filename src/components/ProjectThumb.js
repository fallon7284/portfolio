import React, { useState } from 'react'
const github = require('../images/github.png')

export default ({ p }) => {
    const [hover, setHover] = useState(false)
    const deployedOrGithub = p.deployed ? p.deployed : p.github
    console.log(p.onSite)
    return (
        <div className="thumb">
            <div className="project">
                <a
                    target={p.onSite ? '_self' : 'blank'}
                    rel="noopener noreferrer"
                    href={deployedOrGithub}
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    {p.name}
                </a>
                <hr />
            </div>
            <div className="project-body">
                <div className="details">
                    <a
                        target={p.onSite ? '_self' : 'blank'}
                        rel="noopener noreferrer"
                        href={deployedOrGithub}
                    >
                        <img src={p.image} alt={p.name}></img>
                    </a>
                </div>
                <div className="details">
                    <p className="description">{p.description}</p>
                    <a target="blank" rel="noopener noreferrer" href={p.github}>
                        <img
                            style={{ height: hover ? '9vw' : '8vw' }}
                            src={github}
                            onMouseOver={() => setHover(true)}
                            onMouseOut={() => setHover(false)}
                        ></img>
                    </a>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
}
