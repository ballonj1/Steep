import React from 'react';
import { withRouter } from 'react-router-dom';
import EventDetailContainer from './event_detail_container';

class EventIndex extends React.Component {
  constructor(props){
    super(props)

    this.handleJoin = this.handleJoin.bind(this);
    this.renderCityButton = this.renderCityButton.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.match.params.id !== this.props.match.params.id){
      nextProps.fetchCity(nextProps.match.params.id);
    }
  }

  componentDidMount() {
    this.props.fetchCity(this.props.match.params.id);
  }

  handleJoin(city_name, city_id, user_id){
    return e => {
      e.preventDefault();
      this.props.updateUserCity(city_name, city_id, user_id);
    }
  }

  renderCityButton(){
    if (this.props.cities.length > 0){
      if (this.props.session.currentUser.city_id !== this.props.cities[0].id){
        return(
          <button className="event-button" onClick={this.handleJoin(this.props.cities[0].name, this.props.cities[0].id, this.props.session.currentUser.id)}>MAKE {this.props.cities[0].name.toUpperCase()} YOUR HOME CITY!</button>
        )
      } else {
        return(
          <button className="event-button" onClick={this.handleJoin("", "", this.props.session.currentUser.id)}>LEAVE {this.props.cities[0].name.toUpperCase()}!</button>
        )
      }
    }
  }

  render(){
    console.log(this.props.match)
    const { cities } = this.props
    const button = this.renderCityButton();
    return(
      <div className="event-detail-container">
        <div className="event-detail-description">
          <h2>
            Tea Time is a conversation between a few people who know nothing about each other.
          </h2>
          <p>You'll never leave without questions, new perspectives, and the reminder that we're far more the same than we are different</p>
        </div>
        {button}
        <div className="event-details">
          {Object.keys((cities.length === 1 && cities[0].events) ? cities[0].events : []).map((key, idx) => {
            return(
              <EventDetailContainer key={idx} event={cities[0].events[key]} />
            )
          })}
        </div>
      </div>
    )
  }
}

export const EventIndexWithRouter = withRouter(EventIndex);
