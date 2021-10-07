//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
function App() {
  const[lat, setLat] = useState([]);
  //console.log(lat);
  //console.log(lat===undefined);
  const[long, setLong] = useState([undefined]);
  const[data, setData] = useState([undefined]);
  //const[location,setLocation] = useState([undefined]);
  const[cityName,setName] = useState([undefined]);

  
  navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude); 
 
  });

 
  useEffect(() => {

    getLocation(lat,long)
    .then(res=>{
      
      try {
      
        setName(res.address.city);
        
      } catch(e) {
        console.log(e);
      }
    });
 
    getWeather(cityName)
    .then(res=> {
      try {
        setData(res);
      
      } catch(e) {
        console.log(e);
      }
      
    });


  }, [long,cityName])
 
  async function getWeather(cityName) {
    console.log("fetching weather");

    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},US&appid=1cc9d32cdb1cdf53293e1aad91562a89`
    )
      .then(res => res.json())
      .then(res => {
       console.log(res);
       return res;
      });
  }
  
  async function getLocation(lat, long) {
    console.log("fetching location");

    if((lat!==undefined)&&(typeof long!==undefined)){
      return await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.25830325a0c832028916fe2ec70cfbda&lat=${lat}&lon=${long}&format=json`
      )
        .then(res => res.json())
        .then(res => {
    
          console.log(res);
          return res;
        });
    }
  }

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
       
          
          <Weather weatherData={data}/>
          
        
      ): (
        <div>..loading</div>
        
      )}



    </div>

    
  );
}

export default App;
