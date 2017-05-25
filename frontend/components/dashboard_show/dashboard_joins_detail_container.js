import { connect } from 'react-redux';
import DashboardJoinsDetail from './dashboard_joins_detail';

const mapStateToProps = ({ join }) => ({
  join
});

export default connect(
  mapStateToProps,
  null
)(DashboardJoinsDetail);
