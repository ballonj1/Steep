import React from 'react';

class EventDetail extends React.Component {
constructor(props){
  super(props)

  this.handleLeave = this.handleLeave.bind(this);
  this.handleJoin = this.handleJoin.bind(this);
  this.buttonRender = this.buttonRender.bind(this);
}
  componentDidMount(){
    this.props.fetchEvents(this.props.event.city_id);
  }

  handleLeave(event_id, current_attend){
    return e => {
      e.preventDefault();
      return this.props.updateEvent(event_id, current_attend - 1);
    }
  }

  handleJoin(event_id, current_attend){
    return e => {
      e.preventDefault();
      return this.props.updateEvent(event_id, current_attend + 1);
    }
  }

  buttonRender(){
    if (this.props.event.hosting) {
      return ""
    }

    if (this.props.event.attending) {
      return (
        <button className="event-button" onClick={this.handleLeave(this.props.event.id, this.props.event.current_attend)}>LEAVE EVENT</button>
      )
    } else {
      if (this.props.event.event_full){
        return (
          <button className="full-event-button">FULL EVENT</button>
        )
      } else {
        return (
          <button className="event-button" onClick={this.handleJoin(this.props.event.id, this.props.event.current_attend)}>JOIN EVENT</button>
        )
      }
    }
  }

  render(){
    const { event } = this.props
    const button = this.buttonRender();
    return(
      <div className="event-container-and-button">
        <div className="event-container">
          <p className="event-date">{event.date}</p>
          <p className="event-time">{event.time}</p>
          <p className="event-address">{event.address}</p>
          <p className="event-description">{event.description}</p>
          <hr></hr>
          <p className="event-spots-left">Spots Left: {event.max_attend - event.current_attend}</p>
        </div>
        {button}
      </div>
    )
  }
}

export default EventDetail;
