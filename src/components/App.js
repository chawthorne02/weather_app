import '../styles/App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';

function App() {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('greenville');
  const [state, setState] = useState('greenville');

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
 
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
    <div className='App'>
    <header className='app-title'>
      <h2>Weather App</h2>
    </header>
    <Form className='location-form'>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control 
        type='location' 
        placeholder='Enter a location...'
        onChange={inputHandler}
        value={getState}
        />
      </Form.Group>
    </Form>
    <Button className='search-btn' onClick={submitHandler}>Search</Button>

    <WeatherDisplay apiData={apiData}/>
    </div>
  );
}

export default App;
