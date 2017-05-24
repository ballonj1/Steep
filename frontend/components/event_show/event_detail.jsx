import React from 'react';

class EventDetail extends React.Component {
constructor(props){
  super(props)


  this.handleLeave = this.handleLeave.bind(this);
  this.handleJoin = this.handleJoin.bind(this);
  this.buttonRender = this.buttonRender.bind(this);
}
  componentDidMount(){
    this.props.fetchJoins(this.props.session.currentUser.id);
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
    if (Array.isArray(this.props.joins)){
      const joinedEventId = this.props.joins.filter((join) => {
        if (join.event_id === this.props.event.id) {
          return join.id;
        }
      });

      if (joinedEventId.length > 0) {
        debugger
        return (
          <button className="event-button" onClick={this.handleLeave(this.props.event.id, this.props.event.current_attend)}>LEAVE EVENT</button>
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
          <p className="event-current-attend">{event.current_attend}</p>
          <p className="event-max-attend">{event.max_attend}</p>
        </div>
        {button}
      </div>
    )
  }
}

export default EventDetail;
