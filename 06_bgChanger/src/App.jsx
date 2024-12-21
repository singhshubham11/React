import { useState } from "react"


// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        
//           <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
//           <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Grn</button>
//           <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
        
//         </div>
//       </div>
//     </div>
//   )
// }

//--------------------------BY ME USING CSS------------------------------

function App() {
  const [color, setColor] = useState("olive")

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: '#ffffff',
    color: '#000',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };
  
  return (
    <>
      <div style={{backgroundColor: color, width: "100%", height: "100vh", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h1 style={{ color: '#fff', marginBottom: '30px' }}>Choose a Background Color</h1>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center'}}>
          <button style={buttonStyle} onClick={() => setColor('red')}>Red</button>
          <button style={buttonStyle} onClick={() => setColor('lavender')}>Lavender</button>
          <button style={buttonStyle} onClick={() => setColor('orange')}>Orange</button>
          <button style={buttonStyle} onClick={() => setColor('black')}>Black</button>
          <button style={buttonStyle} onClick={() => setColor('pink')}>Pink</button>
          <button style={buttonStyle} onClick={() => setColor('yellow')}>Yellow</button>
        </div>
      </div>
    </>
  )
}


export default App