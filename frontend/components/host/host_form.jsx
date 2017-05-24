import React from 'react';

class HostForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      date: "",
      time: "",
      address: "",
      description: "",
      host_id: "",
      city_id: "",
      max_attend: "",
      current_attend: ""
    }
  }

  render(){
    return(
      <p>Another one.</p>
    )
  }
}

export default HostForm;
