import React, { Component } from 'react';

class Clima extends Component {

    mostrarResultado = () => {

        const {name,weather,main}=this.props.resultado;

        if(!name || !weather || !main) return null;

        const kelvin =273.15;

        const urlIcon= `http://openweathermap.org/img/w/${weather[0].icon}.png`;

        const alt = `clima de ${name}`

        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado del clima de: {name}</h2>
                            <p className="temperatura">
                                Acutal: { (main.temp - kelvin).toFixed(2) } &deg;C
                                <img src={urlIcon} alt={alt}></img>
                            </p>
                            <p>Max. { (main.temp_max - kelvin).toFixed(2) } &deg;C</p>
                            <p>Min. { (main.temp_min - kelvin).toFixed(2) } &deg;C</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    
    render() { 
        
        return (  
            <div className="container">
                <div className="row">
                    {this.mostrarResultado()}
                </div>
            </div>
        );
    }
}
 
export default Clima;