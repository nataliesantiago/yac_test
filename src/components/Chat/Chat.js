import React from 'react';
import { auth, db } from './../../services/firebase.service';
import './Chat.scss';
import Chatbox from './../Chatbox/Chatbox';

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      messages: []
    }
  }

  componentDidMount = () => {
    
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    db.ref('chat').push({
      username: this.state.user.displayName,
      message: this.state.message,
      date: Date.now(),
    });
    this.setState({
      message: ''
    });
  }

  render = () => {
    return (
      <div className="container-chat">
        
        <Chatbox/>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}></input>
          <button type="submit">Enviar</button>
        </form>

        { this.state.user &&
          <div>
            Iniciaste sesión como: <strong>{ this.state.user.displayName }</strong>
          </div>
        }
      </div>
    );
  }
}

export default Chat;
