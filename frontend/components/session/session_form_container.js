import { connect } from 'react-redux';
import { signIn, signOut, signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
    signedIn: Boolean(session.currentUser),
    errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signIn') ? signIn : signUp;

  return {
    processForm: user => dispatch(processForm(user)),
    signIn: user => dispatch(signIn(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
