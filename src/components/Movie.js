import React from 'react'

const Movie = (props) => {
    return (
        <div >  
            <h4>{props.movie.name}</h4>
            <button>x</button> 
            <button>Edit movie</button>
        </div>
    )
}

export default Movie