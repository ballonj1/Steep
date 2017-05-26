import { connect } from 'react-redux';
import DashboardJoinsDetail from './dashboard_joins_detail';
import { leaveEvent } from '../../actions/join_actions';

const mapStateToProps = ({ join }) => ({
  join
});

const mapDispatchToProps = (dispatch) => ({
  leaveEvent: (user_id, event_id) => dispatch(leaveEvent(user_id, event_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardJoinsDetail);
