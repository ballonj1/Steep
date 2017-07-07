import { connect } from 'react-redux';
import { signUp, signIn, receiveErrors } from '../../actions/session_actions';
import signUpForm from './signup_form';

const mapStateToProps = ({ session }) => ({
    signedIn: Boolean(session.currentUser),
    errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = signUp;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    signIn: (user) => dispatch(signIn(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signUpForm);
