import React, {useState} from 'react'


const Movie = (props) => {

    return (
        <div >  
            <h4>{props.movie.name}</h4>
            <button onClick={props.deleteMovie} id={`${props.movie.id}`}>x</button> 
        </div>
    )
}

export default Movie