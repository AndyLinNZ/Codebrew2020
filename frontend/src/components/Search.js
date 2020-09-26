import React, { Component } from 'react'
import '../App.css'

export default class Search extends Component {
    state = {
        address: ''
    }
    onChange = (e) => this.setState({ address: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchAddress(this.state.address);
        this.setState({address: ''});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    style={inputStyle}
                    placeholder="Enter or choose your location here"
                    value={this.state.address}
                    onChange={this.onChange}
                />
            </form>
        )
    }
}

const inputStyle = {
    background: "#c7d3d1",
    textAlign: "center",
    width: "90%",
    height: "60px",
    margin: "10px",
}
