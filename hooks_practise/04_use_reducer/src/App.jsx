import { useReducer, useState } from 'react'


// function counterReducer(state, action) {
//   if (action.type === 'increment') {
//     return state + 1
//   }
//   if (action.type === 'decrement') {
//     return state - 1
//   }
//   return state
// }

// function App() {
//   const [count, dispatch] = useReducer(counterReducer, 0)

  
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch({type: 'increment'})}>Add</button>
//       <button onClick={() => dispatch({type: 'decrement'})}>Sub</button>
//     </>
//   )
// }



function todoReducer(state, action) {
  if (action.type === "add") {
    return [...state, action.task]
  }
  return state;
}

function App() {
  const [tasks, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState(""); 

  return(
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter a task' />
      <button onClick={() => {
        dispatch({type: 'add', task: inputValue})
        setInputValue('');
      }}>
        Add Task
      </button>
    </div>
  )
  
}







export default App
