import React, { Component } from 'react';

class Note extends Component{
    render(){
      return ( <div className="row">
        <div className="col s12  m8 offset-m2">
          <div className="card medium">
              <nav className="red darken-1">
                <div className="nav-wrapper">
                    <div className="card-title center">Card Title</div>
                </div>
              </nav>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <span className="left">Mon 20 May, 2019 at 12:42AM</span>
                <div className="right">
                    <span className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">add</i></span>
                    <span className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">delete</i></span>
                    <span className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">edit</i></span>
                </div>
              </div>
            </div>
          </div>
        </div>

      )
    }
      
  }
  
  export default Note;