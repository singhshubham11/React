import  { useEffect, useReducer, useState } from 'react'



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



// function formReducer(state, action) {
//   switch (action.type) {
//     case "update":
//       return {...state, [action.field]: action.value}
  
//     default:
//       return state;
//   }
// }


// function App() {
//   const initialState = { name: "John Doe", email: "john.doe@example.com" }; 
//   const [formState, dispatch] = useReducer(formReducer, initialState)
//   return(
//     <div>
//       <h1>Simple Form</h1>
//       <form>
//         <label>
//           Name:
//           <input type="text" value={formState.name} 
//           onChange={(e) => dispatch({type: "update", field: "name", value: e.target.value})}
//           />
//         </label>
//         <br />
//         <label>
//           Email: 
//           <input type="text" value={formState.email} 
//           onChange={(e) => dispatch({type: "update", field: "email", value: e.target.value})}
//           />
//         </label>
//       </form>
//     </div>
//   )
// }



// function todoReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_TODO':
      
//       return [...state, {id: action.id, text: action.text, completed: false} ]
  
//     case 'TOGGLE_TODO':
      
//     return state.map((todo) =>
//       todo.id === action.id
//         ? { ...todo, completed: !todo.completed } // Toggle completed status
//         : todo
//     );
  
//     default:
//       return state;
//   }
// }

// function App() {
//   const[todos, dispatch] = useReducer(todoReducer, [])

//   const addTodo = text => {
//     dispatch({type: 'ADD_TODO', id: Date.now(), text})
//   }

//   const toggleTodo = id => { 
//     dispatch({ type: 'TOGGLE_TODO', id });
//   };

//   return <>
//   <h1>TODO_LIST</h1>
//   <ul> {todos.map(todo => ( 
//     <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> 
//     {todo.text} 
//     <button onClick={() => toggleTodo(todo.id)}>Toggle</button> 
//     </li> ))} 
//     </ul>
//   <button onClick={() => addTodo('New Task')} >Add Task</button>
//   </>
// }


// function cartReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return [...state, { id: action.id, name: action.name, quantity: 1 }];

//     case 'REMOVE_ITEM':
//       return state.filter((item) => item.id !== action.id);

//     case 'UPDATE_QUANTITY':
//       return state.map((item) =>
//         item.id === action.id
//           ? { ...item, quantity: action.quantity }
//           : item
//       );

//     default:
//       return state; // Do nothing if action type is unknown
//   }
// }


// function App() {
//   const [cart, dispatch] = useReducer(cartReducer, []); // Initial state is an empty cart

//   const addItem = () => {
//     dispatch({ type: 'ADD_ITEM', id: 1, name: 'Toy Car' });
//   };

//   const removeItem = () => {
//     dispatch({ type: 'REMOVE_ITEM', id: 1 });
//   };

//   const updateQuantity = () => {
//     dispatch({ type: 'UPDATE_QUANTITY', id: 1, quantity: 3 });
//   };

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <button onClick={addItem}>Add Toy Car</button>
//       <button onClick={removeItem}>Remove Toy Car</button>
//       <button onClick={updateQuantity}>Set Quantity to 3</button>

//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// function quizReducer(state, action) {
//   switch (action.type) {
//     case "SET_QUESTIONS":
//       return {
//         ...state,
//         questions: action.payload,
//       };
//     case "ANSWER_QUESTION":
//       const isCorrect = action.payload.answer === state.questions[state.currentQuestion].correctAnswer;
//       return {
//         ...state,
//         currentQuestion: state.currentQuestion + 1,
//         score: isCorrect ? state.score + 1 : state.score,
//       };
//     default:
//       return state;
//   }
// }



// function App() {
//   const initialState = {
//     questions: [], // Start with no questions
//     currentQuestion: 0,
//     score: 0,
//   };
  
//   const [state, dispatch] = useReducer(quizReducer, initialState);

//   useEffect(() => {
//     async function fetchQuestions() {
//       const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
//       const data = await response.json();
//       console.log(data);    

//       dispatch({type: "SET_QUESTIONS", payload: data})
//     }

//     fetchQuestions();
//   }, [])

//   if (state.questions.length === 0) {
//     return <div>Loading...</div>; // Show loading spinner
//   }

//   const currentQuestion = state.questions[state.currentQuestion];


//   return (
//     <div>
//       <h1>Quiz App</h1>
//       <p>{currentQuestion.question}</p>
//       {currentQuestion.options.map((option, index) => (
//         <button
//           key={index}
//           onClick={() =>
//             dispatch({ type: "ANSWER_QUESTION", payload: { answer: option } })
//           }
//         >
//           {option}
//         </button>
//       ))}
//       <p>Score: {state.score}</p>
//     </div>)
// }



// function userReducer(state, action) {
//   switch (action.type) {
//     case "ADD_USER":
//       return { ...state, users: [...state.users, action.payload] };
//     case "REMOVE_USER":
//       return { ...state, users: state.users.filter(user => user.id !== action.payload.id) };
//     case "UPDATE_USER":
//       return {
//         ...state,
//         users: state.users.map(user =>
//           user.id === action.payload.id ? { ...user, ...action.payload } : user
//         ),
//       };
//     default:
//       console.error(`Unknown action type: ${action.type}`);
//       return state;
//   }
// }

// const initialState = {
//   users: [], // Start with no users
// };


// function useLoggedReducer(reducer, initialState) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function loggedDispatch(action) {
//     console.group("Action Dispatched"); // Group logs together
//     console.log("Action:", action);
//     const result = dispatch(action); // Call the real dispatch
//     console.log("New State:", state); // Log the updated state
//     console.groupEnd();
//     return result;
//   }

