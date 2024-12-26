import { useState } from 'react'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Hello React Counter: {count}</h1>
//       <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
//     </>
//   )
// }

// function App() {
//   const [color, setColor] = useState("blue"); // Start with "blue" as the favorite color

//   return (
//     <div>
//       <h1>My favorite color is: {color}</h1>
//       <button onClick={() => setColor("red")}>Change to Red</button>
//       <button onClick={() => setColor("green")}>Change to Green</button>
//     </div>
//   );
// }

// function App() {
//   const [isOn, setIsOn] = useState(false); // Start with "blue" as the favorite color

//   return (
//     <div>
//       <h1>Light is: {isOn ? "ON" : "OFF"} </h1>
//       <button onClick={() => setIsOn(!isOn)}>Click</button>
//     </div>
//   );
// }


// function App() {
//   const [tasks, setTasks] = useState(["Buy milk", "Read a book"]);

//   return (
//     <>
//     <h1>TODO list:</h1>
//     <ul>{tasks.map((task, index) => (<li key={index}>{task}</li>))}</ul>
//     <button onClick={() => setTasks( [...tasks, "walk the dog"] )}>Add Task</button>
//     </>
//   );
// }


// function App() {
//   const [user, setUser] = useState({username: "Shubham", age: 10});

//   return (
//     <>
//     <h1>User Profile</h1>
//       <p>Name: {user.username}</p>
//       <p>Age: {user.age}</p>
//     <button onClick={() => setUser( { ...user, age: user.age + 1} )}>Increment age</button>
//     </>
//   );
// }


// function App() {
//   const [action, setAction] = useState( () => () => console.log("Hello!"));

//   return (
//     <>
//     <button onClick={action}>Run Action</button>
//     <button onClick={() => setAction( () => console.log("Goodbye!"))}>
//         Change Action
//       </button>
//     </>
//   );
// }


// function App() {
//   const [cart, setCart] = useState({
//     items: [{ name: "Apple", quantity: 1 }],
//     total: 1,
//   });

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <ul>
//         {cart.items.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.quantity}
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={() => setCart({...cart, items: [...cart.items, { name: "Banana", quantity: 2 }],
//             total: cart.total + 2,})}>
//         Add Banana
//       </button>
//     </div>
//   );
// }


// function App() {
//   const [numbers, setNumbers] = useState([1, 2, 3]);

//   const addNumber = () => {
//     setNumbers([...numbers, 4]);
//   }
//   const removeNumber = () => {
//     setNumbers(numbers.filter((num) => num !== 2))
//   }
//   const updateNumber = () => {
//     setNumbers(numbers.map((num) => (num === 3 ? 99 : num)))
//   }

//   return (
//     <>
//     <p>{numbers.join(", ")}</p>
//     <button onClick={addNumber}>Add 4</button>
//     <button onClick={removeNumber}>Remove 2</button>
//     <button onClick={updateNumber}>update 3 to 99</button>
//     </>
//   );
// }


export default App