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
      <div className="signIn-form-container">
        <form onSubmit={this.handleSubmit} className="signIn-form-box">
          Welcome to TeaWithDanger
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="signIn-form">
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signIn-input"
              />
            </label>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signIn-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
            <button onClick={this.demosignIn}>Guest signIn</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
