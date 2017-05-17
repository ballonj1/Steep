import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
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
    return <Link to="/login">log in instead</Link>
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Welcome to TeaWithDanger
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
            <label>First Name:
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="signup-input"
              />
            </label>
            <label>Last Name:
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="signup-input"
              />
            </label>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>
            <label>Password:
              <input type="text"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm);
