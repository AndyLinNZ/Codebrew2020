import React, { useState } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../App.css';
import { List, ListItem } from 'material-ui/List'
import Button from '@material-ui/core/Button';
import { submitUserData } from '../actions/submitUserData'
import { CircularProgress } from '@material-ui/core'

export const Confirm = ({ values: { firstName, lastName, email, phone, time, dob, clinicName }, nextStep, prevStep }) => {

    const [loading, setLoading] = useState(false)

    const next = async (e) => {
        e.preventDefault();
        const fullname = firstName + " " + lastName
        setLoading(true)
        await submitUserData({ fullname, email, phone, appointmentTime: time, dob, hospital: clinicName })
        nextStep();
    }


    const back = e => {
        e.preventDefault();
        prevStep();
    }
    return (
        <div className="register">
            {loading ? <CircularProgress style={{marginTop:270}}/> :
                <MuiThemeProvider>
                    <>
                        <List style={{ padding: 0, margin: 0 }}>
                            <ListItem
                                primaryText="First Name"
                                secondaryText={firstName}
                            />
                            <ListItem
                                primaryText="Last Name"
                                secondaryText={lastName}
                            />
                            <ListItem
                                primaryText="Email"
                                secondaryText={email}
                            />
                            <ListItem
                                primaryText="Phone Number"
                                secondaryText={phone}
                            />
                            <ListItem
                                primaryText="Birthday"
                                secondaryText={dob}
                            />
                            <ListItem
                                primaryText="Appointment Date"
                                secondaryText={time.split("T")[0]}
                            />
                            <ListItem
                                primaryText="Appointment Time"
                                secondaryText={time.split("T")[1]}
                            />
                        </List>
                        <Button variant="contained"
                            style={styles.button}
                            onClick={back}
                        > Back
                </Button>
                        <Button variant="contained"
                            style={styles.button}
                            onClick={next}
                        > Confirm and Continue
                </Button>
                    </>
                </MuiThemeProvider>}

        </div>
    )
}

const styles = {
    button: {
        margin: 30
    },
    appbar: {
        background: '#8c9496',
        textAlign: 'center'
    }
}
export default Confirm
