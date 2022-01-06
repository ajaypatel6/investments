import React from "react";
import Cryptos from "./Cryptos";
import Stocks from "./Stocks";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <h1>$8,141</h1>
        <div className="">
          <button className="btn btn-secondary">Change currency</button>
        </div>
        <h1>+9.2%</h1>
        <div className="assetCategory">
          <button className="btn btn-primary">All</button>
          <button className="btn btn-primary">Stocks</button>
          <button className="btn btn-primary">Crypto</button>
        </div>
        <Cryptos />
        <Stocks />
      </div>
    </>
  );
};

export default Portfolio;
