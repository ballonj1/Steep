import React from 'react';
import EventIndexContainer from '../event_show/event_index_container';
import { Route, Link } from 'react-router-dom';

class CitiesDetail extends React.Component {

  componentWillReceiveProps(nextProps){
    if (nextProps.cities.length !== 1 && (nextProps.match.params.id !== this.props.match.params.id)) {
      this.props.fetchCity(this.props.match.params.id)
    }
  }

  componentDidMount() {
    if (this.props.cities.length < 1) {
      this.props.fetchCity(this.props.match.params.id)
    }
  }

  render(){
    const { cities } = this.props;
    // const city = cities.filter((city) => {
    //   return city.id === parseInt(this.props.match.params.id);
    // });
    // const cityId = city.length > 0 ? city[0].id : "";
    // const image_url = city.length > 0 ? city[0].image_url : "";
    // const city_name = city.length > 0 ? city[0].name : "";

    return(
      <div className="city-detail-container">
        <div className="hero-image-container">
            <img className="hero-image" src={cities.length === 1 ? cities[0].image_url : ''} alt/>
        </div>
        <div className="city-detail-content">
          <EventIndexContainer />
        </div>
        <div className="host-button-container">
          <Link className="host-button" to={`/cities/${cities.length > 1 ? cities[0].id : 0}/hosting`}>HOST AN EVENT IN {cities.length > 1 ? cities[0].name.toUpperCase() : ""}</Link>
        </div>
      </div>
    )
  }
}

export default CitiesDetail;
