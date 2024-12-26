// import { useState, useCallback, useRef, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   // Function without useCallback
//   const add0 = () => {
//     console.log("add 0 using useState", Math.random());
//     setCount(count + 1);
//   };

//   // Function with useCallback
//   const add1 = useCallback(() => {
//     console.log("add 1 using useCallback", Math.random());
//     setCount((prevCount) => prevCount + 1);
//   }, [count]);

//   // References for comparison
//   const prevAdd0 = useRef(add0);
//   const prevAdd1 = useRef(add1);

//   // Compare and log changes
//   useEffect(() => {
//     console.log("Is add0 reference the same?", prevAdd0.current === add0);
//     console.log("Is add1 reference the same?", prevAdd1.current === add1);

//     // Update the previous references
//     prevAdd0.current = add0;
//     prevAdd1.current = add1;
//   });

//   // Log the references
//   console.log("Function reference for add0:", add0);
//   console.log("Function reference for add1:", add1);

//   return (
//     // <>
//     //   <h1>DEMO</h1>
//     //   <button onClick={add0}>Button (No useCallback): {count}</button>
//     //   <button onClick={add1}>Button (With useCallback): {count}</button>
//     // </>

//     <>
//       <h1>DEMO</h1>
//       <button onClick={add0}>Button (No useCallback): {count}</button>
//       <button onClick={add1}>Button (With useCallback): {count}</button>
//     </>
//   );
// }

// export default App;


// import React, { useCallback, useState } from "react";

// function Child({ onClick }) {
//   console.log("Child rendered!");
//   return <button onClick={onClick}>Click me</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Clicked!");
//   }, [])

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment App: {count}</button>
//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   // Effect that runs once on mount
//   useEffect(() => {
//     console.log('Component mounted');

//     // Cleanup on unmount
//     return () => {
//       console.log('Component unmounted');
//     };
//   }, []); // Empty dependency array -> runs only on mount and cleanup on unmount

//   // Effect that runs on mount and whenever `count` changes
//   useEffect(() => {
//     console.log(`Count updated to: ${count}`);

//     return () => {
//       console.log(`Cleanup after count updated to: ${count}`);
//     };
//   }, [count]); // Dependency array -> runs on mount + updates when `count` changes

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default App;

import React, { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrustuvwxyz";
  if (numberAllowed) {
    str += "0123456789";
  }
  if (charAllowed) {
    str += "! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~ • ∆ ∇ √ ∞ ≈ ∩ ∪ ⊂ ⊃ ⊆ ⊇ ↔ ↑ ↓ ↵ ∀ ∃ ∂ ∆ ∏ ∑ − ∫ α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω";
  }

  for (let i = 0; i <= length; i++) {
   let char = Math.round(Math.random() * str.length + 1);
   pass += str.charAt(char);
  }

  setPassword(pass);
}, [length, numberAllowed, charAllowed])

const copyPasswordTo = useCallback(() => {
passwordRef.current?.select()
passwordRef.current?.setSelectionRange(0, 50)
window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator])

  return(
    <>
    <h1>Hello</h1>
  <input type="text" value={password} readOnly ref={passwordRef} />
  <button onClick={copyPasswordTo}>Copy</button>
  <label>Length: {length}</label>
  <input type="range" value={length} onChange={(e) => setLength(e.target.value)} /><label>numberAllowed: {numberAllowed}</label>
  <input type="checkbox" onChange={(e) => setNumberAllowed(e.target.checked)} /><label>charAllowed: {charAllowed}</label>
  <input type="checkbox" onChange={(e) => setCharAllowed(e.target.checked)} />
    </>
  )
}
export default App