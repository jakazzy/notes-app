import React, { Component } from 'react';
import Note from "./Note";
import CreateNote from "./CreateNote";

class App extends Component{
  
  state ={            
    notes:[
      {content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", id:0 },
      {content:"Esse dolorum tempore, reprehenderit quibusdam perferendis odit sint ut at enim delectus vitae", id:1},
      {content:"veniam commodi eligendi eum repellendus.", id: 2}]
  }  

  
  
  addCard =(note) =>{
    note.id =Math.random()
    let notes = [ note, ...this.state.notes]
    this.setState({
      notes: notes
    })
  }

  updateNote = (updatedNote) =>{
    this.setState( state => {
      const notes = state.notes.map((note) => {
        if(note.id===updatedNote.id){
          note.content = updatedNote.content;
        }
        return note
      })
      return {notes}
    })

  }
  
deleteNote =(id) =>{
  let notes = this.state.notes.filter( (note) => {
   return note.id !== id
  })
}

  render(){
    const notesList = this.state.notes.map((note) =>{ 
     return(<Note note= {note} key={note.id} updateNote ={this.updateNote}/>)
    })

    return ( 
      <div className = "App">
        <CreateNote addCard ={ this.addCard }/>
        { notesList }
      </div>
    )
  }
    
}

export default App;