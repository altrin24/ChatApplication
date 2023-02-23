

import './App.css';
import React, { Component } from 'react';
import {BrowserRouter,Route, Routes} from "react-router-dom" 
import Chat from './MessageComponent/chat';
import Register from './RegisterComponents/Register';

class App extends Component {
  constructor(props) {
    super(props);
  
  }


 

 

  render(){
 
    return( <BrowserRouter>
      <div style={{overflow:"hidden"}}>
      <Routes>
        <Route path="/chat"  element={<Chat/>} />
        <Route path="/register"  element={<Register/>}/>
        </Routes>

      </div>
    </BrowserRouter> );

  }
}

export default App;
