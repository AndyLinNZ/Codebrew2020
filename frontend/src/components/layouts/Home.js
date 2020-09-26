import React, {Component} from 'react'
import '../../App.css';
import Search from '../Search';
import VacFind from '../../imgs/Logo3.png'

export default class Home extends Component {
    searchAddress = (address) => {
        console.log(address);
    }
    render() {
    return (
        <div className="container">
            <img src={VacFind} alt="VacFind" style={{ width: "600px" }} />
            <p className="caption"> Find vaccine providers near you, and book appointments! </p>
            <br></br>
            <hr style={{ width: "90%", margin: "auto" }}></hr>
            <br></br>
            <Search searchAddress={this.searchAddress}/>
        </div>
    )
    }
}



