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

    addMovie = (movie) => {
        fetch(`http://localhost:9292/directors/${this.state.director.id}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(movie)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            this.setState({
                director: {
                    ...this.state.director,
                    movies:[...this.state.director.movies, data]
                }
            })
        })
        this.setState({
            toggleMovieForm: false
        })
    }

    editMovie = (movie) => {

    }

    deleteMovie = (id) => {
        fetch(`http://localhost:9292/directors/${this.state.director.id}/movies/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(() => {
            const newMovies = this.state.director.movies.filter(d => d.id != id)
            this.setState({
                director: {
                    ...this.state.director,
                    movies: newMovies
                }
            })
        })
    }


    render() {

        let movies = this.state.director.movies.map(m => <Movie key={m.id} movie={m} editMovie={this.editMovie} delete={this.deleteMovie}/>)

        return (
            <div>
                <h2>{this.state.director.name}</h2>
                {this.state.toggleMovieForm ? < AddMovieForm addMovie = {this.addMovie}/> : <button onClick={() => this.setState({toggleMovieForm: true})}>Add Movie</button>}
                <hr/>
                <h2>Directed Movies:</h2>
                <hr/>
               {movies}
            </div>
        )
    }
}
