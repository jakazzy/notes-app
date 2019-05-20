import React, { Component } from 'react';

class Note extends Component{
    render(){
      return ( <div class="row">
        <div class="col s12  m8 offset-m2">
            <div class="card medium">
                <nav class="red darken-1">
                    <div class="nav-wrapper ">
                        <div class="col s12">

                            <div class="card-title center">Card Title</div>
                        </div>
                    </div>
                </nav>
                <div class="card-content">

                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>


                <div class="card-action">
                    <span class="left">Mon 20 May, 2019 at 12:42AM</span>
                    <div class="right">
                        <span class="btn-floating btn-medium waves-effect waves-light red"><i class="material-icons">add</i></span>
                        <span class="btn-floating btn-medium waves-effect waves-light red"><i class="material-icons">delete</i></span>
                        <span class="btn-floating btn-medium waves-effect waves-light red"><i class="material-icons">edit</i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

      )
    }
      
  }
  
  export default Note;