import React from 'react';
import { withRouter } from 'react-router-dom';
import EventDetailContainer from './event_detail_container';

class EventIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvents(parseInt(this.props.match.params.id));
    if (this.props.session.currentUser){
      this.props.fetchJoins(parseInt(this.props.session.currentUser.id));
    }
  }

  render(){
    const { events, city, joins } = this.props
    return(
      <div className="event-detail-container">
        <div className="event-detail-description">
          <h2>
            Tea Time is a conversation between a few people who know nothing about each other.
          </h2>
          <p>You'll never leave without questions, new perspectives, and the reminder that we're far more the same than we are different</p>
        </div>
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
