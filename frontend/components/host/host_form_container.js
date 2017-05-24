import { connect } from 'react-redux';
import { createEvent } from '../../actions/events_actions';
import HostForm from './host_form.jsx';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: ({ event }) => dispatch(createEvent({ event }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm)
