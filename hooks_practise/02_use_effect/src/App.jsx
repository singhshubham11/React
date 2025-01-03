import { useEffect, useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     document.title = `you have clicked ${count}`
//   }, [count])

//   return (
//     <>
//      <h1>you clicked {count} times </h1>
//      <button onClick={() => setCount(count + 1)}>click</button>
//     </>
//   )
// }



// function App() {
//   const [seconds, setSeconds] = useState(0);
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000); // Runs every second.
//     console.log(Math.random()*10+1);

//     // Cleanup: Stop the timer when the component goes away.
//     return () => clearInterval(timer);
//   }, []); // Empty array = only run once at the beginning.

//   const naruto = () => {
//     setInterval(() => {
//       setCount((prev) => prev + 1)
//     }, 1000);
//   }
//   return ( <>
//   <p>Timer: {seconds} seconds</p>
  
//       <h1>Hello React Counter: {count}</h1>
//       <button onClick={naruto}>Click</button>
  
//   </> );
// }


// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`The count is now ${count}`); // Runs every time `count` changes.
//   }, [count]); // Watches the `count` variable.

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }


// function App() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log('Timer start');
//       setSeconds((prev) => prev + 1);
//     }, 1000); // Runs every second.

//     // Cleanup: Stop the timer when the component is removed.
//     return () => {
//       clearInterval(interval);
//       console.log('Timer stopped');
//     };
//   }, []); // Empty array = only set up once.

//   return <p>Timer: {seconds} seconds</p>;
// }



// function App() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // This runs only once after the component mounts
//     fetch("http://www.omdbapi.com/?t=Star+Wars&y=2015&plot=short&r=json ")
//       .then((response) => response.json())
//       .then((data) => setMovies(data));
//   }, []); // Empty array = Run only once.

//   return (
//     <div>
//       <h1>Movie List</h1>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>{movie.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Effect is running! Count:", count);
//   }); // No dependency array.

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }


// function App() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//  useEffect(() => {
//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   window.addEventListener("resize", handleResize)

//   return () => {
//     window.removeEventListener("resize", handleResize);
//     console.log("Event listener removed");
//   };
//  }, [])

 

//   return <p>Window width: {windowWidth}px</p>;
// }


// function Greeting({ name }) {
//   const [greeting, setGreeting] = useState("");

//   useEffect(() => {
//     setGreeting(`Hello, ${name}!`);
//     console.log(`Effect ran because 'name' changed to: ${name}`);
//   }, [name]); // 'name' is the dependency.

//   return <h1>{greeting}</h1>;
// }

// function App() {
//   const userName = "bittu"; // Define the value you want to pass as a prop

//   return (
//     <div>
//       <Greeting name={userName} /> {/* Sending the prop */}
//     </div>
//   );
// }




// function App() {
//   const [count, setCount] = useState(0);
//   const [multiplier, setMultiplier] = useState(1);
//   const [result, setResult] = useState(0);

//   useEffect(() => {
//     setResult(count * multiplier);
//     console.log(`Effect ran because 'count' or 'multiplier' changed.`);
//   }, [count, multiplier]); // Watch both count and multiplier.

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Multiplier: {multiplier}</p>
//       <p>Result: {result}</p>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <button onClick={() => setMultiplier(multiplier + 1)}>Increase Multiplier</button>
//     </div>
//   );
// }


// function App() {
//   const [users, setUsers] = useState([]); // State to store the users.
//   const [loading, setLoading] = useState(true); // State to show a loading message.

//   useEffect(() => {
//     // This is where the API call happens.
//     const fetchUsers = async () => {
//       console.log("tong")

//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetch the users.
//         const data = await response.json(); // Convert the response to JSON.
//         setUsers(data); // Save the users in the state.
//         setLoading(false); // Turn off the loading message.
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false); // Turn off the loading message even if there's an error.
//       }
//     };

//     fetchUsers(); // Call the function to fetch users.
//     console.log("ting")
//   }, []); // Empty array = run only once when the component mounts.

