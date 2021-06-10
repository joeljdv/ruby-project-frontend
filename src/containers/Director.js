import React, { Component } from 'react'

export default class Director extends Component {

    state = {
        director: {
            movies: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:9292/directors/${this.props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            this.setState({
                director: data
            })
        })
    }

    render() {

        let movies = this.state.director.movies.map(m => <p key={m.id}>{m.name}</p>)

        return (
            <div>
                <h3>{this.state.director.name}</h3>
                <hr/>
                <br/>
                <h4>Movies Directed:</h4>
                <br/>
                {movies}
                <br/>
            </div>
        )
    }
}
