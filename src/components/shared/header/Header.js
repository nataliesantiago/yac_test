import React from 'react';
import { Link } from "react-router-dom";
import { auth } from '../../../services/firebase.service';
import './header.scss';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      user: null,
      authenticated: false,
    }
    this.logOutUser = this.logOutUser.bind(this);
  }

  componentDidMount = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true
        });
      } else {
        this.setState({
          authenticated: false
        });
      }
    })
  }

  logOutUser = () => {
		auth().signOut().then(window.location = "/");
	}

  render = () => {
    return (
      <nav className="main-nav">
        <Link to="/">Yac Test</Link>
        {
          !this.state.authenticated && 
          <div className="main-nav__items">
            <Link to="/login">Login</Link>
            <span>|</span>
            <Link to="/register">Register</Link>
          </div>
        }

        { this.state.authenticated && <a href="#!" onClick={this.logOutUser}>Logout</a> }
      </nav>
    )
  }

}

export default Header;
