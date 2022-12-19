import propTypes from "prop-types";
import React from "react";


function SimpleCounter(props){
    return <div className="thecounter">
        <div><i className="fa-solid fa-clock"></i></div>
        <div className="seis">{props.digitoSeis % 10}</div>
        <div className="cinco">{props.digitoCinco % 10}</div>
        <div className="quatro">{props.digitoQuatro % 10}</div>
        <div className="tres">{props.digitoTres % 10}</div>
        <div className="dois">{props.digitoDois % 10}</div>
        <div className="um">{props.digitoUm % 10}</div>
    </div>;
}

SimpleCounter.propTypes = {
    digitoUm: propTypes.number,
    digitoDois: propTypes.number,
    digitoTres: propTypes.number,
    digitoQuatro: propTypes.number,
    digitoCinco: propTypes.number,
    digitoSeis: propTypes.number
};
    
    export default SimpleCounter