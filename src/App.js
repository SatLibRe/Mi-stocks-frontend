import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Stock from './components/Stock.js';


// const result = dotenv.config()
//D0AZSV1R7TJHZJN2


function App() {

  const [backside, setBackside] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/tutorials")
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setBackside(response)
    })

    fetch(" https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=D0AZSV1R7TJHZJN2")
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
