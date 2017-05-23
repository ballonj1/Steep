import React from 'react';
import { withRouter } from 'react-router-dom';
import EventDetailContainer from './event_detail_container';

class EventIndex extends React.Component {
  constructor(props){
    super(props)

    this.handleJoin = this.handleJoin.bind(this);
    this.renderCityButton = this.renderCityButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents(parseInt(this.props.match.params.id));
    if (this.props.session.currentUser){
      this.props.fetchJoins(parseInt(this.props.session.currentUser.id));
    }
  }

  handleJoin(city_name, city_id, user_id){
    return e => {
      e.preventDefault();
      this.props.updateUserCity(city_name, city_id, user_id);
    }
  }

  renderCityButton(){
    if (this.props.city.length > 0){
      if (this.props.session.currentUser.city_id !== this.props.city[0].id){
        return(
          <button className="event-button" onClick={this.handleJoin(this.props.city[0].name, this.props.city[0].id, this.props.session.currentUser.id)}>Make {this.props.city[0].name} your home city!</button>
        )
      } else {
        return(
          <button className="event-button" onClick={this.handleJoin("", "", this.props.session.currentUser.id)}>Leave {this.props.city[0].name}!</button>
        )
      }
    }
  }

  render(){
    const { events, city, joins } = this.props
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
          {events.map((event, idx) => {
            return(
              <EventDetailContainer key={idx} event={event} />
            )
          })}
        </div>
      </div>
    )
  }
}

export const EventIndexWithRouter = withRouter(EventIndex);
