import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function Stock() {

    const [stockXValues, setStockXValues] = useState([])
    const [stockYValues, setStockYValues] = useState([])
    const [symbol, setSymbol] = useState("SPY")


    useEffect(() => {
        fetchStock()
    }, []);

    const fetchStock = () => {
        const apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.REACT_API_ALPHA_API_KEY}`
        
        fetch(apiCall)
        .then(response => response.json())
        .then(response => {
            if(response["Error Message"]){
                alert('That is not a Stock')
            } else {
                let dates = []
                let opens = []

                for(const key in response["Time Series (Daily)"]){
                    dates.push(key)
                    opens.push(response["Time Series (Daily)"][key]["1. open"])
                }
                setStockXValues(dates)
                setStockYValues(opens)
            }
        })
    }

    const handleSymbolChange = (event) => {
        setSymbol(event.target.value);
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        fetchStock()
      }

  return (
    <div>
        <Plot
        data={[
          {
            x: stockXValues,
            y: stockYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={ {width: 720, height: 340, title: `${symbol}`} }
      />
         <form onSubmit={handleSubmit}>
        <label>
          Ticker:
          <input type="text" value={symbol} onChange={handleSymbolChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Stock;
