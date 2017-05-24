import React from 'react';
import EventIndexContainer from '../event_show/event_index_container';
import { Route, Link } from 'react-router-dom';

class CitiesDetail extends React.Component {
  componentDidMount() {
    if (this.props.cities.length < 1) {
      this.props.fetchCity(parseInt(this.props.match.params.id))
    }
  }

  render(){
    const { cities } = this.props;
    const city = cities.filter((city) => {
      return city.id === parseInt(this.props.match.params.id);
    });
    const cityId = city.length > 0 ? city[0].id : "";
    const image_url = city.length > 0 ? city[0].image_url : "";
    const city_name = city.length > 0 ? city[0].name : "";

    return(
      <div className="city-detail-container">
        <div className="hero-image-container">
            <img className="hero-image" src={image_url} alt/>
        </div>
        <div className="city-detail-content">
          <EventIndexContainer city={city}/>
        </div>
        <Link className="event-button" to={`/cities/${cityId}/hosting`}>HOST AN EVENT</Link>
      </div>
    )
  }
}

export default CitiesDetail;
