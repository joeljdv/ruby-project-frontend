import React from 'react'
import {Link} from 'react-router-dom'
 const DirectorLink = (props) => {
    return (
        <div>
                <Link to={`/directors/${props.dir.id}`}>
                        <h4>{props.dir.name}</h4>
                </Link>
        </div>
    )
}

export default DirectorLink