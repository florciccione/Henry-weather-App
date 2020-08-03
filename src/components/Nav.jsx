import React from 'react';
//COMPONENTS
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
//CSS
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <div  className="bg_navbar"></div>

      <nav className="navbar">
        <a className="navbar_brand" href='https://www.soyhenry.com/' target='blanck'>   
            <img id="logoHenry" src={Logo} width="40" height="40" alt="" />
        </a>
        <p>Henry - Weather App</p>
        <div className='navbar_search'>
          <div className='txt'>Escribí el nombre de la ciudad cuyo clima queres conocer 🡪</div>
          <SearchBar onSearch={onSearch}/>
        </div>
      </nav>
       
    </div>
  );
};

export default Nav;
