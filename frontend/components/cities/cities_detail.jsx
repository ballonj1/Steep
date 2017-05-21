import React from 'react';
import EventContainer from '../event_show/event_container';

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
    return(
      <div>
        <EventContainer />
      </div>
    )
  }
}

export default CitiesDetail;
