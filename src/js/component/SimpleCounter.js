import propTypes from "prop-types";
import React from "react";


function SimpleCounter(props){
    return <div className="thecounter">
        <div className="icone"><i className="fa-regular fa-clock"></i></div>
        <div className="seis">0{props.digitoSeis % 10}</div>
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
},1000);

ReactDOM.render(
    <SimpleCounter digitoUm={um} digitoDois={dois} digitoTres={tres} digitoQuatro={quatro} digitoCinco={cinco} digitoSeis={seis} />,
    document.querySelector('#app'));
    export default SimpleCounter