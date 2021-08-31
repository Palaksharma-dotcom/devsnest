import './App.css';
import { useState} from 'react';

function App() {
  const updatePlaceData=()=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=a1089418425d486c9a0185247210908&q=${place}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPlaceData(data)
    })
  }
  const [place,setPlace]= useState("");
  const [placeData ,setPlaceData]= useState({});
  return (
    <div className="App">
      <h1>Weather Card web-app</h1>
      
        <input type="text" 
        value={place}
        placeholder="delhi"
        onChange={(e)=>{
          setPlace(e.target.value)
          }} 
        />
        <button onClick={updatePlaceData}>search</button>
        <div className="card">
          {placeData.location ? 
          (
          <>
            <img src={placeData.current.condition.icon} alt="img" />
            <div className="temp">{placeData.current.temp_c}°</div>
            <div className="cityName">{placeData.location.name} </div>
            <div className="container">
              <div className="row">
                <div className="col">Wind Now <div className="data">{placeData.current.wind_kph} <span>Km/hr</span> </div></div>
                
                <div className="col">Humidity <div className="data">{placeData.current.humidity} <span>%</span></div></div>
                
                <div className="col">Precipitation <div className="data">{placeData.current.precip_in} <span>%</span></div></div>

              </div>
            </div>


         </>
         )
          :(<h5>not found</h5>)}
        </div>
    </div>
  );
}

export default App;