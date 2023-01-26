import Card from 'react-bootstrap/Card';
import '../../styles/WeatherDisplay.css';

function WeatherDisplay({ apiData, celsiusToFarenheit }) {

    

    return (
        <div>
           {apiData.main ? (
            <Card className='weather-card-display'>
            <Card.Img 
            variant='top'
             src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
             alt="weather status icon"
             className='weather-icon'
             />
             <Card.Body>
                <Card.Title className='weather-title'>{apiData.name}</Card.Title>
                <Card.Text>
                    <section className='weather-info-display'>
                    <div className='left-info'>
                    <h5 className='temp-max'>
                        Max Temp: {apiData.main.temp_max} &deg;F
                    </h5>
                    <h5 className='temp-min'>
                        Min Temp: {apiData.main.temp_min} &deg;F
                    </h5>
                    </div>
                    <div>
                    <h5 className='feels_like'>
                        Feels like: {apiData.main.feels_like}
                    </h5>
                    <h5 className='wind-speed'>
                        Wind Speed: {apiData.wind.speed} mph
                    </h5>
                    </div>
                    </section>
                </Card.Text>
             </Card.Body>
        </Card>
           ) : (
            <h1>Loading</h1>
           )}
        </div>
    )
}

export default WeatherDisplay; 