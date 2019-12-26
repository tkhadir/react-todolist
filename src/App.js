import React from 'react';
import Task from './Task.js'
import Date from './Date.js'
import Avatar from './Avatar.js'

import './App.css'





function App() {


    return (
      <div className="appl" style={{padding: '30px 30px'}}>
        <Avatar />
        <br />
        <Date />
        <br />
        <Task />
        <br />
        
        
      </div>
    );
  }
  



export default App;
