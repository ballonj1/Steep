import { connect } from 'react-redux';
import { signIn, signUp, signOut } from '../../actions/session_actions';
import Navbar from './navbar';
import { fetchCity } from '../../actions/cities_action';

const mapStateToProps = ({ session }) => ({
  session,
  signedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  fetchCity: (city_id) => dispatch(fetchCity(city_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
