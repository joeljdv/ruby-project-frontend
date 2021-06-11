import React, { Component } from 'react'

export default class MovieEditForm extends Component {
    state = {
        id: null,
        name: ''
    }


    componentDidMount() {
        this.setState({
            id: this.props.movie.id,
            name: this.props.movie.name
        })
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editMovie(this.state)
        this.props.toggle()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
