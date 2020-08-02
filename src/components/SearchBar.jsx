import React, { useState } from "react";
import './Nav.css';

// {onSearch} es lo mismo que decir props.onSearch (destructuring)

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        className="searchTxt"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="BUSCAR" className="searchBtn"/>
    </form>
  );
}
