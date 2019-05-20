import React, { Component } from 'react';

class Note extends Component{
  state ={            
    notes:[
      {title: "Notes on React JS", body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", id:1},
      {title: "vuejs", body:"Esse dolorum tempore, reprehenderit quibusdam perferendis odit sint ut at enim delectus vitae", id:2},
      {title: "sed est blanditiis ea, veniam commodi eligendi eum repellendus.", id: 3}]
  }
    render(){
      const { notes } = this.state;
      const notesList = notes.length ? ( 
        notes.map((note) => {
          return( <div key={ note.id } className="row" >
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