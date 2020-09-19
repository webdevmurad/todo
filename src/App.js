import React from 'react';
import './App.css';
import ToDo from './containers/todo/todo'
import {Title} from './components'

function App() {
  return (
    <div className="App">
      <Title title="Todo App"/>
      <ToDo/>
    </div>
  );
}

export default App;
