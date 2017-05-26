import { connect } from 'react-redux';
import DashboardHostsDetail from './dashboard_hosts_detail';

const mapStateToProps = ({ host }) => ({
  host
});



export default connect(
  mapStateToProps,
  null
)(DashboardHostsDetail);
