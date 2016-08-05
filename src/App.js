import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './Quote.js'
import Footer from './Footer.js';
import Tenet from './Tenet.js';
import tenets from './tenetText.js'

class App extends Component {
  
    

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <h1>Custom WP Plugins</h1>
        </div>
        <div className="App-body">
          <p className="App-intro">
            Add custom features, pages, dashboards, and functionality to your WordPress site. Custom WP Plugins has a wealth of experience in building well-tested, innovative extensions to the WordPress platform.
          </p>
          <h1 className="text-align-center">Code to be proud of.</h1>          
          <h2>Your WordPress installation represents you or your business, we&rsquo;ll never give you something we wouldn&rsquo;t run on our own sites.</h2>

          {tenets.map((tenet, index) => {
            return <Tenet key={index} {...tenet} />
          })}

          <h1>Free and fair consultation.</h1>
          <h2>We won&rsquo;t re-invent the wheel, and we&rsquo;ll even help you get up and running with an existing plugin.</h2>
          <p>
            There&rsquo;s a lot of fanstastic plugins out there already, and we&rsquo;ve used a <em>lot</em> of them. If we think there&rsquo;s a high quality plugin already available that fits your needs, we&rsquo;ll point you in that direction instead of building a duplicate. Any work we do to specify the scope of work required, is 100% free.
          </p>
          <h1>Instant quote.</h1>
          <Quote />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
