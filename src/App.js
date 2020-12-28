import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Stock from './components/Stock.js';
import UserInfo from './containers/UserInfo';
import StockList from './containers/StockList';


// const result = dotenv.config()

function App() {

  console.log()
  const [backside, setBackside] = useState([])

  return (
    <div className="master-home-container">
      <UserInfo/>
      <Stock/>
      <StockList/>
    </div>
  );
}

export default App;
