import React from 'react';

class DashboardJoinsDetail extends React.Component {
  constructor(props){
    super(props)

    this.handleLeave = this.handleLeave.bind(this);
  }

  handleLeave(user_id, event_id){
    return e => {
      e.preventDefault();
      return this.props.leaveEvent(user_id, event_id);
    }
  }

  render(){
    return(
      <div className="event-container-and-button">
        <div className="event-container">
          <p className="event-date">{this.props.join.event.date}</p>
          <p className="event-time">Time: {this.props.join.event.time}</p>
          <p className="event-address">Address: {this.props.join.event.address}</p>
          <p className="event-description">Description: {this.props.join.event.description}</p>
          <hr></hr>
          <p className="event-spots-left">Spots Left: {this.props.join.event.max_attend - this.props.join.event.current_attend}</p>
        </div>
        <button className="event-button" onClick={this.handleLeave(this.props.join.user_id, this.props.join.event_id)}>LEAVE EVENT</button>
      </div>
    )
  }
}

export default DashboardJoinsDetail;
