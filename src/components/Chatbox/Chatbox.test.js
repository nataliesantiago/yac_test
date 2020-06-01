import React from 'react';
import ReactDOM from 'react-dom';
import Chatbox from './Chatbox';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chatbox />, div);
  ReactDOM.unmountComponentAtNode(div);
});