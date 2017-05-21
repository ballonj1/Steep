import React from 'react';

class CitiesDetail extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchCity(parseInt(this.props.match.params.id))
  }

  render(){
    const { cities } = this.props;
    console.log(cities)
    return(
      <div>
        <p>Out here.</p>
      </div>
    )
  }
}

export default CitiesDetail;
