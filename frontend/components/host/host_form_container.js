import { connect } from 'react-redux';
import { createEvent } from '../../actions/events_actions';
import HostForm from './host_form.jsx';

const mapStateToProps = ({ session, events }) => ({
  currentUser: session.currentUser,
  errors: events.errors
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: ({ event }) => dispatch(createEvent({ event }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm)
