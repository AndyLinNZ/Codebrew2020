import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../App.css';


export class Success extends Component {

    render() {
        return (
            <div className="register">
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" style={styles.appbar}/>
                    <p style={styles.text}>Thank you for your submission. We will get back to you as soon as possible.</p>
                    </React.Fragment>
            </MuiThemeProvider>
            </div>
        )
    }
}

const styles = {
    appbar: {
        background: '#8c9496',
        flexGrow: 1,
        textAlign: 'center',
    },
    text: {
        fontFamily: "MyFont",
        fontSize: 30,
        padding: 20
    }
}

export default Success
