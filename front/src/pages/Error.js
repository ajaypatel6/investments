import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="name">ERRor</div>
      <Link to="/">
        <div className="assetCategory">
          <button className="btn btn-primary btn-category">
            Back to dashboard
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Error;
