import React, { Component } from 'react';
import Note from "./Note";
import CreateNote from "./CreateNote";


class App extends Component{
  state ={            
    notes:[
      {title: "Notes on React JS", body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", id:0 },
      {title: "vuejs", body:"Esse dolorum tempore, reprehenderit quibusdam perferendis odit sint ut at enim delectus vitae", id:1},
      {title: "sed est blanditiis ea", body:"veniam commodi eligendi eum repellendus.", id: 2}]
  }  

  addCard =(note) =>{
    console.log("this is a new card1 : ", this.state.notes);
    console.log("noteid: ",note.id);
    console.log("this is a new card:","addcard fxn");
    let notes = [ note, ...this.state.notes]
    console.log("this is a new card2 : ", notes);
    this.setState({
      notes: notes
    })
  }

  render(){
    return ( <div className = "App">
    <CreateNote addCard ={ this.addCard }/>
        <Note notes= {this.state.notes}/>
        </div>
    )
  }
    
}

export default App;