import React from 'react';
import { withRouter } from 'react-router-dom';

class Event extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvents(parseInt(this.props.match.params.id));
  }

  render(){
    console.log(this.props.events)
    debugger
    return(
      <div>
        <p>Here now.</p>
      </div>
    )
  }
}

export const EventWithRouter = withRouter(Event);
