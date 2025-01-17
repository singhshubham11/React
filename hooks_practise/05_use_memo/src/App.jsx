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


function App() {
  const [number, setNumber] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const calculateSquare = (num) => {
    console.log("calculating square...")
    return num*num;
  }

  const square = useMemo(() => calculateSquare(number), [number]);

  return(
    <div>
      <h1>Find Squares</h1>
      <p>Number: {number}</p>
      <p>Square: {square}</p>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>Increase Other Count</button>
      <p>Other Count: {otherCount} </p>
    </div>
  )
}

export default App;

