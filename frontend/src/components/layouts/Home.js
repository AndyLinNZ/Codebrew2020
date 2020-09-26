import React from 'react'
import '../../App.css';
import Search from '../Search';
import VacFind from '../../imgs/Logo3.png'

export const Home = (props) =>  {
    const onFormSubmit = point =>{
        props.onFormSubmit(point)
    }
    return (
        <div className="container">
            <img src={VacFind} alt="VacFind" style={{ width: "600px" }} />
            <p className="caption"> Find vaccine providers near you, and book appointments! </p>
            <br></br>
            <hr style={{ width: "90%", margin: "auto" }}></hr>
            <br></br>
            <Search onFormSubmit={onFormSubmit}/>
        </div>
    )
}

export default Home