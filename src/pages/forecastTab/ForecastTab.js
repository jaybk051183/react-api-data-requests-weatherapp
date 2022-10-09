/*
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ForecastTab.css';
const[loading, toggleLoading]=useState(false)
const [error, toggleError] = useState(false);

const apiKey = "8c7c2232a13a04304df4ebe4f8febec2"

function ForecastTab({coordinates}) {
    const [forecasts, setForecasts ]=useState([]);

    useEffect(() =>
    {
        async function fetchData() {
            toggleError(false)
            toggleLoading(true)
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,current,hourly&include=weekly&appid=${apiKey}`)
                console.log(result.data);
                setForecasts(result.data);
            } catch (e) {
                console.error(e)
            }
            toggleLoading(false)
        }
        if(coordinates){
            fetchData();
        }
    }
    , [coordinates])

  return (
    <div className="tab-wrapper">
        {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
        {loading && <span>Loading...</span>}
        {forecasts.length === 0 && !error &&
            <span className="no-forecast">
          Zoek eerst een locatie om het weer voor deze week te bekijken
            </span>}
        {forecasts.map((daily) =>{
            return(
                <article className="forecast-day">
                    <section className="forecast-weather">
                        <span>
                            {daily.main.temp} C
                        </span>
                        <span className="weather-description">
                        </span>
                    </section>
                </article>
            )
        })}
    </div>
  );
}

export default ForecastTab;
*/
