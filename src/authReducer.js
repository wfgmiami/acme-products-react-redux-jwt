import {LOGIN_SUCCESS} from './constants';
import axios from 'axios';

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user
})

const login = (credentials) => {
  return (dispatch) => {
    return axios.post('/api/session', credentials)
    .then(response => response.data)
    .then(data => console.log(data))
  }
}


export {
  login
}

const authReducer = (state = { user: {name: 'Moe' }}, action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
      state = Object.assign({}, state, { user: action.user })
      break;
  }
  return state;
}

export default authReducer;
