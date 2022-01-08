import React, { useState, useEffect } from "react";
import items from "../data/crypto";

const Cryptos = () => {
  const test = () => {
    console.log(items);
  };

  useEffect(() => {
    test();
  }, []);

  // name: "Bitcoin",
  // holdings: 0.014,
  // current_price: 55462.93,
  return (
    <>
      <div className="cryptoAssets">Cryptos</div>
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

export default Cryptos;
