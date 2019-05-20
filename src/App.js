import React, { Component } from 'react';
import Note from "./Note";
import CreateNote from "./CreateNote";


class App extends Component{
  render(){
    return ( <div className = "App">
    <CreateNote/>
        <Note/>
        </div>
    )
  }
    
}

export default App;