import React, {Component} from 'react'
import '../../App.css';
import Search from '../Search';
import VacFind from '../../imgs/Logo3.png'

export default class Home extends Component {
    onSubmit =() =>{
        ;
    }
    render() {
    return (
        <div className="container">
            <img src={VacFind} alt="VacFind" style={{ width: "600px" }} />
            <p className="caption"> Find vaccine providers near you, and book appointments! </p>
            <br></br>
            <hr style={{ width: "90%", margin: "auto" }}></hr>
            <br></br>
            <Search onSubmit={this.onSubmit}/>
        </div>
    )
    }
}



/*
import React, { useState, useEffect, useRef } from "react";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(cities)"], componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function Search() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyChqFfRblEdYBYRzlurWG2QTtbgIjVl9AQ&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

return (
    <div>
      <input
        type="text"
        style={inputStyle}
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter or choose your location here"
        value={query}
      />
    </div>
  );
}

const inputStyle = {
    background: "#c7d3d1",
    textAlign: "center",
    width: "90%",
    height: "60px",
    margin: "10px",
}
export default Search;
*/

/*
function Search() {
    const [address, setAddress] = React.useState("");

    const handleSelect = async (value) => {};
    return <div>
        <PlacesAutocomplete
            value = {address}
            onChange = {setAddress}
            onSelect = {handleSelect}
        >{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
            <input {...getInputProps({placeholder: "Enter or choose your location here"})} />
            <div>
                {loading ? <div>...loading</div> : null}
                {suggestions.map((suggestion) =>  {
                    return <div>{suggestion.description}</div>
                })}
            </div>
        </div>
        )}
        </PlacesAutocomplete>
    </div>
}

export default Search;
*/