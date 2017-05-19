import { connect } from 'react-redux';
import { fetchCities } from '../../actions/cities_action';
import Cities from './cities';

const mapStateToProps = ({ cities }) => ({
  cities
});

const mapDispatchToProps = (dispatch) => ({
  fetchCities: () => dispatch(fetchCities()),
  fetchCity: (id) => dispatch(fetchCity(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities)
