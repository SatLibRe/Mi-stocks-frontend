import React, { useState, useEffect } from 'react';


function TickerCard(props) {

  return (
    <li className='ticker-card-li'>
        Name:{props.stock.description} Symbol: {props.stock.symbol}
    </li>
  );
}

export default TickerCard;
