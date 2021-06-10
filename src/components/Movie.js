import React, {useState} from 'react'
import MovieEditForm from '../containers/MovieEditForm'

const Movie = (props) => {
    const [toggleEditForm, setToggleEditForm] = useState(false)

    return (
        <div >  
            <h4>{props.movie.name}</h4>
            <button onClick={props.delete(props.movie.id)}>x</button> 
            {toggleEditForm ? < MovieEditForm movie={props.movie} editMovie={props.editMovie} toggle={() => {setToggleEditForm(false)}}/> : <button onClick={() => {setToggleEditForm(true)}}>Edit movie</button> }
        </div>
    )
}

export default Movie