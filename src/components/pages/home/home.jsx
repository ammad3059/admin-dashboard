import React from "react";
import "./home.css";
import FeaturedInfo from "./../../featuredInfo/featuredInfo";
import Chart from "../../chart/chart";
import WidgetSm from "../../widgets/widgetSm/widgetSm";
import WidgetLg from "../../widgets/widgetLg/widgetLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
