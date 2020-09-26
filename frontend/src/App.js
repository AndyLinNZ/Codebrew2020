import React, { useState } from 'react';
import Map from './components/Map';
import Home from './components/layouts/Home';
import { UserForm } from './components/UserForm';

function App() {
  
  const [location, setLocation] = useState([])
  const [clinicName, setClinicName] = useState("")

  const onFormSubmit = point => {
    setLocation(point)
  }

  const bookedAppointment = (name) => {
    setClinicName(name)
  }

  return (
    <div className="App">
      <Map location={location} bookedAppointment={bookedAppointment} />
      {location.length !== 2 && <Home onFormSubmit={onFormSubmit}/>}
      {clinicName !== "" && <UserForm clinicName={clinicName}/>}
    </div>
  );

}

export default App;

