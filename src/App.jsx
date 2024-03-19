import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Meheraz + React</h1>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
    </>
  );
}

function Person() {
  const age = 25;
  const money = 50;
  const person = { name: "Shakib", age: 12 };
  return (
    <h3>
      I am {person.name}. My age is {age}. Now I am own {age + money} taka
    </h3>
  );
}

function Student() {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  );
}


function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App;