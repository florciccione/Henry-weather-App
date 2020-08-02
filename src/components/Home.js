import React from 'react';
//COMPONENTS
import Nav from './Nav.jsx';
import Card from './Card.jsx';
//CSS
import './Home.css';

function Home({onSearch, cities, onClose}) {
    return (
        <div className='container_home'>
          <Nav onSearch={onSearch}/>
          <div className='body'>
            {cities &&
              <div className='cards'>
              {cities.map(c => <Card
                  key={c.id}
                  city={c}
                  onClose={() => onClose(c.id)}
                  id={c.id}
                /> )}
              </div>
            }
          </div>
        </div>
      );
};

export default Home;