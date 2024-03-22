import "./App.css";
import Actor from "./Actor";
import Singer from "./singer";
import Bookstore from "./Bookstore";

function App() {

  // const actors = ['shakib', 'raj', 'jasim', 'rubel'];

  // const singers = [
  //   {id: 1, name: 'Dr. Mahfuzur', age: 68},
  //   {id: 2, name: 'Eva Rahman', age: 38},
  //   {id: 3, name: 'Shovro Dev', age:58},
  //   {id: 4, name: 'Pritom', age: 28}
  // ]

const books = [
  {id: 10, name: 'Physics', price: 200},
  {id: 20, name: 'Math', price: 300},
  {id: 30, name: 'biology', price: 400},
  {id: 40, name: 'Chemistry', price: 500}
]


  return (
    <>
      <h1>Meheraz + React</h1>

      {
        books.map(book => <Bookstore book={book}></Bookstore>)
      }

      {/* {
        singers.map(singer => <Singer singer={singer}></Singer>)
      } */}
      {/* <Actor name="Meheraz"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}

      {/* <Todo task="Learn React"></Todo>
      <Todo task="Explore Core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name='laptop' price="55000"></Device>
      <Device name='mobile' price="17000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

// function Device(props) {
//   // console.log(props);
//   return (
//     <h2>
//       This device : {props.name} price: {props.price}
//     </h2>
//   );
// }

// function Person() {
//   const age = 25;
//   const money = 50;
//   const person = { name: "Shakib", age: 12 };
//   return (
//     <h3>
//       I am {person.name}. My age is {age}. Now I am own {age + money} taka
//     </h3>
//   );
// }

// const { grade, score } = { grade: "7", score: "99" };

// function Student({ grade = 1, score = 0 }) {
//   console.log(grade, score);
//   return (
//     <div className="student">
//       <h3>This is a student</h3>
//       <p>Class: {grade}</p>
//       <p>Score: {score}</p>
//     </div>
//   );
// }

// function Developer() {
//   const developerStyle = {
//     margin: "20px",
//     padding: "20px",
//     border: "2px solid purple",
//     borderRadius: "10px",
//   };
//   return (
//     <div style={developerStyle}>
//       <h5>Devo devo</h5>
//       <p>Coding: </p>
//     </div>
//   );
// }

export default App;