//   return [state, loggedDispatch];
// }

// function App() {
//   const [state, dispatch] = useLoggedReducer(userReducer, initialState);

//   const addUser = () => {
//     const newUser = { id: Date.now(), name: "John Doe", age: 30 };
//     dispatch({ type: "ADD_USER", payload: newUser });
//   };

//   const removeUser = (id) => {
//     dispatch({ type: "REMOVE_USER", payload: { id } });
//   };

//   const updateUser = (id, updatedDetails) => {
//     dispatch({ type: "UPDATE_USER", payload: { id, ...updatedDetails } });
//   };

//   return (
//     <div>
//       <h1>User Management</h1>
//       <button onClick={addUser}>Add User</button>
//       <ul>
//         {state.users.map(user => (
//           <li key={user.id}>
//             {user.name} ({user.age} years old)
//             <button onClick={() => updateUser(user.id, { age: user.age + 1 })}>
//               Increase Age
//             </button>
//             <button onClick={() => removeUser(user.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function expenseReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
      
//       return {...state, expenses: [...state.expenses, action.payload]};
  
//     default:
//       break;
//   }
// }

// function initializeExpenses() {
//   const storedData = localStorage.getItem("expenses");
//   return storedData ? JSON.parse(storedData) : { expenses: [] };
// }

// function App() {
//   const [state, dispatch] = useReducer(expenseReducer, {}, initializeExpenses);

//   useEffect(() => {
//     // Save the expenses to localStorage whenever they change
//     localStorage.setItem("expenses", JSON.stringify(state));
//   }, [state]);

//   const addExpense = () => {
//     const newExpense = { id: Date.now(), description: "Snacks", amount: 5 };
//     dispatch({ type: "ADD_EXPENSE", payload: newExpense });
//   };

//   return (
//     <div>
//       <h1>Expense Tracker</h1>
//       <button onClick={addExpense}>Add Expense</button>
//       <ul>
//         {state.expenses.map(expense => (
//           <li key={expense.id}>
//             {expense.description}: ${expense.amount}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// function movieReducer(state, action) {
//   switch (action.type) {
//     case "SEARCH_START":
//       return { ...state, loading: true, error: null, movies: [] };
//     case "SEARCH_SUCCESS":
//       return { ...state, loading: false, movies: action.payload };
//     case "SEARCH_ERROR":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// }
// const initialState = {
//   loading: false,
//   movies: [],
//   error: null,
// };


// function App() {
//   const [state, dispatch] = useReducer(movieReducer, initialState);

//   const searchMovies = async (query) => {
//     dispatch({ type: "SEARCH_START" }); // Start loading

//     try {
//       const response = await fetch(`https://api.example.com/movies?search=${query}`);
//       const data = await response.json();
//       dispatch({ type: "SEARCH_SUCCESS", payload: data.results }); // Set results
//     } catch (error) {
//       dispatch({ type: "SEARCH_ERROR", payload: error.message }); // Set error
//     }
//   };

//   return (
//     <div>
//       <h1>Movie Search</h1>
//       <input
//         type="text"
//         placeholder="Search for a movie..."
//         onKeyDown={(e) => {
//           if (e.key === "Enter") searchMovies(e.target.value);
//         }}
//       />
//       {state.loading && <p>Loading...</p>}
//       {state.error && <p style={{ color: "red" }}>{state.error}</p>}
//       <ul>
//         {state.movies.map((movie) => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// function taskReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TASK":
//       return { 
//         ...state, 
//         tasks: [...state.tasks, action.payload] 
//       };
//     case "TOGGLE_TASK":
//       return {
//         ...state,
//         tasks: state.tasks.map(task => 
//           task.id === action.payload.id 
//             ? { ...task, completed: !task.completed }
//             : task
//         )
//       };
//     case "ADD_SUBTASK":
//       return {
//         ...state,
//         tasks: state.tasks.map(task =>
//           task.id === action.payload.taskId
//             ? { 
//                 ...task, 
//                 subTasks: [...task.subTasks, action.payload.subTask] 
//               }
//             : task
//         )
//       };
//     default:
//       return state;
//   }
// }

// const initialState = {
//   tasks: [
//     {
//       id: 1,
//       name: "Build a treehouse",
//       completed: false,
//       subTasks: [
//         { id: 1, name: "Buy wood", completed: false, subTasks: [] },
//         { id: 2, name: "Find tools", completed: false, subTasks: [] }
//       ]
//     }
//   ]
// };




// function App() {
//   const [state, dispatch] = useReducer(taskReducer, initialState);

//   const toggleTask = (taskId) => {
//     dispatch({ type: "TOGGLE_TASK", payload: { id: taskId } });
//   };

//   const addSubTask = (taskId, subTask) => {
//     dispatch({ type: "ADD_SUBTASK", payload: { taskId, subTask } });
//   };

//   return (
//     <div>
//       <h1>Task Manager</h1>
//       <ul>
//         {state.tasks.map(task => (
//           <li key={task.id}>
//             <h2>
//               <input 
//                 type="checkbox" 
//                 checked={task.completed} 
//                 onChange={() => toggleTask(task.id)} 
//               />
//               {task.name}
//             </h2>
//             <ul>
//               {task.subTasks.map(subTask => (
//                 <li key={subTask.id}>
//                   <input 
//                     type="checkbox" 
//                     checked={subTask.completed} 
//                     onChange={() => toggleTask(subTask.id)} 
//                   />
//                   {subTask.name}
//                 </li>
//               ))}
//             </ul>
//             <button onClick={() => addSubTask(task.id, { id: Date.now(), name: "New Sub-task", completed: false, subTasks: [] })}>
//               Add Sub-task
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




export default App
