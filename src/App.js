import React from 'react';
import Task from './Task.js'
import Date from './Date.js'

import './App.css'

function App() {
  return (
      <div id="app" style={{padding: '30px 30px', width: '100%'}}>
        <Date />
        <br />
        <Task />
        <br />
      </div>
    );
}
export default App;
