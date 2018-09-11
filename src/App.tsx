import * as React from 'react';
import './App.css';

import LocationInputForm from './components/LocationInputForm/LocationInputForm';
import Titles from './components/Titles/Titles';
import Weather from './components/Weather/Weather';

const API_KEY = "f91e53300319f33447e5d7ce0316f43a";

class App extends React.Component {

  public state = {
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined,
    humidity: undefined,
    temperature: undefined,
  }

  public getWeather = async (event: any) => {
    event.preventDefault();
    const city: string = event.target.city.value;
    const country: string = event.target.country.value;
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&=metrics`);
    const data = await API_CALL.json();
    console.log(data);
    this.setState({
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      error: "",
      humidity: data.main.humidity,
      temperature: data.main.temp,
    })
  }

  public render() {
    return (
      <div className="App">
        <Titles />
        <LocationInputForm getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
