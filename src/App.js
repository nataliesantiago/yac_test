import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { auth } from './services/firebase.service';
import './App.scss';
import Header from './components/shared/header/Header';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      user: null
    }
  }
  
  componentDidMount() {
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

	render(){
		return(
			<Router>
        <div className="container-app">
          <Header/>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chat" exact render={() => <Chat user={this.state.user}/>} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </div>
      </Router>
		);
	}
}

export default App;
