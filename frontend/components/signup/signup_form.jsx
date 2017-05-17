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
            {error}
          </li>
        ))}
      </ul>
    )
  };

  render() {
    return(
      <div className="sign-up-form-container">
        <form onSubmit={this.handleSubmit} className="sign-up-form-box">
          Welcome to TeaWithDanger
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="signUp-form">
            <br/>
            <label>First Name:
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="signUp-input"
              />
            </label>
            <label>Last Name:
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="signUp-input"
              />
            </label>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signUp-input"
              />
            </label>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signUp-input"
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

export default withRouter(signUpForm);
