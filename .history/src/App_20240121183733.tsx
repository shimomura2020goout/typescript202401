import React from 'react';
import logo from './logo.svg';
import './App.css';
import { preProcessFile } from 'typescript';


// eslint-disable-line no-unused-vars
/* eslint-disable */

const func1 = (x: number, y: number): number => {
  return x + y;
}

//typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "message2";

let animal = { cat: "small cat"};
let newanimal: typeof animal = { cat: "big cat" };

//keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;

//enum
enum OS {
  Windows,
  Mac,
  Linux,
};

interface PC {
  id: number;
  OSType: OS;
};

const PC1 : PC = {
  id: 1,
  OSType:OS.Mac,
}
const PC2 : PC = {
  id: 2,
  OSType:OS.Linux,
}

// Generics
interface GEN <T> {
  item: T;
}
const gen0: GEN<string>= { item: "hello"};

// Generics デフォルト指定
interface GEN1 <T = string> {
  item: T;
}

const gen1: GEN1= { item: "hello" };

// Generics 制限
interface GEN2<T extends string | number> {
  item: T;
}
const gen3: GEN2<number> ={ item: 2 };

// Generics 関数
function funcGen<T>(props: T) {
  return {item: props};
};

const gen4 = funcGen<string>("test");
const gen5 = funcGen<string | null>("test");

function funcGen1<T extends string | null>(props: T) {
  return {value: props };
};

const gen6 = funcGen1("hello");

//props使い方
interface Props {
  price: number;
}
function funcGen2<T extends Props>(props: T) {
  return {value: props.price };
}

const gen7 = funcGen2({ price: 10 });

//アロー関数で書いた場合
//function funcGen2<T extends Props>(props: T) {

const funcGen3 = <T extends Props>(props: T) => {
  return {value: props.price };
}




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
