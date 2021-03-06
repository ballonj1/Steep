import { connect } from 'react-redux';
import CitiesDetail from './cities_detail';
import { fetchCity } from '../../actions/cities_action';


const mapStateToProps = ({ cities, session }) => ({
  cities,
  session
});

const mapDispatchToProps = (dispatch) => ({
  fetchCity: (id) => dispatch(fetchCity(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesDetail)
