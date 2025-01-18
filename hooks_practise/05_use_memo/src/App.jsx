import { useState, useMemo, useEffect, useContext, useReducer } from 'react'



// function App() {
//   const [apples, setApples] = useState(0);
//   const [oranges, setOranges] = useState(0);

//   const slowCalculation = (count) => {
//     console.log('counting fruits...')
//     for (let i = 0; i < 1000000000; i++) {
//     }
//     return count   
//   }
//   const totalApples = useMemo(() => slowCalculation(apples), [apples])


//   return (
//     <div>
//       <h1>Fruit Counter</h1>
//       <p>Apples: {apples}</p>
//       <p>Oranges: {oranges}</p>
//       <p>Total Apples (slowly calculated): {totalApples}</p>

//       <button onClick={() => setApples(apples + 1)}>Add Apple</button>
//       <button onClick={() => setOranges(oranges + 1)}>Add Orange</button>
//     </div>
//   );
// }



// function App() {
//   const [pizzas, setPizzas] = useState(
//     [
//       { name: 'Margherita', price: 8 },
//       { name: 'Pepperoni', price: 10 },
//     ]
//   )
//   const [discount, setDiscount] = useState(0);

//   const calculateTotalPrice = (pizzas) => {
//     console.log('Calculating total price... 🕐');
//     let total = 0;
//     for (const pizza of pizzas) {
//       total += pizza.price
//     }
//     return total;
//   }

//   const totalPrice = useMemo(() => calculateTotalPrice(pizzas), [pizzas])

//   return(
//     <div>
//       <h1>Pizza Shop</h1>
//       <p>Total Price: ${totalPrice}</p>
//       <p>Discount: {discount}%</p>
//       <button onClick={() => setDiscount(discount + 5)}>Add Discount</button>
//       <button onClick={() => setPizzas ([...pizzas], {name: 'Veg Delight', price: 9})} >Add Pizza</button>
//     </div>
//   )

// }


// function App() {
//   const [number, setNumber] = useState(0);
//   const [otherCount, setOtherCount] = useState(0);

//   const calculateSquare = (num) => {
//     console.log("calculating square...")
//     return num*num;
//   }

//   const square = useMemo(() => calculateSquare(number), [number]);

//   return(
//     <div>
//       <h1>Find Squares</h1>
//       <p>Number: {number}</p>
//       <p>Square: {square}</p>
//       <button onClick={() => setNumber(number + 1)}>Increase Number</button>
//       <button onClick={() => setOtherCount(otherCount + 1)}>Increase Other Count</button>
//       <p>Other Count: {otherCount} </p>
//     </div>
//   )
// }



// function App() {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState(10);

//   const expensiveCalculation =  useMemo(() => {
//     console.log("Calculating...")
//     let sum = 0;
//     for (let i = 0; i < value * 1000000; i++) {
//       sum += i;      
//     }
//     return sum;
//   }, [value])

//   return(
//     <div>
//       <h1>Expensive Calculation: {expensiveCalculation}</h1>
//       <button onClick={() => setCount(count + 1)} >Increase Count</button>
//       <button onClick={() => setValue(value + 1)}>Increase Value</button>
//     </div>
//   )
// }


// function App() {
//   const products = [
//     "Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon"
//   ]
//   const [searchTerm, setSearchTerm] = useState("");

//   const filterProducts = useMemo(() => {
//     console.log("Filtering products...")
//     return products.filter((product) => product.toLowerCase().includes(searchTerm.toLowerCase()))
//   },[searchTerm, products])

//   return(
//     <div>
//       <h1>Product Search App</h1>
//       <input type="text" placeholder='Search for a product...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//       <ul>
//         {filterProducts.map((product, index) => (
//           <li key={index} >{product}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }



// function App() {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState(10);

//   const expensiveCalculation =  useMemo(() => {
//     console.log("Calculating...")
//     let sum = 0;
//     for (let i = 0; i < value * 1000000; i++) {
//       sum += i;      
//     }
//     return sum;
//   }, [count])

//   return(
//     <div>
//       <h1>Expensive Calculation: {expensiveCalculation}</h1>
//       <button onClick={() => setCount(count + 1)} >Increase Count</button>
//       <button onClick={() => setValue(value + 1)}>Increase Value</button>
//     </div>
//   )
// }



// function App() {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(1000000);

//   const totalSum = useMemo(() => {
//     console.log("Calculating the sum...")
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//       sum += i;
//     }
//     return sum;
//   }, [number])
  
//   return(
//     <div>
//       <h1>Expensive Calculation Example</h1>
//       <h2>Total Sum (1 to {number}): {totalSum}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase Count (Triggers Re-render)</button>
//       <button onClick={() => setNumber(number + 1000000)}>Increase Count (Triggers Recalculation)</button>
//     </div>
//   )

// }



// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [count, setCount] = useState(0);
//   const products = [
//     "Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon"
//   ]

