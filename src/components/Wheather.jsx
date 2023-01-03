import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Wheather = () => {
    const [ wheather, setWheather ] = useState({}); 
    const [ degrees, setDegrees ] = useState(true);  


    useEffect( () => { 
        function success(pos) {
        const crd = pos.coords;       
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=d93feb7b25786fced97430299ab428f7`)
        .then(res => setWheather(res.data))               
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error);
       }, [ ] )

    console.log(wheather); 

    const fahrenheit = (wheather.main?.temp - 273.15).toFixed(2) ;
    const celsius = ((wheather.main?.temp -32)/1.8).toFixed(2) ; 

    const changeDegrees =  () => {
        setDegrees(!degrees) 
    }


    return (
        <div >
            <div className="card1">
                <h2 style={{color: "#00ffff", fontSize:"40px", padding:"20px", fontWeight:"bold" }} > WEATHER APP</h2>                
<h3 style={{color: "#fff", backgroundColor:"#000", fontSize:"20px", padding:"10px", borderRadius:"20px" }}  > {wheather.name}{", "} {wheather.sys?.country} </h3> 
<div className="icon_content">
<img className="img1"  src= {`http://openweathermap.org/img/wn/${wheather.weather?.[0].icon}@2x.png`} alt="" />
<h2 style={{color: "#00ffff", fontSize:"30px", padding:"20px" }} > 
    {degrees ? fahrenheit : celsius} 
            {" "} 
            {degrees ? '°C' : '°F' }
     </h2>
</div>
<div className="others_content">
<p> humidity: {wheather.main?.humidity} </p>
<p style={{color: "#00ffff" }} > wind speed: {wheather.wind?.speed} Km/h </p>
<p> pressure: {wheather.main?.pressure} </p>
</div>
<button style={{color: "#000", 
            backgroundColor:"#fff", 
            fontSize:"20px", 
            padding:"10px 20px", 
            borderRadius:"10px" }}  
            onClick={changeDegrees}
            > C / F 
</button>
<p style={{color: "#00ffff" }} > Fredy Méndez - Academlo </p>
</div>
        </div>
    );
};

export default Wheather;