import React from "react";
import prof from "../common/images/menu.jpeg";
import { Link } from "react-router-dom";
import { NotificationsActive, Language, Settings } from "@mui/icons-material";
import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBar-wrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">Vidly</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topIconContainer">
            <NotificationsActive />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topIconContainer">
            <Settings />
          </div>
          <img src={prof} alt="" className="img-profile" />
        </div>
      </div>
    </div>
  );
};
export default TopBar;
