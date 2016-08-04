import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js';
import Tenet from './Tenet.js';
import tenets from './tenetText.js'

class App extends Component {
  
    

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Custom WP Plugins</h2>
        </div>
        <div className="App-body">
          <p className="App-intro">
            Add custom features, pages, dashboards, and functionality to your WordPress site. Custom WP Plugins has a wealth of experience in building well-tested, innovative extensions to the WordPress platform.
          </p>
          
          {tenets.map((tenet, index) => {
            return <Tenet key={index} {...tenet} />
          })}

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
