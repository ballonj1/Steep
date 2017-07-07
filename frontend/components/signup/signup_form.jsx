import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class signUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demosignIn = this.demosignIn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn) {
      this.props.history.push('/');
    }
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink(){
    return <Link to="/signIn">log in instead</Link>
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            <div className='errors'>{error}</div>
          </li>
        ))}
      </ul>
    )
  };

  demosignIn(e) {
    e.preventDefault();
    const user = {user: {email: "email1@gmail.com", password: "password"}}
    this.props.signIn(user).then(() => this.props.history.push('/cities'));
  }

  componentWillUnmount() {
    this.props.receiveErrors([""]);
  }

  render() {
    return(
      <div className="sign-up-form-container">
        <form onSubmit={this.handleSubmit} className="sign-up-form-box">
          <h2>Join for tea time</h2>
          <p className="sign-up-text">Thousands of strangers across the world have sat
              together for conversations. We can't wait for you to join them.</p>
          <br/>
          {this.renderErrors()}
          <div className="sign-up-form">
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="sign-up-box"
                placeholder="First Name"
              />
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="sign-up-box"
                placeholder="Last Name"
              />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="sign-up-box"
                placeholder="Email"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="sign-up-box"
                placeholder="Password"
              />
            <br/>
            <input type="submit" value="LET'S GET TEA" />
            <button className="guest-button" onClick={this.demosignIn}>GUEST SIGN IN</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(signUpForm);
