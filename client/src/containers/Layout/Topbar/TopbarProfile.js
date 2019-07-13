import React from "react";
import { MdExpandMore } from "react-icons/md";

const TopbarProfile = () => (
  <div className="topbar__profile">
    <button type="button" className="topbar__avatar">
      <p className="topbar__avatar-name">Welcome User</p>

      <MdExpandMore size={20} className="topbar__icon" />
    </button>
  </div>
);

export default TopbarProfile;
