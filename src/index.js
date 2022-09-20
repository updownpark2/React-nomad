import React from "react";
import ReactDOM from "react-dom/client";
import CoinApp from "./CoinTracker/CoinApp";
import CoinAppRetry from "./CoinTracker/CoinAppRetry";
import CoinAppRecap from "./CoinTracker/CoinAppRecap";
import AppMovie from "./MovieApp/AppMovie";
import Home from "./MovieAppRecap/routes/Home";
import App from "./MovieAppRecap/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppMovie />);
