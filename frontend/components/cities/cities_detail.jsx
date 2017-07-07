import React from 'react';
import EventIndexContainer from '../event_show/event_index_container';
import { Route, Link } from 'react-router-dom';

class CitiesDetail extends React.Component {
  constructor(props){
    super(props)

    this.buttonRender = this.buttonRender.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchCity(this.props.match.params.id)
    }
  }

  componentDidMount() {
    this.props.fetchCity(this.props.match.params.id)
  }

  buttonRender(){
    if (this.props.session.currentUser){
      return (
        <Link className="host-button" to={`/cities/${this.props.cities.length === 1 ? this.props.cities[0].id : 0}/hosting`}>HOST AN EVENT IN {this.props.cities.length === 1 ? this.props.cities[0].name.toUpperCase() : ""}</Link>
      )
    } else {
      return (
        <Link className="host-button" to={"/signin"}>SIGN IN TO HOST/JOIN EVENTS</Link>
      )
    }
  }

  render(){
    const { cities } = this.props;
    const button = this.buttonRender();
    return(
      <div className="city-detail-container">
        <div className="hero-image-container">
            <img className="hero-image" src={cities.length === 1 ? cities[0].image_url : ''} alt/>
        </div>
        <div className="city-detail-content">
          <EventIndexContainer />
        </div>
        <div className="host-button-container">
          {button}
        </div>
      </div>
    )
  }
}

export default CitiesDetail;
