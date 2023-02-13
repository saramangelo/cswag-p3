import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// The ReactDOM.render method is used to render a react element into the actual DOM
// The first argument is the component we want to render, and the second is the container element on the page
ReactDOM.render(<App />, document.getElementById("root"));
