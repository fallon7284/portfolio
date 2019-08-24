import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

export default ({p}) => {
    return (
        // <Grid container justify="center" spacing={0} className="project-thumb">
        //     <Paper className="project-name">{p.name}</Paper>
        //     {p.image && <img src={p.image} alt={p.name} style={{height: '150px', width: '150px'}}></img>}
        // </Grid>
        <div className="thumb">
            <div className="project">
                {p.name}
                <hr />
            </div>
            <div className="project-body">
                <div className="details">
                    <img src={p.image}></img>
                </div>
                <div className="details">
                    <p>
                        {p.description}
                    </p>
                </div>
            </div>
        </div>
    ) 
}