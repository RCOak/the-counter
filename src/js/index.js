//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import SimpleCounter from "./component/SimpleCounter.js"

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
let counter = 0;
setInterval(function(){
    const seis = Math.floor(counter/100000);
    const cinco = Math.floor(counter/10000);
    const quatro = Math.floor(counter/1000);
    const tres = Math.floor(counter/100);
    const dois = Math.floor(counter/10);
    const um = Math.floor(counter/1);
    console.log(seis, cinco, quatro, tres, dois, um)
    counter++;

    ReactDOM.render(<SimpleCounter digitoUm={um} digitoDois={dois} digitoTres={tres} digitoQuatro={quatro} digitoCinco={cinco} digitoSeis={seis} />, document.querySelector("#app"));
},1000);
//render your react application

