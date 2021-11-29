import React, { Component } from "react";
import "./widgetLg.css";
import Button from "./../../common/button";

class WidgetLg extends React.Component {
  render() {
    return (
      <div className="widgetLarge">
        <span className="widgetLargeTitle">Latest Transactions</span>
        <table className="widgetLargeTable">
          <tr className="widgetLargeRow">
            <th className="widgetLargeHeading">Customer</th>
            <th className="widgetLargeHeading">Date</th>
            <th className="widgetLargeHeading">Amount</th>
            <th className="widgetLargeHeading">Status</th>
          </tr>
          <tr className="widgetLargeRow">
            <td className="widgetLargeUser">
              <img
                src="https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg"
                alt=""
                className="widgetLargeImg"
              />
              <span className="widgetLargeName">Alex</span>
            </td>
            <td className="widgetLargeData">2 Jun 2021</td>
            <td className="widgetLargeData">$2045</td>
            <td className="widgetLargeData">
              <Button title="Approved" />
            </td>
          </tr>
          <tr className="widgetLargeRow">
            <td className="widgetLargeUser">
              <img
                src="https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg"
                alt=""
                className="widgetLargeImg"
              />
              <span className="widgetLargeName">Alex</span>
            </td>
            <td className="widgetLargeData">2 Jun 2021</td>
            <td className="widgetLargeData">$2045</td>
            <td className="widgetLargeData">
              <Button title="Pending" />
            </td>
          </tr>
          <tr className="widgetLargeRow">
            <td className="widgetLargeUser">
              <img
                src="https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg"
                alt=""
                className="widgetLargeImg"
              />
              <span className="widgetLargeName">Alex</span>
            </td>
            <td className="widgetLargeData">2 Jun 2021</td>
            <td className="widgetLargeData">$2045</td>
            <td className="widgetLargeData">
              <Button title="Declined" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default WidgetLg;
