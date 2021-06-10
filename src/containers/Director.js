import React, { Component } from 'react'
import Movie from '../components/Movie'
import AddMovieForm from './AddMovieFrom'

export default class Director extends Component {

    state = {
        director: {
            movies: []
        },
        toggleMovieForm: false
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

        let movies = this.state.director.movies.map(m => <Movie key={m.id} movie={m}/>)

        return (
            <div>
                <h2>{this.state.director.name}</h2>
                {this.state.toggleMovieForm ? < AddMovieForm /> : <button onClick={() => this.setState({toggleMovieForm: true})}>Add Movie</button>}
                <hr/>
                <h2>Directed Movies:</h2>
               {movies}
            </div>
        )
    }
}
