import React, { Fragment } from "react";
import './App.css';

//Components 

import InputTodo from "./components/InputTodos"

function App() {
  return <Fragment>
    <div className="container">
      <InputTodo />
      </div>
  </Fragment>;
}

export default App;
