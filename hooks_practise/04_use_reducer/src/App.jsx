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



// function todoReducer(state, action) {
//   if (action.type === "add") {
//     return [...state, action.task]
//   }
//   return state;
// }

// function App() {
//   const [tasks, dispatch] = useReducer(todoReducer, []);
//   const [inputValue, setInputValue] = useState(""); 

//   return(
//     <div>
//       <h1>My To-Do List</h1>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//       <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter a task' />
//       <button onClick={() => {
//         dispatch({type: 'add', task: inputValue})
//         setInputValue('');
//       }}>
//         Add Task
//       </button>
//     </div>
//   )
  
// }



// function todoReducer(state, action) {
//   if (action.type === "add") {
//     return[...state, action.task]
//   }
//   if (action.type === "remove") {
//     return state.filter((_, index) => index !== action.index)
//   }
//   return state;
// }

// function App() {
//   const [tasks, dispatch] = useReducer(todoReducer, []);
//   const [inputValue, setInputValue] = useState("");
  
//   return(
//     <div>
//       <h1>My To-Do List</h1>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//           <button onClick={() => dispatch({type: "remove", index})}>Remove</button>
//           </li>
//         ))}
//       </ul>

//       <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter a task' />
//       <button onClick={() => {dispatch({type: "add", task: inputValue}); setInputValue("")}}>Add Task</button>
      
//     </div>
//   )
// }



// function toggelReducer(state, action) {
//   if (action.type === "toggel") {
//     return !state
//   }
//   return state
// }

// function App() {
//   const [isDarkMode, dispatch] =  useReducer(toggelReducer, false)
//   return(
//     <div style={{ background: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#000", padding: "20px" }}>
//       <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
//       <button onClick={() => dispatch({type: "toggel"})} >Toggel Mode</button>
//     </div>
//   )
// }



function formReducer(state, action) {
  switch (action.type) {
    case "update":
      return {...state, [action.field]: action.value}
  
    default:
      return state;
  }
}


function App() {
  const initialState = { name: "John Doe", email: "john.doe@example.com" }; 
  const [formState, dispatch] = useReducer(formReducer, initialState)
  return(
    <div>
      <h1>Simple Form</h1>
      <form>
        <label>
          Name:
          <input type="text" value={formState.name} 
          onChange={(e) => dispatch({type: "update", field: "name", value: e.target.value})}
          />
        </label>
        <br />
        <label>
          Email: 
          <input type="text" value={formState.email} 
          onChange={(e) => dispatch({type: "update", field: "email", value: e.target.value})}
          />
        </label>
      </form>
    </div>
  )
}






export default App
