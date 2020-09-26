import React, { Component } from 'react'
import '../../App.css';
import VacFind from '../../img/Logo3.png'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <img src={VacFind} alt="VacFind" style={{width:"600px"}}/>
                <p className="caption"> Find vaccine providers near you, and book appointments! </p>
                <br></br>
                <hr style={{width:"90%", margin: "auto"}}></hr>
                <br></br>
                <input
                className="text"
                    type="text"
                    style={inputStyle}
                    placeholder= "Enter or choose your location here"
                />
            </div>
        )
    }
}
const inputStyle = {
    background: "#c7d3d1",
    textAlign: "center",
    width: "90%",
    height: "60px",
    margin: "20px",
    padding: "20px",
    borderRadius: "25px",
}


