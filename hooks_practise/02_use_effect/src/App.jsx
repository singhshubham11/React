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



function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000); // Runs every second.

    // Cleanup: Stop the timer when the component goes away.
    return () => clearInterval(timer);
  }, []); // Empty array = only run once at the beginning.

  return <p>Timer: {seconds} seconds</p>;
}

export default App
