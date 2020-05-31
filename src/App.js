import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Stock from './components/Stock.js';


// const result = dotenv.config()



function App() {

  console.log()
  const [backside, setBackside] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/tutorials")
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
  },[]);

  return (
    <div className="App">
      <Stock/>
    </div>
  );
}

export default App;
