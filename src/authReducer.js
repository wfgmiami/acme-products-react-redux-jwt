import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './constants';
import axios from 'axios';


const me = () => {
  return(dispatch)=> {
    const token = localStorage.getItem('token');
    if(!token)
      return;
    return axios.get(`/api/session/${token}`)
    .then( response => response.data )
    .then( user => dispatch(loginSuccess(user)))
  }
}

const logout = (user) => {
  //const token = localStorage.getItem('token');
  return (dispatch)=>{
    dispatch(logoutSuccess())
    // return axios.get(`/api/session/${token}`)
    // .then(response => response.data)
    // .then(user => dispatch(logoutSuccess(user)))
  }

  localStorage.setItem('token', '')

}

const login = (credentials)=>{
  return (dispatch)=>{
    axios.post('/api/session', credentials)
    .then( response => response.data)
    .then( token => {
        return axios.get(`/api/session/${token}`)
        .then(response => response.data)
        .then(user => dispatch(loginSuccess(user)));
    })
  }
}


const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user
})

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})

const authReducer = (state={}, action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
      state = Object.assign({}, state, { user: action.user })
      break;
    case LOGOUT_SUCCESS:
      state = Object.assign({}, state, { user: ''})
      break;
  }
  return state;
}

export { login, me, logout };

export default authReducer;
