import { useState, useEffect } from 'react'


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


// function App() {
//   const [car, setCar] = useState({
//     brand: "Toyota",
//     color: "red",
//     speed: 100,
//   });

//  const paintCar = () => {
//   setCar({...car, color: car.color = "Blue"})
//  }
//  const speedUp = () => {
//   setCar({...car, speed: car.speed + 20})
//  }

//   return (
//     <>
//     <p>Brand: {car.brand}</p>
//       <p>Color: {car.color}</p>
//       <p>Speed: {car.speed} km/h</p>
//       <button onClick={paintCar}>Paint Blue</button>
//       <button onClick={speedUp}>Speed Up</button>
//     </>
//   );
// }


// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((pre) => pre + 1); // You ask React to increase the count
//     console.log(count); // But here, React hasn’t updated it yet, so this logs the old value
//   };

//   return <button onClick={increment}>Count: {count}</button>;
// }


// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     console.log("before")
//     setCount(count + 1);
//   };

//   useEffect(() => {
//     console.log("after:", count); // Runs after React updates the count
//   }, [count]); // Only run this when 'count' changes

//   return <button onClick={increment}>Count: {count}</button>;
// }


// function App() {
//   const [score, setScore] = useState(0);
//   const [time, setTime] = useState(60);
//   const [lives, setLives] = useState(3);

//   const increaseScore = () => {
//     setScore(score + 10)
//   }
//   const decreaseTime = () => {
//     setTime(time - 1)
//   }
//   const loseLife = () => {
//     setLives(lives - 1)
//   }

//   return (
//     <div>
//       <h1>Game</h1>
//       <p>Score: {score}</p>
//       <p>Time Left: {time}s</p>
//       <p>Lives: {lives}</p>
//       <button onClick={increaseScore}>Increase Score</button>
//       <button onClick={decreaseTime}>Decrease Time</button>
//       <button onClick={loseLife}>Lose a Life</button>
//     </div>
//   );
// }


// function App() {
//   const [items, setItems] = useState([]);

// function addItem(newItem) {
//   setItems((prevItems) => [...prevItems, newItem]); // Add to the existing list
// }

// return (
//   <div>
//     <button onClick={() => addItem("Apple")}>Add Apple</button>
//     <button onClick={() => addItem("Banana")}>Add Banana</button>
//     <p>Items: {items.join(", ")}</p>
//   </div>
// );

// }



// function App() {
//   function slowSetup() {
//     console.log("Initializing state...");
//     return Array(1000000).fill(0);
//   }

//   const [numbers, setNumbers] = useState(() => slowSetup()); // Lazy initialization

//   return (
//     <div>
//       <p>Array length: {numbers.length}</p>
//     </div>
//   );
// }



// function App() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     age: null,
//     hobbies: [],
//   });

//   function updateUser(property, value) {
//     setUser((prevUser) => ({
//       ...prevUser,
//       [property]: value,
//     }));
//   }

//   function addHobby(newHobby) {
//     setUser((prevUser) => ({
//       ...prevUser,
//       hobbies: [...prevUser.hobbies, newHobby],
//     }));
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Name"
//         value={user.name}
//         onChange={(e) => updateUser('name', e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         value={user.email}
//         onChange={(e) => updateUser('email', e.target.value)}
//       />
//       <button onClick={() => addHobby('Reading')}>Add Hobby</button>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <p>Hobbies: {user.hobbies.join(', ')}</p>
//     </div>
//   );
// }



// function App() {
//   const [name, setName] = useState(""); // Hold name input
//   const [email, setEmail] = useState(""); // Hold email input

//   const handleSubmit = () => {
//     alert(`Name: ${name}, Email: ${email}`);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Simple Form</h1>
      
//       {/* Name Input */}
//       <div>
//         <label>
//           Name: 
//           <input 
//             type="text" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//           />
//         </label>
//       </div>
      
//       {/* Email Input */}
//       <div>
//         <label>
//           Email: 
//           <input 
//             type="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//           />
//         </label>
//       </div>
      
//       {/* Submit Button */}
//       <div>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }



// function App() {
//   const [items, setItems] = useState([]); // Start with an empty list
//   const [newItem, setNewItem] = useState(""); // Input box for new item

//   // Function to add item
//   const addItem = () => {
//     if (newItem.trim() !== "") { // Only add if not empty
//       setItems([...items, newItem]); // Add new item to the list
//       setNewItem(""); // Clear input box
//     }
//   };

//   // Function to remove item
//   const removeItem = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index); // Remove by index
//     setItems(updatedItems);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Dynamic List</h1>
      
//       {/* Input box and Add button */}
//       <div>
//         <input 
//           type="text" 
//           value={newItem} 
//           onChange={(e) => setNewItem(e.target.value)} 
//           placeholder="Enter item"
//         />
//         <button onClick={addItem}>Add</button>
//       </div>

//       {/* Display the list */}
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item} 
//             <button onClick={() => removeItem(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


function App() {
  const[isDarkMode, setIsDarkMode] = useState(false);

  const toggelTheme = () => {
    setIsDarkMode(!isDarkMode)
  }
  return(
    <>
    <div style={{backgroundColor: isDarkMode ? '#333' : '#FFF',
      color: isDarkMode ? '#FFF' : '#000'
    }}>
    <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
    <button onClick={toggelTheme}>Toggel Theme</button>
    </div>
    </>
  );
}

export default App