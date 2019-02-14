import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Carousel from "./Carousel";

const App = () => (
    <Carousel/>
);

    const wrapper = document.getElementById("app");

    wrapper ? ReactDOM.render(<App />, wrapper) : null;