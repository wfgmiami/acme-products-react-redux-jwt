import { LOGIN_SUCCESS } from './constants';
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

const login = (credentials)=>{
  return (dispatch)=>{

    axios.post('/api/session', credentials)
    .then( response => response.data )
    .then( token => {
      localStorage.setItem('token', token)
      return axios.get(`/api/session/${token}`)
    })
    .then(response => response.data)
    .then(user => dispatch(loginSuccess(user)))
  }
}


const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user
})

const authReducer = (state={}, action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
      state = Object.assign({}, state, { user: action.user })
      break;
  }
  return state;
}

export { login, me };

export default authReducer;
