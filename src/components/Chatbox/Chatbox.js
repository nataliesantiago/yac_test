import React from 'react';
import moment from 'moment'
import { auth, db } from './../../services/firebase.service';
import './Chatbox.scss';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		user: auth().currentUser,
		messages: []
	}
  }

  componentDidMount = () => {
    db.ref('chat').on('value', snapshot => {
      let messages = [];
      const allMessages = snapshot.val();
      for (const message in allMessages) {
        const oneMessage = {id: message, ...allMessages[message]};
        messages.push(oneMessage);
      }
      this.setState({ messages });
		});
  }

  render = () => {
		return(
			<div className="chatbox">
				{this.state.user &&
					<div className="chat-list">
						{this.state.messages.map(message => {
							const messageDate = moment(message.date).format('DD-MM-YY HH:mm');
							const currentHour = moment(message.date).format('HH:mm');
							let hour;
							if (moment(message.date).isBefore(moment(), 'day') && !moment(message.date).isSame(moment(), 'day')) {
								hour = <span className="date">{messageDate}</span>
							} else {
								hour = <span className="date">{currentHour}</span>
							}
							
							return(
								
								<div className={"container-message " + (this.state.user.displayName === message.username ? 'even' : 'odd')} key={message.id}>
									<div className="content">
										<span className="user-name">{message.username}</span>
										<div className="message">
											<p>{message.message}</p>
										</div>
										{hour}
									</div>
								</div>
							);
						})}
					</div>
				}
			</div>
		);
	}
}

export default Chatbox;
