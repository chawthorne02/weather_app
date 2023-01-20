import Card from 'react-bootstrap/Card';
import '../../styles/WeatherDisplay.css';

function WeatherDisplay({ apiData }) {
    return (
        <div>
            <Card className='weather-card-display'>
                <Card.Img 
                variant='top'
                 src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                 />
            </Card>
        </div>
    )
}

export default WeatherDisplay; 