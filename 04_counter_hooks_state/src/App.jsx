import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// simply incrementing a variable and logging it to the console does not trigger a 
// re-render or update the UI. This is because React's rendering process is based on 
// state or props, not on regular JavaScript variables.


// function App() {
//   let counterValue = 5;

//   function addValue() {
//     counterValue++;
//     console.log(`Clicked ${counterValue}`);
//   }
//   function removeValue() {
//     counterValue--;
//     console.log(`Clicked ${counterValue}`);
//   }

//   return (
//     <>
//       <h1>Shubham Singh</h1>
//       <h3>Counter value is: {counterValue}</h3>

//       <button onClick={addValue}>Add Value</button>
//       <br />
//       <button onClick={removeValue}>Remove Value</button>      
//     </>
//   )
// }

//---------------------------------------------------HOOKS-----------------------------------------------------------------------

// to render variables on UI we use hooks to update them on screen
function App() {
  let [counter, setCounter] = useState(20);

  // function addValue() { 
  //   // setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1); // using multiple setCounter(counter + 1); does not increase the counter value 20 to 24 
  //                           // bcoz of updates are done in batches in react
  // } 
    
  // how to make 20 to 24 on 1 click the awnser is setCouter internally uses a callback function
  function addValue() {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  function removeValue() { 
    setCounter(counter - 1);
  } 
  return (
    <>
      <h1>Shubham Singh</h1>
      <h3>Counter value is: {counter}</h3>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>

      
    </>
  )
}

export default App
