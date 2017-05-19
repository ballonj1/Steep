import { connect } from 'react-redux';
import { fetchCities } from '../../util/';
import Cities from './cities';

const mapStateToProps = ({ cities }) => {
  cities
}

const mapDispatchToProps = (dispatch) => {
  allCities: () => dispatch(fetchCities())
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities)
