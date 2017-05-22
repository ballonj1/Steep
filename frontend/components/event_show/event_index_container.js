import { connect } from 'react-redux';
import { EventIndexWithRouter } from './event_index';
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
)(EventIndexWithRouter);
