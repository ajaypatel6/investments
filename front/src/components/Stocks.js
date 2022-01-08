import React, { useState, useEffect } from "react";
import items from "../data/stocks";

// https://www.youtube.com/watch?v=T26V1aSEtJE&ab_channel=SimonSuh using alphavantage
const Stocks = () => {
  // const stocks = [];

  // const fetchStock = () => {
  //   const API_key = "0NUTUP4V6WL4XB8N";

  //   let API_call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=compact&apikey=${API_key}`;

  //   fetch(API_call)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchStock();
  // }, [fetchStock]);

  return (
    <>
      {/* <div className="stockAssets"> Stocks</div>
      <div className="singleStock">TD 18 $99</div> */}
      <div className="cryptoAssets">Stocks</div>
      {/* Name, Price, Holding */}
      {/* For  */}

      {items.map((crypto) => {
        const { id, name, holdings, current_price } = crypto;
        return (
          <div className="singleCrypto">
            <article key={id} className="menu-item">
              <div className="item-info">
                <header>
                  <h4 className="cryptoName">{name}</h4>
                </header>
                <h5 className="holdings">Quantity: {holdings}</h5>
                <h5 className="price">Price: {current_price}</h5>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default Stocks;
