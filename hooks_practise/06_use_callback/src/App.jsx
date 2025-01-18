import { useState, useCallback, useEffect, useMemo, useContext, useReducer } from 'react'


// function App() {
//   const [numbers, setNumbers] = useState([])
//   const [inputValue, setInputValue] = useState('');

//   const addNumber = useCallback(() => {
//     console.log('re-render')
//     setNumbers((prevNumbers) => [...prevNumbers, inputValue])
//     setInputValue("")
//   }, [inputValue])

//   return (
//     <>
//     <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//     <button onClick={addNumber}>Add Number</button>
//     <ul>
//       {numbers.map((num, index) => (
//         <li key={index}>{num}</li>
//       ))}
//     </ul>
//     </>
//   )
// }



function App() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addNumber = useCallback(() => {
    setNumbers((prevNumbers) => [...prevNumbers, Number(inputValue)])
    setInputValue("")
  }, [inputValue])

  const totalSum = useMemo(() => {
    console.log("Calculating Sum...")
    return numbers.reduce((acc, sum) => acc + sum, 0)
  }, [numbers])

  return(
    <div>
      <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addNumber}>Add Number</button>
      <ul>
      {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h3>Total Sum: {totalSum} </h3>
    </div>
  )
}








export default App
