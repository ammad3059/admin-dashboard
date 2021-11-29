import React from "react";
import {
  Home,
  TrendingUp,
  BarChart,
  Person,
  ShoppingBag,
  Paid,
  Email,
  Feedback,
  Message,
  ManageAccounts,
  Report,
} from "@mui/icons-material";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3>My Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <Home className="sideBarListItemIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarListItemIcon" />
              Sales
            </li>
            <li className="sideBarListItem">
              <BarChart className="sideBarListItemIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3>Quick Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <Person className="sideBarListItemIcon" />
              Users
            </li>
            <li className="sideBarListItem">
              <ShoppingBag className="sideBarListItemIcon" />
              Products
            </li>
            <li className="sideBarListItem">
              <Paid className="sideBarListItemIcon" />
              Transactioons
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3>Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <Email className="sideBarListItemIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <Feedback className="sideBarListItemIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <Message className="sideBarListItemIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3>Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <ManageAccounts className="sideBarListItemIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <Report className="sideBarListItemIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
