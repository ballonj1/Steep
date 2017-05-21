import { connect } from 'react-redux';
import { EventWithRouter } from './event';
import { fetchEvents } from '../../actions/events_actions';

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  null,
  mapDispatchToProps
)(EventWithRouter);
