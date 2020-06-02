import React from 'react';
import './Home.scss';

class Home extends React.Component {

  render = () => {
    return (
      <div className="container-info">
        <div className="container-info__desc">
          <h1>Yac Test</h1>
          <p>Prueba chat. Natalie Santiago</p>
        </div>
      </div>
    );
  }
}

export default Home;
