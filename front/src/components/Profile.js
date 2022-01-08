import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile">
      <Link to="/Profile">
        <button type="button" class="btn btn-outline-success btn-profile">
          <FaRegUserCircle className="userIcon"></FaRegUserCircle>
        </button>
      </Link>
    </div>
  );
};

export default Profile;
