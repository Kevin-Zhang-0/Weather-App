//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
function App() {
  const[lat, setLat] = useState([]);
  const[long, setLong] = useState([]);
  const[data, setData] = useState([]);
  const[location,setLocation] = useState([]);
  const[cityName,setName] = useState([]);
  const[stateCode,setCode] = useState([]);
  navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  });

 
  useEffect(() => {
    
    //console.log(lat);
    //console.log(long);
    getLocation(lat,long)
    .then(res=>{
      setLocation(res);
      try {
        //var tempob = JSON.parse(d);
        console.log(res.address.city)
        //var save = res.address.city;
        setName(res.address.city);
        //setCode(res.)
      } catch(e) {
        console.log(e);
      }
    });
    
    
    getWeather()
    .then(res=> {
      try {
        setData(res);
      
      } catch(e) {
        console.log(e);
      }
      
    });
    
  
    
   

    
    ///data["name"] = location.City;

    /** 
    const fetchData = async () => {
      
      
      //console.log(process.env.REACT_APP_API_URL);

      
      //first
      //await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=60cae35d1b9a7652148615f5c4e504ac`)
      //second

      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=8fa03f46691074555e14ebe2d2a07cce`)
      .then(res => res.json())
      .then(result => {
        setData(result);
        //console.log(result);
      });
      /*
      await fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.25830325a0c832028916fe2ec70cfbda&lat=${lat}&lon=${long}&format=json`)
      .then(res => res.json())
      .then(result => {
        setData(result);
        console.log(result);
      });
      

    }
    const fetchLocation = async () => {
      
      await fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.25830325a0c832028916fe2ec70cfbda&lat=${lat}&lon=${long}&format=json`)
      .then(res => res.json())
      .then(result => {
        setLocation(result);
        //console.log(location["address"].city);
        //console.log(result);
      });
      

    }
    
    fetchData();
    fetchLocation();
    */
    
    function getWeather() {
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1cc9d32cdb1cdf53293e1aad91562a89`
      )
        .then(res => res.json())
        .then(res => {
          /** 
          if (Object.entries(weather).length) {
            const mappedData = mapDataToWeatherInterface(weather);
            return mappedData;
          }
          **/
         //res["name"] = "stupid";
         return res;
        });
    }

  }, [lat,long,cityName])
  /** 
  function cityName(d){
    
    try {
      //var tempob = JSON.parse(d);
      console.log(d.address.city)
    
    } catch(e) {
      console.log(e);
    }
  }
  */

  
  function getLocation(lat, long) {
    return fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=pk.25830325a0c832028916fe2ec70cfbda&lat=${lat}&lon=${long}&format=json`
    )
      .then(res => res.json())
      .then(res => {
        /** 
        if (Object.entries(weather).length) {
          const mappedData = mapDataToWeatherInterface(weather);
          return mappedData;
        }
        **/
       //data["city"] = res.address.city;
       return res;
      });
  }

  console.log(data);
  console.log(location);
  console.log("city name " + cityName);
  


  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
       
          
          <Weather weatherData={data}/>
          
        
      ): (
        <div></div>
        
      )}



    </div>

    
  );
}

export default App;
