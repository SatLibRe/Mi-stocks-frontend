import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function Stock() {

    const [stockXValues, setStockXValues] = useState([])
    const [stockYValues, setStockYValues] = useState([])


    useEffect(() => {
        fetchStock()
    }, []);

    const fetchStock = () => {
        const symbol = "IBM"
        const apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.REACT_API_ALPHA_API_KEY}`
        
        fetch(apiCall)
        .then(response => response.json())
        .then(response => {
            let dates = []
            let opens = []

            for(const key in response["Time Series (Daily)"]){
                dates.push(key)
                opens.push(response["Time Series (Daily)"][key]["1. open"])
            }
            setStockXValues(dates)
            setStockYValues(opens)
        })
    }

  return (
    <div>
        {/* {stockXValues.map(date => <p> {date} </p>)} */}
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
        layout={ {width: 720, height: 340, title: ''} }
      />
    </div>
  );
}

export default Stock;
