import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import ClipLoader from "react-spinners/ClipLoader";

function Stock() {

    const [stockXValues, setStockXValues] = useState([])
    const [stockYValues, setStockYValues] = useState([])
    const [symbol, setSymbol] = useState("SPY")

    const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    `;

    useEffect(() => {
        fetchStock()
    }, []);

    const fetchStock = () => {
        const apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=D0AZSV1R7TJHZJN2`
        fetch(apiCall)
        .then(response => response.json())
        .then(response => {
            console.log(response)
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
        setSymbol(event.target.value.toUpperCase());
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        fetchStock()
      }

  return (
    <div id='stock-div'>
        {stockXValues.length < 1 && stockYValues.length < 1 ? 
          <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          /> 
        :
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
        layout={{title: `${symbol}`} }
        />
        }
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
