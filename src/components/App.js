import '../styles/App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData] = useState({})
  const [getState, setGetState] = useState('greenville')
  const [state, setState] = useState('greenville')

  const apiKey = process.env.WEATHER_APP_API_KEY
  const apiUrl = 'const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;'
 
  useEffect(() => {
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data));
  }, [apiUrl])

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Weather App</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default App;
