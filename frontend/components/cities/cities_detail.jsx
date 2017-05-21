import React from 'react';

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
        <p></p>
      </div>
    )
  }
}

export default CitiesDetail;
