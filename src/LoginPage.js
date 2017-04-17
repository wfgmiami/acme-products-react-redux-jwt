import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(){
    super();
    this.state = { name: '', password: '' };
  }
  render() {
    return(
      <form>
        <div className='form-group'>
          <input className='form-control' />
        </div>
        <div className='form-group'>
          <input className='form-control' />
        </div>
      </form>
    )
  }
}

export default LoginPage;
