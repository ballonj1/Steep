import { connect } from 'react-redux';
import Event from './event';
import { fetchEvents } from '../../actions/events_actions';

const mapStateToProps = ({ events }) => ({
  events
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
