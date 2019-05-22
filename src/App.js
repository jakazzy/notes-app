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
    console.log("this is a new card1 : ", this.state.notes);
    console.log("noteid: ",note.id);
    console.log("this is a new card:","addcard fxn");
    let notes = [ note, ...this.state.notes]
    console.log("this is a new card2 : ", notes);
    this.setState({
      notes: notes
    })
  }

  editNote = (id) =>{
    // console.log(id);
  }

  render(){
    return ( <div className = "App">
    <CreateNote addCard ={ this.addCard }/>
        <Note notes= {this.state.notes} editNote ={this.editNote}/>
        </div>
    )
  }
    
}

export default App;