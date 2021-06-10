import React from 'react'
import {Link} from 'react-router-dom'
 const DirectorLink = (props) => {
    return (
        <div>
            <ul>
                <Link to={`/directors/${props.dir.id}`}>
                     <li>
                        {props.dir.name}
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default DirectorLink