import { connect } from 'react-redux';
import HomePage from './homepage';

export const mapStateToProps = ({ session }) => ({
  session
})

export default connect(
  mapStateToProps,
  null
)(HomePage)
