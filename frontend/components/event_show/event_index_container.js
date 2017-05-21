import { connect } from 'react-redux';
import { EventWithRouter } from './event';
import { fetchEvents } from '../../actions/events_actions';

const mapStateToProps = ({ events }, { city }) => ({
  city,
  events
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (city_id) => dispatch(fetchEvents(city_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventWithRouter);
