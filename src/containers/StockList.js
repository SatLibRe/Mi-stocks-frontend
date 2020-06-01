import React, { useState, useEffect } from 'react';
import TickerCard from "../components/TickerCard"
import ClipLoader from "react-spinners/ClipLoader";

function StockList() {

    const [stocks,setStocks] = useState([])
    const [search,setSearch] = useState("")

    useEffect(() => {
        fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.REACT_APP_FIN_API_KEY}`)
        .then(response => response.json())
        .then(response => {
            setStocks(response)
        })
    },[])

    let filteredStocks = stocks.filter(stock => {
        return stock.description.indexOf(search) != -1
    })

    const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    `;

    const handleSearch = (e) => {
        setSearch(e.target.value.toUpperCase());
    }

  return (
    <div id="stock-list-div">
        <form>
            <label>
            Search:
            <input type="text" value={search} onChange={handleSearch} />
            </label>
        </form>
        {stocks.length < 1 ? 
        <ClipLoader
        css={override}
        size={150}
        color={"#123abc"}
        /> 
        :
        <ul>
            {filteredStocks.map(stock => <TickerCard stock={stock}/>)}
        </ul>
        }
    </div>
  );
}

export default StockList;