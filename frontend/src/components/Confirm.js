import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import '../App.css';
import {List, ListItem} from 'material-ui/List'
import Button from '@material-ui/core/Button';
import axios from 'axios'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, phone, time, dob} } = this.props;
        return (
            <div className="register">
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" style={styles.appbar}/>
                    <List>
                        <ListItem
                        primaryText="First Name"
                        secondaryText= {firstName}
                        />
                        <ListItem
                        primaryText="Last Name"
                        secondaryText= {lastName}
                        />
                        <ListItem
                        primaryText="Email"
                        secondaryText= {email}
                        />
                        <ListItem
                        primaryText="Phone Number"
                        secondaryText= {phone}
                        />
                        <ListItem
                        primaryText="Birthday"
                        secondaryText= {dob}
                        />
                        <ListItem
                        primaryText="Appointment Date"
                        secondaryText= {time.split("T")[0]}
                        />
                        <ListItem
                        primaryText="Appointment Time"
                        secondaryText= {time.split("T")[1]}
                        />
                    </List>
                    <Button variant="contained"
                    style={styles.button}
                    onClick={this.back}
                    > Back
                    </Button>
                    <Button variant="contained"
                    style={styles.button}
                    onClick={this.continue}
                    > Confirm and Continue
                    </Button>
                    </React.Fragment>
            </MuiThemeProvider>
            </div>
        )
    }
}

const styles = {
    button: {
        margin: 50 
    },
    appbar: {
        background: '#8c9496',
        textAlign: 'center'
    }
}
export default Confirm
