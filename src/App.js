import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [backside, setBackside] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/tutorials")
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setBackside(response)
    })
  },[]);

  return (
    <div className="App">
      {backside.map(back => <p> {back.title} </p>)}
    </div>
  );
}

export default App;
