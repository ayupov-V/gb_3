import React, { Component } from 'react'

export class Button extends Component {
    state = {
        name: this.props.name,
        surname: this.props.surname
    }

    ClickofButton = () => {
        this.setState({ name: "Ayupov", surname: "surname" })
    }

    render() {
        return (
            <>
                <h3>My {this.state.surname} is {this.state.name}</h3>
                <button onClick={this.ClickofButton}>Button</button>
            </>
        )
    }
}