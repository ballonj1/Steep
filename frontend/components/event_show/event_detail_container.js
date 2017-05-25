import { connect } from 'react-redux';
import { EventDetailWithRouter } from './event_detail';
import { joinEvent, leaveEvent } from '../../actions/join_actions';
import { updateEvent } from '../../actions/events_actions';
import { fetchCity } from '../../actions/cities_action';

const mapStateToProps = ({ session, match }, { event }) => ({
  session,
  event
});

const mapDispatchToProps = (dispatch) => ({
  joinEvent: (user_id, event_id) => dispatch(joinEvent(user_id, event_id)),
  leaveEvent: (user_id, joined_event_id) => dispatch(leaveEvent(user_id, joined_event_id)),
  fetchJoins: (user_id) => dispatch(fetchJoins(user_id)),
  updateEvent: (event_id, current_attend) => dispatch(updateEvent(event_id, current_attend)),
  fetchCity: (city_id) => dispatch(fetchCity(city_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailWithRouter);
