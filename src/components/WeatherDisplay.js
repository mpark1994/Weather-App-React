import React, {useEffect, useState} from 'react'
import IMAGES from '../assets'
import WeatherDisplayForm from './WeatherDisplayForm'

import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'
import { AiFillCaretUp } from 'react-icons/ai'



function WeatherDisplay() {

  // Toggle data tab
  const [information, setInformation] = useState(false)

  const showInformation = e => {
    setInformation(!information)
  }

  const today = new Date()
  let imageToggle;

  // Toggle image depending on time

  // Get current hour to toggle
  const [viewHour, setViewHour] = useState(today.getHours())

  const toggleHour = hour => {
    let currentHour = viewHour + hour
    if (currentHour < 0) {
        currentHour = 23
    } else if (currentHour > 23) {
        currentHour = 0
    }
    setViewHour(currentHour)
  }

// For night image
if (viewHour >= 18 || viewHour <= 5) {
    imageToggle = false
    // For day image
    } else {
    imageToggle = true
    }

  // Switch Forecast days (API currently only allowed up to 2 extra days)
  const [forecast, setForecast] = useState(0)

  const changeForecast = (day) => {
    let forecastDay = forecast + day
    if (forecastDay < 0) {
        forecastDay = 2
    } else if (forecastDay > 2) {
        forecastDay = 0
    }
    setForecast(forecastDay)
  }

  // Weather API Data here  
  const [weatherData, setWeatherData] = useState(null)

  const updateLocation = location => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '69175f9959mshbe06fbf75146983p1cc2ccjsn76aad54e5a5c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    // Note: API request only works up to 3 days even though documentation says otherwise, so param is set to 3 for now
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            const newWeatherData = response
            setWeatherData(newWeatherData)
            setForecast(0)
            setViewHour(today.getHours())
        })
        .catch(err => console.error(err));
  }

  // Set initial API
  useEffect(() => {
    updateLocation("Ottawa")

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Render template
  return (
    
    <>
    {weatherData && <>
    <h1 className='title'>Weather App</h1>

    <WeatherDisplayForm onSubmit={updateLocation}/>

    <div className="arrow">
        <div className="arrow-icon">
            <BsFillArrowLeftCircleFill size={20} onClick={() => changeForecast(-1)}/>
        </div>
        <div className='days'>
            {forecast === 0 ? "Today": `Day ${forecast + 1}`}
        </div>
        <div className="arrow-icon">
            <BsFillArrowRightCircleFill size={20} onClick={() => changeForecast(1)}/>
        </div>
    </div>

    <div className="arrow">
        <div className="arrow-icon">
            <BsFillArrowLeftCircleFill size={15} onClick={() => toggleHour(-1)}/>
        </div>
        <div className='days'>
            {viewHour}:00h
        </div>
        <div className="arrow-icon">
            <BsFillArrowRightCircleFill size={15} onClick={() => toggleHour(1)}/>
        </div>
    </div>

    <div className={information ? "container": "container-closed"}>
        <div className='upper-data'>
            {imageToggle ? (
                <img src={IMAGES['day.png']} alt="day"/>
            ): (
                <img src={IMAGES['night.png']} alt="night"/>
            )}
            <div className='weather-data'>
                <div className='location'>{weatherData.location.name}, {weatherData.location.region}</div>
                <div className='temperature'>{weatherData.forecast.forecastday[forecast].hour[viewHour].temp_c}°C</div>
            </div>
        </div>

        <div className='lower-data'>
            <div className='more-info-label'>
                {!information ? (
                    <div className='more-info-label-container' onClick={showInformation}>
                        More Data <AiFillCaretDown />
                    </div>
                ):(
                    <div className='more-info-label-container' onClick={showInformation}>
                        More Data <AiFillCaretUp />
                    </div>
                )}

            </div>

            {information ? (
            <>
                <div className='more-info-container'>
                    <div className='info-block'>
                        <div className='info-block-label'>
                            <img src={weatherData.forecast.forecastday[forecast].hour[viewHour].condition.icon} alt={weatherData.forecast.forecastday[forecast].hour[viewHour].condition.text}/>
                            <span>Condition</span>
                        </div>
                        <div className='info-block-value'>
                            {weatherData.forecast.forecastday[forecast].day.condition.text}
                        </div>
                    </div>

                    <div className='info-block'>
                        <div className='info-block-label'>
                            <img src={IMAGES['precipitation.png']} alt='max'/>
                            <span>Precipitation</span>
                        </div>
                        <div className='info-block-value'>
                        {weatherData.forecast.forecastday[forecast].hour[viewHour].precip_mm}mm
                        </div>
                    </div>

                    <div className='info-block'>
                        <div className='info-block-label'>
                            <img src={IMAGES['humidity.png']} alt='humidity'/>
                            <span>Humidity</span>
                        </div>
                        <div className='info-block-value'>
                        {weatherData.forecast.forecastday[forecast].hour[viewHour].humidity}%
                        </div>
                    </div>

                    <div className='info-block'>
                        <div className='info-block-label'>
                            <img src={IMAGES['wind.png']} alt='wind'/>
                            <span>Wind</span>
                        </div>
                        <div className='info-block-value'>
                        {weatherData.forecast.forecastday[forecast].hour[viewHour].wind_kph}km/h
                        </div>
                    </div>
                </div>
            </>): (<></>)}
            
        </div>
    </div>
    </>}
    </>
  )
}

export default WeatherDisplay