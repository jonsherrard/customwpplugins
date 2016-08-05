import React, { Component } from 'react';

class Quote extends Component {

  getRequirements () {
    return [
      {
        "name": "WordPress Editor Shortcode",
        "description": "Allow your editors to enter [WordPress='shortcodes'] into their copy to render out the functionality of your plugin",
        "cost": "300"
      },
      {
        "name": "Third Party API integration",
        "description": "Your plugin will integrate with a 3rd party, by making authenticated calls to a Restful API. For example: searching and displaying images from instagram, or getting user images from their Facebook accounts.",
        "cost": "300"
      }
    ]
  }
  
  render () {

    let reqs = this.getRequirements()

    return (
      <div>
        <h2>Get a price estimate right now by selecting the functionality your plugin will require:</h2>
        {reqs.map((req, index) => {
          return (
            <div key={index}>
              <h3>{req.name}</h3>
              <br/>
              <p>{req.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Quote
