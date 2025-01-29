import { useState, useCallback, useEffect, useMemo, useContext, useReducer } from 'react'


// function App() {
//   const [numbers, setNumbers] = useState([])
//   const [inputValue, setInputValue] = useState('');

//   const addNumber = useCallback(() => {
//     console.log('re-render')
//     setNumbers((prevNumbers) => [...prevNumbers, inputValue])
//     setInputValue("")
//   }, [inputValue])

//   return (
//     <>
//     <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//     <button onClick={addNumber}>Add Number</button>
//     <ul>
//       {numbers.map((num, index) => (
//         <li key={index}>{num}</li>
//       ))}
//     </ul>
//     </>
//   )
// }



// function App() {
//   const [numbers, setNumbers] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const addNumber = useCallback(() => {
//     setNumbers((prevNumbers) => [...prevNumbers, Number(inputValue)])
//     setInputValue("")
//   }, [inputValue])

//   const totalSum = useMemo(() => {
//     console.log("Calculating Sum...")
//     return numbers.reduce((acc, sum) => acc + sum, 0)
//   }, [numbers])

//   return(
//     <div>
//       <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//       <button onClick={addNumber}>Add Number</button>
//       <ul>
//       {numbers.map((num, index) => (
//           <li key={index}>{num}</li>
//         ))}
//       </ul>
//       <h3>Total Sum: {totalSum} </h3>
//     </div>
//   )
// }



// function App() {

//   const [count, setCount] = useState(0);

//   const increment = useCallback (() => {
//     console.log("Incrementing...");
//     setCount(count + 1);
//   }, []);

//   const decrement = useCallback( () => {
//     console.log("Decrementing...");
//     setCount(count - 1);
//   }, []);

//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }





// function Counter({ onIncrement }) {
//   return <button onClick={onIncrement}>Increase</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() =>
//     {console.log("Decrementing...")
//     setCount(count + 1), [count]}); // Now it makes sense.

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <Counter onIncrement={increment} />
//     </div>
//   );
// }




// function Child({ onClick }) {
//   console.log("Child re-rendered")
//   return <button onClick={onClick} >Click me!</button>
// }


// function App() {
//   const[count, setCount] = useState(0);

//   const handelClick = () => {
//     console.log("Button Clicked")
//   }

//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)} >Increase</button>
//       <Child onClick = {handelClick} />
//     </div>
//   )

// }




// function Child({ onClick }) {
//   console.log("Child re-rendered")
//   return <button onClick={onClick} >Click me!</button>
// }


// function App() {
//   const[count, setCount] = useState(0);

//   const handelClick = useCallback(() => {
//     console.log("Button Clicked")
//   }, [])

//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)} >Increase</button>
//       <Child onClick = {handelClick} />
//     </div>
//   )

// }



// function App() {
//   const [counter, setCounter] = useState(0);

//   const handelClick = useCallback(() => {
//     setCounter((preCounter) => preCounter + 1)
//   }, [])

//   return(
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Counter: {counter} </h1>
//       <button onClick={handelClick} style={{ fontSize: '20px', padding: '10px 20px' }} >Click Me!</button>
//     </div>
//   )
// }





// function App() {
//   const [counter, setCounter] = useState(0);
//   const [name, setName] = useState('Alice');

//   // A function that depends on `counter`.
//   const logCounter = useCallback(() => {
//     console.log(`The counter is ${counter}`);
//   }, [counter]);

//   // A function that depends on `name`.
//   const logName = useCallback(() => {
//     console.log(`The name is ${name}`);
//   }, [name]);

//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
//       <h1>Name: {name}</h1>
//       <button onClick={() => setName(name === 'Alice' ? 'Bob' : 'Alice')}>
//         Change Name
//       </button>
//       <button onClick={logCounter}>Log Counter</button>
//       <button onClick={logName}>Log Name</button>
//     </div>
//   );
// }



// function Child({onClick}) {
//   console.log("Child")
//   return <button onClick={onClick} >Click me!</button>
// }


// function App() {
//   const [counter, setCounter] = useState(0);

//   const handelClick = useCallback( () =>{
//     setCounter((prevCounter) => prevCounter + 1 )
//   }, [])

//   return(
//     <div>
//       <h1>Parent</h1>
//       <h1>Counter: {counter}</h1>
//       <Child onClick = {handelClick} />
//     </div>
//   )
// }


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, `Todo ${prevTodos.length + 1}`])
  }, [])

  const removeTodo = useCallback(() => {
    setTodos((prevTodos) => prevTodos.slice(0, -1))
  }, [])

  return(
    <div>
      <h1>Todo App</h1>
      <button onClick={addTodo} >Add Todo</button>
      <button onClick={removeTodo} disabled={todos.length === 0}>Remove Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} >{todo}</li>
        ))}
      </ul>
    </div>
  )
}










export default App
