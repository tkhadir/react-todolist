import React from 'react';
import Task from './Task.js'
import Date from './Date.js'

import './App.css'

function App() {
  return (
      <div style={{padding: '30px 30px'}}>
        <Date />
        <br />
        <Task />
        <br />
      </div>
    );
}
export default App;
