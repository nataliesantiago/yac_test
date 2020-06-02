import React from 'react';
import ReactDOM from 'react-dom';
import header from './header';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<header />, div);
  ReactDOM.unmountComponentAtNode(div);
});