import { connect } from 'react-redux';
import { signIn, signUp, signOut } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => ({
  session,
  signedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
