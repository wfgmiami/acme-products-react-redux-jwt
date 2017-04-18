import React,{ Component } from 'react';
import { login } from './authReducer';
import { connect } from 'react-redux';



const LoginForm = ({ login, name, password, onNameChange, onPasswordChange }) => (
   <div>
        <form onSubmit={ login }>
          <div className='form-group'>
            <input className='form-control' placeholder='name' value={ name } onChange={ onNameChange }/>
          </div>
          <div className='form-group'>
            <input className='form-control' placeholder='password' value={ password } onChange={ onPasswordChange }/>
          </div>
          <button className='btn btn-primary'>Log In</button>
        </form>
      </div>
)

class LoginPage extends Component{
  constructor(){
    super();

    this.state = {
      name: '',
      password: ''
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onNameChange(ev){
    this.setState({ name: ev.target.value })
  }

  onPasswordChange(ev){
    this.setState({ password: ev.target.value })
  }

  onLogin(ev){
    ev.preventDefault();
    this.props.login(this.state)
    this.setState({ name: '', password: ''})
  }

  render(){
    return(
      <LoginForm login={this.onLogin} name={this.state.name} password={this.state.password} onNameChange={ this.onNameChange } onPasswordChange={ this.onPasswordChange }/>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(login(credentials))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage)
