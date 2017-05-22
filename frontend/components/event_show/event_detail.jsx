import React from 'react';

class EventDetail extends React.Component {

  render(){
    const { event } = this.props

    return(
      <div>
        <p>{event.description}</p>
      </div>
    )
  }
}

export default EventDetail;
