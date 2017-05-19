import React from 'react';
import { Link } from 'react-router-dom';

class Cities extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    debugger
    this.props.fetchCities();
    debugger;
  }

  render(){

    return(
      <div className="cities-container">
        <div className="cities-header">
          <div className="cities-list">

            <Link to="/cities/add">Add a City</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Cities;
