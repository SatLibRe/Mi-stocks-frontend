import React, { useState, useEffect } from 'react';

function Stock() {

    const [stockXValues, setStockXValues] = useState([])
    const [stockYValues, setStockYValues] = useState([])


    useEffect(() => {
        fetchStock()
    }, []);

    // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=D0AZSV1R7TJHZJN2

    const fetchStock = () => {
        const symbol = "IBM"
        const apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.REACT_API_ALPHA_API_KEY}`
        
        fetch(apiCall)
        .then(response => response.json())
        .then(response => {
            let dates = []
            Object.keys(response["Time Series (Daily)"]).map(date => {
                 dates = [...dates,date]
             })
            setStockXValues(dates)
        })
    }

  return (
    <div>
        {stockXValues.map(date => <p> {date} </p>)}
    </div>
  );
}

export default Stock;
