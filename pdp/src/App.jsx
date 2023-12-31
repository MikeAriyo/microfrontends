import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-12">This is the product demo page</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
