import React from "react";

// parts of header
import MarketTime from "./MarketTime";
import Title from "./Title";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="header-flexed">
      <MarketTime></MarketTime>
      <Title></Title>
      <Profile></Profile>
    </div>
  );
};

export default Header;
