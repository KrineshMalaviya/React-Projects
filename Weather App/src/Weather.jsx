import React from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Weather = () => {

    const [city,setCity] = useState()
    const [weather,setWeather] =  useState()
    const API_key = '7da7caef42eeaa0dbc4bfc1d4a82785f'
    function handleWeatherData(){
        fetchWeatherData() 
    }

    const fetchWeatherData = async () => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
            setWeather(response)
        }catch(error){
            console.log(error)
        }
    }
    

  return (
<div className="weather-container">
    <h1>Weather App</h1>
    <div className="weather-input-container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleWeatherData}>Get Weather</button>
    </div>

    <div className="weather-info">
      {weather && (
        <>
          <h2>Weather in {weather.data.name}</h2>
          <p>Temperature: {weather.data.main.temp} °C</p>
          <p>Condition: {weather.data.weather[0].description}</p>
          <p>Humidity: {weather.data.main.humidity} %</p>
          <p>Wind Speed: {weather.data.wind.speed} m/s</p>
        </>
      )}
    </div>
  </div>
  

  )
}

export default Weather
