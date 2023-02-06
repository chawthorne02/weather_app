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
        <section className='forecast-display'>
            {forecastData.list.main ? (
            <Card className='forecast-card'>
                <Card.Body>
                    <Card.Title>{forecastData.list.dt_txt}</Card.Title>
                </Card.Body>
            </Card>
            ) : (
             <Spinner animation="grow" variant="primary" />
            )}
        </section>
           
    )
}



export default FiveDayForecast;
