import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <BrowserRouter>
          <Route path='/' component={Home} exact></Route>
          <Route path='/result' component={Result}></Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
