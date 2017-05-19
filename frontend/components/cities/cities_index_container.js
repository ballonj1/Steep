import { connect } from 'react-redux';
import { fetchCities } from '../../actions/cities_action';
import CitiesIndex from './cities_index';

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
)(CitiesIndex)
