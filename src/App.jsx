import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone="true"></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>

      {/* <Device name="laptop" price ="455" ></Device>
      <Device name="Phone" price ="455"></Device>
      <Device name="Notepad" price ="455"></Device>
      <Person></Person>
      <Student grade="7" point="88"></Student>
      <Student grade="7" point="88"></Student>
      <Student grade="7" point="88"></Student>
      <Student ></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  return (
    <h3>
      This Device is {props.name} & price {props.price} $
    </h3>
  );
}

function Person() {
  const age = 25;
  const money = 37;
  return <h3> I am a Person & My Age is {age + money}</h3>;
}

const { grade, point } = { grade: "7", point: "88" };
function Student({ grade = 0, point = 0 }) {
  console.log(grade, point);
  return (
    <div className="student">
      <h3>I am a Student</h3>
      <p>Class:{grade}</p>
      <p>Mark:{point}</p>
      <img src={viteLogo} alt="Vite Logo" />
    </div>
  );
}

function Developer() {
  const developerStyle = {
    backgroundColor: "purple",
    color: "white",
    margin: "20px",
    padding: "20px",
    border: "3px solid yellow",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h4> Dream developer</h4>
      <p>Coding is infinity</p>
    </div>
  );
}
export default App;
