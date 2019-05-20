import React, { Component } from 'react';

class Note extends Component{
 
    render(){
      const { notes } = this.props;
      const notesList = notes.length ? ( 
        notes.map((note, index) => {
          return( <div key={ index } className="row" >
          console.log("key: ", { index })
                  <div className="col s12  m8 offset-m2">
                  <div className="card medium">
                    <nav className="red darken-1">
                      <div className="nav-wrapper">
                        <div className="card-title center">{ note.title }</div>
                      </div>
                    </nav>
                    <div className="card-content">
                      <p>{  note.body}</p>
                    </div>
                    <div className="card-action">
                      <span className="left">Mon 20 May, 2019 at 12:42AM</span>
                      <div className="right">
                          <span className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">delete</i></span>
                          <span className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">edit</i></span>
                      </div>
                    </div>
                  </div>
                  </div>

                  </div>
                  )
        })
      ):(<div className="center">No notes made yet</div> )
      return ( 
      <div >
        { notesList } 
        </div>

      )
    }
      
  }
  
  export default Note;