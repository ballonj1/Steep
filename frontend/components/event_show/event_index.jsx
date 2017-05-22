import React from 'react';
import { withRouter } from 'react-router-dom';
import EventDetailContainer from './event_detail_container';

class EventIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvents(parseInt(this.props.match.params.id));
  }

  render(){
    const { events, city } = this.props
    return(
      <div className="event-detail-container">
        <ul>
          {events.map((event, idx) => {
            return(
              <li key={idx}><EventDetailContainer key={idx} event={event} /></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export const EventIndexWithRouter = withRouter(EventIndex);
