import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

function FiveDayForecast({ state, apiKey }) {
    const [forecastData, setforecastData] = useState({})

    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${state}&appid=${apiKey}&units=imperial`;

    useEffect(() => {
        fetch(forecastURL)
        .then((res) => res.json())
        .then((data) => setforecastData(data));
      }, [forecastURL])

    return (
        <>
        {forecastData.list ? (
            <Card>
                <Card.Img 
                variant='top'
                src={`http://openweathermap.org/img/w/${forecastData.list[1].weather[0].icon}.png`}
                alt="weather-status-icon"
                className=''
                />
                <Card.Title>
                    <h2>{forecastData.list[1].dt_txt}</h2>
                    <h3>{forecastData.list[1].main.temp_max}</h3>
                </Card.Title>
            </Card>
            ) :
            (
            <h1>Loading</h1>
            )
        }
        </>
    )
}



export default FiveDayForecast;
