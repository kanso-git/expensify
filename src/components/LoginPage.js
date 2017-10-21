import React from 'react';


export default class LoginPage extends React.Component{

    handleLogin =(e) =>{
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
      this.props.history.push('/dashboard');
    };


    render(){
      return (
          <div >
              <form onSubmit={this.handleLogin} >
                    username: <input type="text" id="username"/>
                    password: <input type="password" id="password"/>
                    <button > Login to Expensify </button>
              </form>
          </div>
      )

    }

}