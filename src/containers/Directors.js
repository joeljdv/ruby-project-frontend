import React, { Component } from 'react'
import DirectorLink from '../components/DirectorLink'

export default class Directors extends Component {

    state={
        directors: []
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

    render() {
         const director = this.state.directors.map(d =>  <DirectorLink key={d.id} dir={d} /> )

        return (
            <div>
                <h1>Directors</h1>
                {director}
            </div>
        )
    }
}

