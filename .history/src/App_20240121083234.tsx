import React from 'react';
import logo from './logo.svg';
import './App.css';


// eslint-disable-line no-unused-vars
/* eslint-disable */

const func1 = (x: number, y: number): number => {
  return x + y;
}

//typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "message2";

/* eslint-disable */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
