import React, { Component } from "react";
import { Visibility } from "@mui/icons-material";

import "./widgetSm.css";

class WidgetSm extends React.Component {
  render() {
    return (
      <div className="widgetSmall">
        <span className="widgetSmallTitle">New Joining Members</span>
        <ul className="widgetSmallList">
          <li className="widgetSmallListItem">
            <img
              src="https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg"
              alt=""
              className="widgetSmallUserImg"
            />
            <div className="widgetSmallUserInfo">
              <span className="widgetSmallUserName">Alex</span>
              <span className="widgetSmallUserJob">Software Engineer</span>
            </div>
            <button className="widgetSmallUserButton">
              <Visibility className="widgetSmallUserIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmallListItem">
            <img
              src="https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg"
              alt=""
              className="widgetSmallUserImg"
            />
            <div className="widgetSmallUserInfo">
              <span className="widgetSmallUserName">Marry</span>
              <span className="widgetSmallUserJob">Software Engineer</span>
            </div>
            <button className="widgetSmallUserButton">
              <Visibility className="widgetSmallUserIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmallListItem">
            <img
              src="https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg"
              alt=""
              className="widgetSmallUserImg"
            />
            <div className="widgetSmallUserInfo">
              <span className="widgetSmallUserName">John</span>
              <span className="widgetSmallUserJob">Software Engineer</span>
            </div>
            <button className="widgetSmallUserButton">
              <Visibility className="widgetSmallUserIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmallListItem">
            <img
              src="https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg"
              alt=""
              className="widgetSmallUserImg"
            />
            <div className="widgetSmallUserInfo">
              <span className="widgetSmallUserName">John</span>
              <span className="widgetSmallUserJob">Software Engineer</span>
            </div>
            <button className="widgetSmallUserButton">
              <Visibility className="widgetSmallUserIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmallListItem">
            <img
              src="https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg"
              alt=""
              className="widgetSmallUserImg"
            />
            <div className="widgetSmallUserInfo">
              <span className="widgetSmallUserName">John</span>
              <span className="widgetSmallUserJob">Software Engineer</span>
            </div>
            <button className="widgetSmallUserButton">
              <Visibility className="widgetSmallUserIcon" />
              Display
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default WidgetSm;
