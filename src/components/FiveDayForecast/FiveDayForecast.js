import { useEffect, useState } from 'react';


function FiveDayForecast({ state, apiKey }) {
    const [forecastData, setforecastData] = useState({})

    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${state}&appid=${apiKey}&units=imperial`;

    useEffect(() => {
        fetch(forecastURL)
        .then((res) => res.json())
        .then((data) => setforecastData(data));
      }, [forecastURL])

    return (
        <div>hey</div>
    )
}



export default FiveDayForecast;
