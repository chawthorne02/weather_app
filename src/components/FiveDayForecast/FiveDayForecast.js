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
                <Card.Title>{forecastData.list[1].main.temp}</Card.Title>
            </Card>
            ) :
            (<h1>Loading</h1>
            )
        }
        </>
    )
}



export default FiveDayForecast;
