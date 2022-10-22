import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";


const Countryinfo = ({country}) => {
const [weather, setweather] = useState([])
const api_key= process.env.REACT_APP_API_KEY
const api =`http://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&APPID=${api_key}`
const celcius = Math.round(weather.main?.temp - 273.15);

useEffect(() =>{
    axios
    .get(api)
    .then(responce => {
        console.log(responce)
        setweather(responce.data)
    })
},[api])

    return(
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map((k, v) =>  <li key={v}>{k}</li>)}
             </ul>

             <img src={country.flags.png} />
             <h1>weather in {country.capital[0]}</h1>
             <p>temperature {celcius} celcius</p>
             <img src={`http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`}
             alt="weather icon"/>
             <p>Wind {weather.wind?.speed} m/s</p>


        </div>
    )
}
export default Countryinfo