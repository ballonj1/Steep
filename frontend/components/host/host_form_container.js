import { connect } from 'react-redux';
import { createEvent } from '../../actions/host_actions';
import HostForm from './host_form.jsx';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: (date, time, address, description, host_id, city_id,
                max_attend, current_attend) => (dispatch(createEvent(date, time, address, description, host_id, city_id,
                              max_attend, current_attend)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm)
