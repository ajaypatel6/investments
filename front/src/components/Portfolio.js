import React from "react";
import Cryptos from "./Cryptos";
import Stocks from "./Stocks";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio p-1 rounded">
        <h1 className="totalValue">$8,141</h1>

        {/* <div className="">
          <button className="btn btn-secondary">Change currency (should be in profile)</button>
        </div> */}

        <h1 className="percent">+9.2%</h1>
        <div className="assetCategory">
          <button className="btn btn-primary btn-category">All</button>
          <button className="btn btn-primary btn-category">Stocks</button>
          <button className="btn btn-primary btn-category">Crypto</button>
        </div>
        <Cryptos />
        <Stocks />
      </div>
    </>
  );
};

export default Portfolio;
