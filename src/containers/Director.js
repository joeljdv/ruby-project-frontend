import React, { Component } from 'react'
import Movie from '../components/Movie'
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

        let movies = this.state.director.movies.map(m => <Movie key={m.id} movie={m}/>)

        return (
            <div>
               {movies}
            </div>
        )
    }
}
