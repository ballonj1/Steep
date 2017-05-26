import { connect } from 'react-redux';
import DashboardHostsDetail from './dashboard_hosts_detail';
import { destroyHost } from '../../actions/host_actions';

const mapStateToProps = ({ session }, { host }) => ({
  session,
  host
});

const mapDispatchToProps = (dispatch) => ({
  destroyHost: (host_id, user_id, event_id) => dispatch(destroyHost(host_id, user_id, event_id))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHostsDetail);
