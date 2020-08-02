import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Home from '../components/Home.js';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            humidity: recurso.main.humidity,
            pressure: recurso.main.pressure
          };
          console.log(recurso);
          setCities(oldCities => [...oldCities, ciudad]); //agrega al array de ciudades ya buscadas la ultima busqueda
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Home onSearch={onSearch} cities={cities} onClose={onClose} />}
      />
    </div>
  );
}

export default App;
