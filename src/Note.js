import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

class Note extends Component{

  state={
    content: this.props.note.content
  }
  
  
  handlechange =(e) =>{
    this.setState({
      content: e.target.value
    })
  }

  handleSave = ( ) =>{
    const updatedNote ={
      id : this.props.note.id,
      content :this.state.content
    }
    this.props.updateNote(updatedNote)
  }
  
    render(){
      
          return( <div className="row" >
                  <div className="col s12  m8 offset-m2">
                  <div className="card medium">
                    <nav className="red darken-1">
                      <div className="nav-wrapper">
                        <div tabIndex="0" className="card-title center">
                        <p><span className="left date">Mon 20 May, 2019 at 12:42AM</span></p>
                        </div>
                      </div>
                    </nav>
                    <div className="card-content">
                      <ContentEditable
                        html = { this.state.content}
                        disabled ={ false }
                        onChange ={ this.handlechange }
                        className = "content"
                        onBlur ={this.handleSave}
                      />
                    </div>
                    <div className="card-action">
                      
                      <div className="right">
                          <span onclick ={ () => {this.props.delete(this.props.note.id)}} className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">delete</i></span>
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