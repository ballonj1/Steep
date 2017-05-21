import React from 'react';
import { Link } from 'react-router-dom';

const CitiesIndexItem = ({ city }) => {
  return (
    <div key={city.id} className="city-image-container">
      <Link to={`/cities/${city.id}`}><img className="city-image" src={city.image_url} alt={city.name}/></Link>
      <h2 className="city-image-name">{city.name}</h2>
    </div>
  )
}

export default CitiesIndexItem;
