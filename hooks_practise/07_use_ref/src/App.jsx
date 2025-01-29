import { useState, useRef, useEffect, useCallback } from 'react'


// function App() {
//   const inputBox = useRef(null);

//   const handleClick = () => {
//     inputBox.current.focus()
//   }

//   return (
//     <>
//      <input ref={inputBox} type="text" placeholder='Type here' />
//      <button onClick={handleClick}>Focus on Input</button>
//     </>
//   )
// }


// function App() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus()
//   }

//   return (
//     <>
//      <input ref={inputRef} type="text" placeholder='Type here' />
//      <button onClick={handleClick}>Focus on Input</button>
//     </>
//   )
// }



// function App() {
//   const countRef = useRef(0);
//   const [displayCount, setDisplayCount] = useState(0)

//   const handleClick = () => {
//     countRef.current += 1;
//     console.log("Current count (ref): ", countRef.current)
//   }

//   const handleShowCount = () => {
//   setDisplayCount(countRef.current)
//   }

//   return (
//     <>
//     <p>Displayed Count: {displayCount} </p>
     
//      <button onClick={handleClick}>Increase Count (useRef)</button>
//      <button onClick={handleShowCount}>Show Count on Screen</button>
//     </>
//   )
// }




// function App() {
//   const countRef = useRef(5);
  

//   const increaseCounter = () => {
//     countRef.current += 1;
//     console.log("Current count (ref): ", countRef.current)
//   }

  
//   return (
//     <>   
//      <button onClick={increaseCounter}>Increase Count (useRef)</button>
//     </>
//   )
// }



// function App() {
//   const usernameRef = useRef(null);
  
//   useEffect(() => {
//     usernameRef.current.focus();
//   }, [])
  
  
//   return (
//     <>
//     <h1>Login</h1>  
//     <form>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input ref={usernameRef} id='username' type="text" placeholder='Enter your username' />
//       </div>

//       <div>
//         <label htmlFor="password">Password:</label>
//         <input id='password' type="password" placeholder='Enter your password' />
//       </div>
//       <button type='submit'>Login</button>
//     </form>
    
//     </>
//   )
// }




// function App() {
//   const countRef = useRef(0);
//   const [stateCount, setStateCount] = useState(0);
  
//   function increaseRefCount() {
//     countRef.current += 1;
//     console.log("Ref Count: ", countRef.current);
//   }

//   function increaseStateCount() {
//     setStateCount(stateCount + 1);
//   }
  
  
//   return (
//     <>
//     <p>State Count (causes re-render):{stateCount}</p>
//     <p>Ref Count(does not re-render): {countRef.current}</p>
//     <button onClick={increaseRefCount} >Increase Ref Count</button>    
//     <button onClick={increaseStateCount} >Increase State Count</button>    
//     </>
//   )
// }




// function App() {
//   let paperGold = 0;
//   const chestGold = useRef(0);
//   const [rerender, setRerender] = useState(0);
  
//   function addGold() {
//     paperGold += 1; // Change the regular variable
//     chestGold.current += 1; // Change the useRef value
//     console.log("Paper Gold:", paperGold);
//     console.log("Chest Gold:", chestGold.current);
//   }
  
  
//   return (
//     <>
//     <p>Paper Gold (resets every time):{paperGold}</p>
//     <p>Chest Gold (remembers value): {chestGold.current}</p>
//     <button onClick={addGold} >Add Gold</button>    
//     <button onClick={() => setRerender(rerender + 1)} >Re-render</button>    
//     </>
//   )
// }



// function App() {
//   const prevScoreRef = useRef(0);
//   const [score, setScore] = useState(0);
  
//   useEffect(() => {
//     prevScoreRef.current = score;
//   },[score])
  
  
//   return (
//     <>
//     <h2>Current Score: {score}</h2>
//     <h3>Previous Score: {prevScoreRef.current}</h3> 
//     <button onClick={() => setScore(score + 10)} >Increase Score</button>    
//     </>
//   )
// }



// function App() {
//   const countRef = useRef(0);
//   const [renderCount, setRenderCount] = useState(0);
  
//   function increaseRefCount() {
//     countRef.current += 1;
//     console.log("Ref Count(but no re-render):", countRef.current)
//   }

//   function forceReRender() {
//     setRenderCount(renderCount + 1)
//   }
  
  
//   return (
//     <>
//     <p>Ref Count (stored in notebook, no re-render): {countRef.current}</p>
//     <p>Component Render Count: {renderCount}</p>
//     <button onClick={increaseRefCount} >Increase Ref Count</button>
//     <button onClick={forceReRender} >Force Re-Render</button>  
//     </>
//   )
// }



// function App() {
//   const intervalRef = useRef(0);
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setCount((prevCount) => prevCount + 1)
//     }, 1000)

//     return () => {
//       clearInterval(intervalRef.current)
//     }
//   },[])

//   function stopCounter() {
//     clearInterval(intervalRef.current)
//     console.log("Timer stopped")
//   }
  
  
//   return (
//     <>
//     <h2>Auto Counter: {count}</h2>
//     <button onClick={stopCounter} >Stop Timer</button>  
//     </>
//   )
// }




// function App() {
//   const intervalRef = useRef(0);
//   const [time, setTime] = useState(0);
  
//   function startStopwatch() {
//     if (!intervalRef.current) {
//       intervalRef.current = setInterval(() => {
//         setTime((preTime) => preTime + 1)
//       },1000)
//     }
//   }

//   function stopStopwatch() {
//     clearInterval(intervalRef.current)
//     intervalRef.current = null
//   }
  
//   function resetStopwatch() {
//     stopStopwatch();
//     setTime(0)
//   }
  
//   return (
//     <>
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <h2>Stopwatch: {time} sec</h2>
//       <button onClick={startStopwatch}>Start</button>
//       <button onClick={stopStopwatch}>Stop</button>
//       <button onClick={resetStopwatch}>Reset</button>
//     </div>  
//     </>
//   )
// }



function App() {
  const prevCountRef = useRef(null);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    prevCountRef.current = count;
  },[count])
  
  
  return (
    <>
    <h2>Current count: {count}</h2>
    <h3>Previous count: {prevCountRef.current}</h3> 
    <button onClick={() => setCount(count + 1)} >Increase</button>    
    <button onClick={() => setCount(count - 1)} >Decrease</button>    
    </>
  )
}

export default App
