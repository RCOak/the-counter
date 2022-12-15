//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";



// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import "./component/icons"

function simplecounter(props){
    return <div className="thecounter">
        <div className="icone"><i className="fa-regular fa-clock"></i></div>
        <div className="seis">0</div>
        <div className="cinco">0</div>
        <div className="quatro">0</div>
        <div className="tres">0</div>
        <div className="dois">0</div>
        <div className="um">0</div>
    </div>;
}

//render your react application
ReactDOM.render(<simplecounter />, document.querySelector("#app"));
