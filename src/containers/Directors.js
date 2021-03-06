import React, { Component } from 'react'
import DirectorLink from '../components/DirectorLink'
import AddDirectorForm from './AddDirectorForm'

export default class Directors extends Component {

    state={
        directors: [],
        toggleDirectorForm: false
    }

    componentDidMount() {
        fetch('http://localhost:9292/directors')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            this.setState({
                directors: data
            })
        })
    }

    addDirector = (director) => {
        fetch('http://localhost:9292/directors', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(director)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            this.setState({
                directors: [...this.state.directors, data] 
            })
        })
        this.setState({
            toggleDirectorForm: false
        })
    }

    render() {
         const director = this.state.directors.map(d =>  <DirectorLink key={d.id} dir={d} /> )

        return (
            <div>
                <h1>Directors</h1>
                {this.state.toggleDirectorForm ? <AddDirectorForm addDirector={this.addDirector}/> : <button onClick={() => this.setState({toggleDirectorForm: true})}>Add Director</button>}
                <hr/>
                <br/>
                {director}
            </div>
        )
    }
}

