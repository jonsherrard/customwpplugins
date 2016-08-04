import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <div className="App-body">
          <h3 className="App-company-name">Devular.</h3>
          <hr/>
          <small>&copy; 2016</small>
        </div>
      </footer>
    )

  }
}

export default Footer
