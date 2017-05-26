import { connect } from 'react-redux';
import { signIn, signUp, signOut } from '../../actions/session_actions';
import { NavbarWithRouter } from './navbar';
import { fetchCity } from '../../actions/cities_action';

const mapStateToProps = ({ session, history }) => ({
  session,
  signedIn: Boolean(session.currentUser),
  history
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  fetchCity: (city_id) => dispatch(fetchCity(city_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarWithRouter)
