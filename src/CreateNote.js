import React, { Component } from 'react';

class CreateNote extends Component {
    state = {
        content: "create new note"
    }

    newCard = () => {
        // console.log("printing state1: ",this.state)
        this.props.addCard(this.state);
        // console.log("printing state: ",this.state)
    }
    render() {
        return ( 
        <div className = "container">
            <span onClick={this.newCard} className = "btn-floating right btn-medium waves-effect waves-light red">< i className ="material-icons" > add </i></span >
        </div>
        )
    }
}

export default CreateNote;