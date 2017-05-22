import React from 'react';

class EventDetail extends React.Component {
constructor(props){
  super(props)

  this.handleLeave = this.handleLeave.bind(this);
  this.handleJoin = this.handleJoin.bind(this);
  this.buttonRender = this.buttonRender.bind(this);
}

  handleLeave(user_id, joinedEventId){
    return e => {
      e.preventDefault();
      return this.props.leaveEvent(user_id, joinedEventId);
    }
  }

  handleJoin(user_id, event_id){
    return e => {
      e.preventDefault();
      return this.props.joinEvent(user_id, event_id);
    }
  }

  buttonRender(){
    const joinedEventId = this.props.joins.filter((join) => {
      if (join.event_id === this.props.event.id) {
        return join.id;
      }
    });

    if (joinedEventId.length > 0) {
      return (
        <button onClick={this.handleLeave(this.props.session.currentUser.id, joinedEventId[0].id)}>LEAVE EVENT</button>
      )
    } else {
      return (
        <button onClick={this.handleJoin(this.props.session.currentUser.id, this.props.event.id)}>JOIN EVENT</button>
      )
    }
  }

  render(){
    const { event } = this.props
    const button = this.buttonRender();
    return(
      <div className="event-container">
        <p>{event.description}</p>
        <p>{event.address}</p>
        <p>{event.time}</p>
        <p>{event.date}</p>
        {button}
      </div>
    )
  }
}

export default EventDetail;
