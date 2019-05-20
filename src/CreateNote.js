import React, { Component } from 'react';

class CreateNote extends Component {
    state = {
        title: "",
        body: ""
    }
    render() {
        return ( 
        <div className = "container">
            <span className = "btn-floating right btn-medium waves-effect waves-light red">< i className ="material-icons" > add </i></span >
        </div>
        )
    }
}

export default CreateNote;