//   const filterProducts = useMemo(() => {
//     console.log('Filter items...')
//     return products.filter((product) => product.toLowerCase().includes(searchTerm.toLowerCase()))
//   }, [searchTerm, products])

//   return(
//     <div>
//       <h1>Search Fruits</h1>
//       <input type="text" placeholder='Serach here...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//       <ul>{filterProducts.map((product, index) => (
//         <li key={index}>{product}</li>
//       ))}</ul>
//       <button onClick={() => setCount(count + 1)}>Count</button>
//     </div>
//   )
// }



// function App() {
//   const [number, setNumber] = useState(0);
//   const [count, setCount] = useState(0);


//   const calculateFactorial = (num) => {
//     if (num < 0) {
//       return "undefined";
//     }
//     if (num === 0 || num === 1) {
//       return 1;
//     }
//     let result = 1
//     for (let i = 2; i <= num; i++) {
//       result *= i;
//     }
//     return result
//   }

//   const factorial = useMemo(() => {
//     console.log('Calculate factorial...')
//     return calculateFactorial(number)
//   }, [number]);

  
//   return (
//     <div>
//       <h1>Factorial Calculator</h1>
//       <input type="text" placeholder='Enter a number...' value={number} onChange={(e) => setNumber(parseInt(e.target.value))}  />
//       <p>Factorial: {factorial}</p>
//       <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
//     </div>
//   )
// }




// function App() {
//   const [amount, setAmount] = useState(1);
//   const[exchangeRate, setExchangeRate] = useState(0.85)
//   const [transactions, setTransactions] = useState(generateLargeData());

//   function generateLargeData () {
//     return Array.from({length: 1000}, (_, i) => i + 1)
//   }

//   const convertedTransactions = useMemo(() => {
//     console.log("Recalculating conversions...")
//     return transactions.map((transaction) => transaction * exchangeRate)
//   }, [transactions, exchangeRate])

//   return(
//     <div>
//       <h1>Currency Conveter</h1>
//       <div>
//         <label>Exchange Rate (USD to EUR): {"  "}
//         <input type="number" value={exchangeRate} onChange={(e) => setExchangeRate(parseFloat(e.target.value) || 0)} />
//         </label>        
//       </div>

//       <div>
//         <label>Amount in USD: {" "}
//         <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}/>
//         </label>
//         <p>Converted Amount in EUR: {(amount * exchangeRate).toFixed(2)}</p>
//       </div>

//       <h2>Converted Transactions:</h2>
//       <ul>
//         {convertedTransactions.map((converted, index) => (
//           <li key={index}>{converted.toFixed(2)}</li>
//         ))}
//       </ul>

//     </div>
//   )

// }





// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       async function fetchUsers() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         setUsers(data);
//         setLoading(false);
//       }
//       fetchUsers()
//     }, [])
//     const cachedUsers = useMemo(() => users, [users])
//     if (loading) {
//       return <p>Loading...</p>
//     }
//   return(
//     <div>
//       <h1>User List</h1>
//       <ul>{cachedUsers.map((user) => (
//         <li key={user.id}>{user.name} - {user.email}</li>
//       ))}</ul>
//     </div>
//   )
// }



// const generateData = (numRows) => {
//   return Array.from({length: numRows}, (_, index) => ({
//     id: index + 1,
//     product: `Product ${index + 1}`,
//     sales: Math.floor(Math.random() * 1000) + 1
//   }))
// }

// function App() {
//   const [rows, setRows] = useState(generateData(1000))
//   const [isLoading, setIsLoading] = useState(false)

//   const {totalSales, averageSales, rowsWithPercentage} = useMemo(() => {
//     console.log("Recalculating derived values...");
//     const totalSales = rows.reduce((acc, row) => acc + row.sales, 0)
//     const averageSales = totalSales/ rows.length;

//     const rowsWithPercentage = rows.map((row) => ({
//       ...row, percentage: ((row.sales / totalSales) * 100).toFixed(2),
//     }))
//     return {totalSales, averageSales, rowsWithPercentage}
//   }, [rows])

//   const loadMoreRows = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setRows((prevRows) => [...prevRows, ...generateData(1000)]);
//       setIsLoading(false);
//     }, 1000); // Simulate loading
//   };

//   return(
//     <div>
//       <h1>Dynamic Data Table</h1>

//       <div>
//         <h2>Derived Table</h2>
//         <table border="1">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Product</th>
//               <th>Sales</th>
//               <th>Percentage of Total Sales</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rowsWithPercentage.map((row) => (
//               <tr key={row.id}>
//                 <td>{row.id}</td>
//                 <td>{row.product}</td>
//                 <td>{row.sales}</td>
//                 <td>{row.percentage}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <button onClick={loadMoreRows} disabled={isLoading}>
//         {isLoading ? "Loading..." : "Load More Rows"}
//       </button>
//     </div>
//   )
// }


export default App;

