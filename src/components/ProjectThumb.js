import React from 'react'
import { DiGithubFull } from "react-icons/di"


export default ({p}) => {
    const deployedOrGithub = p.deployed ? p.deployed : p.github
    return (
        <div className="thumb">
            <div className="project-body">
                <div className="details">
                    <a target="blank" rel="noopener noreferrer" href={deployedOrGithub}>
                        <img src={p.image} alt={p.name}></img>
                    </a>
                </div>
                <div className="details">
                    <div className="project">
                        <a target="blank" rel="noopener noreferrer" href={deployedOrGithub} style={{
                            textDecoration: 'none',
                            color: 'white'}}
                        >
                            {p.name}
                        </a>
                        <hr />
                    </div>
                    <p className="description">
                        {p.description}
                    </p>
                    <a target="blank" rel="noopener noreferrer" href={p.github}>
                        <DiGithubFull className="github" style={{
                            fontSize: '1.7em',
                            bottom: '99%', 
                            textDecoration: 'none', 
                            color: 'white'}}
                        />
                    </a>
                </div>
            </div>
        </div>
    ) 
}