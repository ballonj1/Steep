import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { joinEvent, leaveEvent } from '../../actions/join_actions';
import { currentUserJoins } from '../../reducers/selectors';

const mapStateToProps = ({ session }, { event, joins }) => ({
  session,
  event,
  joins
});

const mapDispatchToProps = (dispatch) => ({
  joinEvent: (user_id, event_id) => dispatch(joinEvent(user_id, event_id)),
  leaveEvent: (user_id, joined_event_id) => dispatch(leaveEvent(user_id, joined_event_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
