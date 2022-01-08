import React from "react";
import Clock from "react-live-clock";
import moment from "moment";

const Time = () => {
  return (
    <div className="time">
      <div className="date">{moment().format("dddd MMMM Do YYYY")}</div>
      <Clock format={"h:mm:ss a"} ticking={true} timezone={"EST"} />
    </div>
  );
};

export default Time;
