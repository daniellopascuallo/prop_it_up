import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    addAge = () => {
        console.log(this.state.age);
        this.setState({ age: this.state.age + 1 });
    }

    render() {
        return (
            <>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.addAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </>
        );
    }
}

export default PersonCard;