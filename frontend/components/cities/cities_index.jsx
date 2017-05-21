import React from 'react';
import { Link } from 'react-router-dom';

import CitiesIndexItem from './cities_index_item';

class CitiesIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchCities();
  }

  render(){
    const { cities } = this.props

    return(
      <div className="cities-container">
        <div className="cities-header-1">
          <h1>Set your home city</h1>
          <p>Make sure you're the first to her about Tea with Danger updates relevant to you.</p>
        </div>
        <div className="cities-header-2">
          <h2 className="cities-purpose">We're building our communities here.</h2>
          <p>You should sign up for tea time today!</p>
        </div>
        <div className="cities-list">
          {cities.map((city) => {
            return (
              <CitiesIndexItem key={city.id} city={city} />
            )
          })}
        </div>
      </div>

    )
  }
}

export default CitiesIndex;
