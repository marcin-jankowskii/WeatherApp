import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './assets/App.css';


function App() {
  const [weather, setWeather] = useState(null);


  const handleSearch = location => {
    setWeather(location);


  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherDisplay data={weather} />}
 
    </div>
  );
}

export default App;
