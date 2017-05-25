import React from 'react';

class DashboardHostsDetail extends React.Component {
  render(){
    return(
      <div className="event-container-and-button">
        <div className="event-container">
          <p className="event-date">{this.props.host.event.date}</p>
          <p className="event-time">Time: {this.props.host.event.time}</p>
          <p className="event-address">Address: {this.props.host.event.address}</p>
          <p className="event-description">Description: {this.props.host.event.description}</p>
          <hr></hr>
          <p className="event-spots-left">Spots Left: {this.props.host.event.max_attend - this.props.host.event.current_attend}</p>
        </div>
      </div>
    )
  }
}

export default DashboardHostsDetail;
