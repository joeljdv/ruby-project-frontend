import React, { Component } from 'react'

export default class AddDirectorForm extends Component {

    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addDirector(this.state.name)
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