//   // Show loading message while fetching data.
//   if (loading) return <h1>Loading...</h1>;

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li> // Display each user's name.
//         ))}
//       </ul>
//     </div>
//   );
// }


// function App() {
//   const [message, setMessage] = useState('');
//   const [batteryLevel, setBatteryLevel] = useState(100);

//   // Side effect 1: Make the robot talk
//   useEffect(() => {
//     console.log(`Robot says: ${message}`);
//   }, [message]); // This effect runs when "message" changes.

//   // Side effect 2: Blink lights if the battery is low
//   useEffect(() => {
//     if (batteryLevel < 20) {
//       console.log('Battery low! Blinking lights...');
//     }
//   }, [batteryLevel]); // This effect runs when "batteryLevel" changes.

//   return (
//     <div>
//       <p>Battery Level: {batteryLevel}%</p>
//       <p>Message: {message}</p>

//       <button onClick={() => setMessage('Hello, human!')}>Make Robot Talk</button>
//       <button onClick={() => setBatteryLevel(batteryLevel - 10)}>Use Battery</button>
//     </div>
//   );
// }




// function App() {
//   const [time, setTime] = useState(0);
//   useEffect(() => {
//     const interval =
//       setInterval(() => {
//         setTime(time + 1);
//       },1000)
//       return () => clearInterval(interval);
    
//   }, [time])
//   return(<>
//   <div>Time : {time}</div>
//   </>);
// }


// function App() {

//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (searchTerm) {
//         fetch(`https://reqres.in/api/users?q=${searchTerm}`)
//           .then(response => response.json())
//           .then(data => setResults(data));
//       }
//     }, 500); // Wait 500ms before making the API call

//     return () => clearTimeout(timeout); // Clean up the timeout if searchTerm changes
//   },[searchTerm]);

//   return(
//     <div>
//       <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Type to search...' />
//       <div>{results.length > 0 ? JSON.stringify(results) : 'NO results' } </div>
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('https://reqres.in/api/users');
//       const result = await response.json();
//       setData(result);
//     }
//     fetchData();
//   }, []); // Runs only when the component loads

//   return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
// }



// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('start');
//     const handleClick = () => setCount((prev) => prev + 1);
//     document.addEventListener('click', handleClick);

//     return () => {
//       document.removeEventListener('click', handleClick);
//       console.log('end');
//     };
//   }, []);

//   return <div>Click Count: {count}</div>;
// }


// function App() {
//   const [user, setUser] = useState([]);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// useEffect(() => {
//   async function fetchUsers () {
//     const response = await fetch('https://teamtreehouse.com/profiles/matthew.json');
//     const result = await response.json();
//     setUser(result)
//   }
//   fetchUsers();
// }, [])

// useEffect(() => {
//   if (user) {
//     document.title = `Welcome, ${user.name}`;
//   }
// }, [user])

// useEffect(() => {
//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   }
//   window.addEventListener('resize', handleResize);
//   return () => {
//     window.removeEventListener('resize', handleResize); // Cleanup on unmount
//   };
// }, [])

//   return(<>
//   <h1>{user ? `Hello, ${user.name}` : 'Loading...' }</h1>
//   <p>Window width : {windowWidth} </p>
//   </>);
// }


// function App() {
//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log("Running...");
//     }, 1000);
  
//     // Cleanup function
//     return async () => {
//       clearInterval(interval);
//       console.log("Cleaned up!");
//     };
//   }, []);
  
//   return(<>
//   <h1>Hello</h1>
//   </>);
// }


function App() {
    const [joke, setJoke] = useState("");

    const fetchJoke = async () => {
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const result = await response.json();
            setJoke(result.value)
        } catch (error) {
            console.error("Failed to fetch joke:", error);
        }
    }

    useEffect(() => {
        fetchJoke()
        const interval = setInterval(() => {
            fetchJoke()
        },5000)

        return () => clearInterval(interval);
    }, [])


    return(<>
    <h1>Random Joke</h1>
    <p>{joke || "Loading..."}</p>
    </>);
}

export default App
