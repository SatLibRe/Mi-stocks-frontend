import React, { useState, useEffect } from 'react';


function StockList() {

    console.log(process.env)

    useEffect(() => {
        fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.REACT_APP_FIN_API_KEY}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    },[])

  return (
    <div id="stock-list-div">
        
    </div>
  );
}

export default StockList;