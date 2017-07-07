import React from 'react';

class HostForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      date: "",
      time: "",
      address: "",
      description: "",
      host_id: this.props.currentUser ? this.props.currentUser.id : "",
      city_id: parseInt(this.props.match.params.id),
      max_attend: "",
      current_attend: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.props.history.push('/');
  //   }
  // }

  update(field){
    return e => {
      if (field === 'max_attend') {
        this.setState({
          [field]: parseInt(e.currentTarget.value)
        });
      } else {
        this.setState({
          [field]: e.currentTarget.value
        });
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = this.state;
    this.props.createEvent({event}).then(this.props.history.push(`/cities/${this.props.match.params.id}`));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            <div className={'errors'}>{error}</div>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return(
      <div className="sign-up-form-container">
        <form onSubmit={this.handleSubmit} className="sign-up-form-box">
          <h2>Join for tea time</h2>
          <p className="sign-up-text">Thousands of strangers across the world have sat
              together for conversations. We can't wait for you to join them.</p>
          <br/>
          <div className="sign-up-form">
              <input type="date"
                value={this.state.date}
                onChange={this.update('date')}
                className="sign-up-box"
                placeholder="Date"
              />
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('time')}
                className="sign-up-box"
                placeholder="9:30 AM"
              />
              <input type="text"
                value={this.state.address}
                onChange={this.update('address')}
                className="sign-up-box"
                placeholder="949 Grant Ave, San Francisco, CA 94108"
              />
              <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="sign-up-box"
                placeholder="A peaceful sit down."
              />
              <input type="number"
                value={parseInt(this.state.max_attend)}
                onChange={this.update('max_attend')}
                className="sign-up-box"
                placeholder="8"
              />
            <br/>
            <input className='host-submit' type="submit" value="HOST THIS EVENT!" />
          </div>
        </form>
      </div>
    )
  }
}

export default HostForm;
