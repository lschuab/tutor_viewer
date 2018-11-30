import React, { Component } from 'react';
import Header from './Header'
import Access from './Access'
import Login from './Login'
import Auth from '../Auth/auth'


class Dash extends Component {
  state = {
    isLoggedIn: false
  }
  auth = new Auth();

  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.auth.handleAuthentication();
    }
  }

  checkAuthentication = () => {
    this.setState({isLoggedIn: this.auth.isAuthenticated()})
  }

  componentDidMount = () => {
    setTimeout(()=>{
      this.checkAuthentication()
    }, 1000)
  }

  render() {

    this.handleAuthentication(this.props)

    return(
      <div>
        <Header 
          isLoggedIn={this.state.isLoggedIn}
          auth={this.auth}
          checkAuthentication={this.checkAuthentication}
        />
        { this.state.isLoggedIn && 
            <Access />
        }
        { !this.state.isLoggedIn &&
            <Login auth={this.auth}/>
        }
      </div>
    )
  }

}

export default Dash;