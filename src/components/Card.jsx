import React from 'react';

//CSS
import './Card.css';

export default function Card ({onClose, city}) {
  var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  var f=new Date();
  var date=(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
    return (
      <div className="card">

        <div className="row_title">
          <div className="card_title">
            <div className='name'>{city.name}</div>
          </div>
          <div onClick={onClose} id="closeIcon" className="btn_close">X</div>
        </div>

        <div className="card_body">
          <div className='date'>{date}</div>
          <div className="clima_img">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} width="90" height="90" alt="" />
              <div className='weather'>{city.weather}</div>        
          </div>
          <div className='temps'>
            <div className='temp'>{city.temp}°</div>
            <div className="row_body">
              <div className="max">
                <div>{city.max}°C</div>
              </div>
              <div className="min">
                <div>{city.min}°C</div>
              </div>
            </div>
          </div>
        <div>Humedad: {city.humidity + '%'} </div>
        <div>Presión: {city.pressure} hPa</div>

        </div>
      </div>
    );
};
// reemplado el nombre de la ciudad por un link porque 
// necesito que me pueda llevar a la pagina de detalle de esa ciudad