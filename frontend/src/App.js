import React, { useState } from 'react';
import Map from './components/Map';
import Home from './components/layouts/Home';

function App() {
  
  const [location, setLocation] = useState([])

  const onFormSubmit = point => {
    setLocation(point)
  }

  return (
    <div className="App">
      <Map location={location} />
      {location.length !== 2 && <Home onFormSubmit={onFormSubmit}/>}
    </div>
  );

}

export default App;
