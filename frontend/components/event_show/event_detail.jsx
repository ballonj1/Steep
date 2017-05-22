import React from 'react';

class EventDetail extends React.Component {

  render(){
    const { event } = this.props

    return(
      <div className="event-container">
        <p>{event.description}</p>
        <p>{event.address}</p>
        <p>{event.time}</p>
        <p>{event.date}</p>
      </div>
    )
  }
}

export default EventDetail;
