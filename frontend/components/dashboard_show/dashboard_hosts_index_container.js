import { connect } from 'react-redux';
import { fetchHosts } from '../../actions/host_actions';
import DashboardHostsIndex from './dashboard_hosts';

const mapStateToProps = ({ session, hosts }) => ({
  session,
  hosts
});

const mapDispatchToProps = (dispatch) => ({
  fetchHosts: (user_id) => dispatch(fetchHosts(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHostsIndex);
