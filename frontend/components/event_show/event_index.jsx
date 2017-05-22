import React from 'react';
import { withRouter } from 'react-router-dom';
import EventDetailContainer from './event_detail_container';

class EventIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvents(parseInt(this.props.match.params.id));
  }

  render(){
    return(
      <div>
        <ul>
          
        </ul>
      </div>
    )
  }
}

export const EventIndexWithRouter = withRouter(EventIndex);
