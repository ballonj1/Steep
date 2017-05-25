import { connect } from 'react-redux';
import { signIn, signUp, signOut } from '../../actions/session_actions';
import Navbar from './navbar';
import { fetchEvents } from '../../actions/events_actions';

const mapStateToProps = ({ session }) => ({
  session,
  signedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  fetchEvents: (id) => dispatch(fetchEvents(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
