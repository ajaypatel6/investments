import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const changeTimezone = () => {
    console.log("time change!!");
  };

  return (
    <>
      <Link to="/">
        <div className="assetCategory">
          <button className="btn btn-primary btn-back">
            Back to dashboard
          </button>
        </div>
      </Link>
      <h1 className="">Profile</h1>
      <div className="portfolio">
        <button
          className="timeBtn btn btn-outline-secondary btn-settings"
          onClick={() => changeTimezone()}
        >
          Change time zone
        </button>
        <button
          className="timeBtn btn btn-outline-secondary btn-settings"
          onClick={() => changeTimezone()}
        >
          Change currency
        </button>
      </div>
    </>
  );
};

export default Profile;
