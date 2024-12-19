import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Shubham",
    age: 21
  }
  let myArr = [1, 2, 3];
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
     <Card channel = {myObj} list = {myArr}/> 
     <Card username = "Shubham" btnText = "Visit Profile"/> 
     <Card username = "Mahesh" /> 
    </>
  )
}

export default App
