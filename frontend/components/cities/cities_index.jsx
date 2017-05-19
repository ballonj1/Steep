import React from 'react';
import { Link } from 'react-router-dom';

class CitiesIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    debugger
    this.props.fetchCities();
    debugger;
  }

  render(){
    const { cities } = this.props

    return(
      <div className="cities-container">
        <div className="cities-header">
        </div>
        <div className="cities-list">
          {cities.map((city, idx) => {
            return (
              <div key={idx} className="city-image-container">
                <Link to={`/cities/${city.id}`}><img className="city-image" src={city.image_url} alt={city.name}/></Link>
              </div>
            )
          })}
        </div>
        <Link to="/cities/add">Add a City</Link>
      </div>
    )
  }
}

export default CitiesIndex;
