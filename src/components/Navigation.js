import React from 'react'
import { NavLink} from 'react-router-dom';

const link = {
    width: '100px',
    padding:'12px',
    margin:'0 6px 6px',
    color: 'blue'
}

const Navigation = () => {
    return (
        <div>
            <NavLink to='/' exact style={link} activeStyle={{background: 'lightblue'}} >
                Home
            </NavLink>
            <NavLink to='/directors' exact style={link} activeStyle={{background: 'lightblue'}}>
                Directors
            </NavLink>
        </div>
    )
}

export default Navigation;
