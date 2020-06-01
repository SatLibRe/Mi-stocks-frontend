import React, { useState, useEffect } from 'react';
import TickerCard from "../components/TickerCard"

function StockList() {

    const [stocks,setStocks] = useState([])

    useEffect(() => {
        fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.REACT_APP_FIN_API_KEY}`)
        .then(response => response.json())
        .then(response => {
            setStocks(response)
        })
    },[])

  return (
    <div id="stock-list-div">
        <ul>
            {stocks.map(stock => <TickerCard stock={stock}/>)}
        </ul>
    </div>
  );
}

export default StockList;