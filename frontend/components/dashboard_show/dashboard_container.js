import { connect } from 'react-redux';
import { fetchJoins } from '../../actions/join_actions';
import { fetchHosts } from '../../actions/host_actions';
import Dashboard from './dashboard'

const mapStateToProps = ({ session, joins, hosts }) => ({
  session,
  joins,
  hosts
});

const mapDispatchToProps = (dispatch) => ({
  fetchJoins: (user_id) => dispatch(fetchJoins(user_id)),
  fetchHosts: (user_id) => dispatch(fetchHosts(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
