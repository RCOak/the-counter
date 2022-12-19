//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import SimpleCounter from "./component/SimpleCounter.js"

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import "./component/icons"

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
