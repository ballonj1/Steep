import { connect } from 'react-redux';
import { fetchJoins } from '../../actions/join_actions';
import DashboardJoinsIndex from './dashboard_joins_index';

const mapStateToProps = ({ session, joins }) => ({
  session,
  joins
});

const mapDispatchToProps = (dispatch) => ({
  fetchJoins: (user_id) => dispatch(fetchJoins(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardJoinsIndex);
