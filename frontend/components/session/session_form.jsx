import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  demosignIn(e) {
    e.preventDefault();
    const user = {user: {email: "email@gmail.com", password: "password"}}
    this.props.signIn(user);
  }

  navLink(){
    if (this.props.formType === 'signIn') {
      return <Link to="/signUp">sign up instead</Link>
    } else {
      return <Link to="/signIn">log in instead</Link>
    }
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  };

  render() {
    return(
      <div className="sign-in-form-container">
        <form onSubmit={this.handleSubmit} className="sign-in-form-box">
          <h2>Hey Stranger! Ready for some danger?</h2>
          <p>It's good to have you back. Sign in here and sign up for
          your next tea time!</p>
          {this.renderErrors()}
          <div className="sign-in-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="sign-in-box"
                placeholder="Email"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="sign-in-box"
                placeholder="Password"
              />
            <br/>
            <input type="submit" value="ENTER IF YOU DARE" />
            <button className="guest-button" onClick={this.demosignIn}>GUEST SIGN IN</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
