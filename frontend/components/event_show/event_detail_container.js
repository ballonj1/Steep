import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { joinEvent, leaveEvent } from '../../actions/join_actions';

const mapStateToProps = ({ session }, event) => ({
  session,
  event
});

const mapDispatchToProps = (dispatch) => ({
  joinEvent: (user_id, event_id) => dispatch(joinEvent(user_id, event_id)),
  leaveEvent: (joined_event_id) => dispatch(leaveEvent(joined_event_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
