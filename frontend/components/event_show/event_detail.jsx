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
    if (Array.isArray(this.props.joins)){
      const joinedEventId = this.props.joins.filter((join) => {
        if (join.event_id === this.props.event.id) {
          return join.id;
        }
      });

      if (joinedEventId.length > 0) {
        return (
          <button className="event-button" onClick={this.handleLeave(this.props.session.currentUser.id, joinedEventId[0].id)}>LEAVE EVENT</button>
        )
      } else {
        return (
          <button className="event-button" onClick={this.handleJoin(this.props.session.currentUser.id, this.props.event.id)}>JOIN EVENT</button>
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
        </div>
        {button}
      </div>
    )
  }
}

export default EventDetail;
