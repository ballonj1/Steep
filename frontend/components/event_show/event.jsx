import React from 'react';
import { withRouter } from 'react-router-dom';

class Event extends React.Component {

  render(){
    return(
      <div>
        <p>Here now.</p>
      </div>
    )
  }
}

export const EventWithRouter = withRouter(Event);
