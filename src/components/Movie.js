import React, {useState} from 'react'
import MovieEditForm from '../containers/MovieEditForm'

const Movie = (props) => {
    const [toggleEditForm, setToggleEditForm] = useState(false)

    return (
        <div >  
            <h4>{props.movie.name}</h4>
            <button>x</button> 
            {toggleEditForm ? < MovieEditForm/> : <button>Edit movie</button> }
        </div>
    )
}

export default Movie