import { connect } from 'react-redux';
import { EventIndexWithRouter } from './event_index';
import { fetchEvents } from '../../actions/events_actions';
import { fetchJoins } from '../../actions/join_actions';
import { updateUserCity } from '../../actions/user_actions';
import { getByCity } from '../../reducers/selectors';


const mapStateToProps = ({ events, joins, session, cities }, { city }) => ({
  session,
  city,
  cities,
  events: getByCity(city, events),
  joins
});

const mapDispatchToProps = (dispatch) => ({
  fetchJoins: (user_id) => dispatch(fetchJoins(user_id)),
  fetchEvents: (city_id) => dispatch(fetchEvents(city_id)),
  updateUserCity: (city_name, city_id, user_id) => dispatch(updateUserCity(city_name, city_id, user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndexWithRouter);
