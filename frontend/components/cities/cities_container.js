import { connect } from 'react-redux';
import { fetchCities } from '../../util/';
import Cities from './cities';

const mapStateToProps = ({ cities }) => {
  cities
}

const mapDispatchToProps = (dispatch) => {
  fetchCities: () => dispatch(fetchCities())
  fetchCity: (id) => dispatch(fetchCities())
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities)
