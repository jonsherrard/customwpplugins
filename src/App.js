import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <p>
          </p>
          <h3>High Quality PHP</h3>
          <p>
            WordPress themes and plugins have a bad reputation. Some plugins are written by relative amateurs, or developers unfamiliar with WordPress hacking together some functionality. We spend our days writing WordPress themes and plugins, using modern PHP development techniques, taking cues from frameworks like Laravel, Symphony 2, and Slim. 
          </p>
          <h3>Modern JavaScript</h3>
          <p>
            We write JavaScript that won't interfere with WordPress' admin scripts, or other plugins you may have installed. We write ES6 transpiled and linted with WebPack, using industry best practices. When we're not writing PHP, we're often writing vanilla JS for legacy projects, Backone applications, and most recently, using React and Redux.
          </p>
          <h3>Considered Markup</h3>
        </div>
      </div>
    );
  }
}

export default App;
