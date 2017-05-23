import { RECEIVE_HOST } from '../actions/host_actions';

const nullHost = {
  id: "",
  first_name: "",
  email: "",
  image_url: ""
}

const hostReducer = (state = nullHost, action) => {
  switch(action.type){
    case RECEIVE_HOST:
      return action.host;
    default:
      return state;
  }
}

export default hostReducer;
