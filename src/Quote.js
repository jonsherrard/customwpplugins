import React, { Component } from 'react';

import Feature from './Feature'

class Quote extends Component {

  state: {
  }

  componentWillMount () {
    this.state = {
      items: this.getRequirements(),
      cost: 0
    }
  }

  getRequirements () {
    return [
      {
        "name": "WordPress Editor Shortcode",
        "description": "Allow your editors to enter <code>[WordPress='shortcodes']</code> into their WordPress content",
        "cost": 300,
        "selected": false
      },
      {
        "name": "Third Party API integration",
        "description": "Your plugin will integrate with a 3rd party, by making authenticated calls to a Restful API. For example: searching and displaying images from instagram, or getting user images from their Facebook accounts.",
        "cost": 300,
        "selected": false
      },
      {
        "name": "User Input",
        "description": "Allow visitors to your site to submit data through a form, and view and export that data from an admin section of wordpress",
        "cost": 500,
        "selected": false
      },
      {
        "name": "Custom Fields",
        "description": "Add extra fields to pages and posts that can be displayed through your theme",
        "cost": 250,
        "selected": false
      },
      {
        "name": "Custom post types and categories",
        "description": "Include new ways of categorising your content to the WordPress admin",
        "cost": 250,
        "selected": false
      }

    ]
  }

  toggleSelected(index) {
    let state = this.state
    let items = state.items
    items[index].selected = !items[index].selected
    state.items = items
    state.cost = this.computeCost()
    this.setState(state)
  }

  computeCost = () => {
    var cost = 0
    for(var i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].selected === true) {
        cost += this.state.items[i].cost
      }
    }
    return cost
  }
  
  render () {

    let reqs = this.state.items

    return (
      <div>
        <h2>Get a price estimate right now by selecting the functionality your plugin will require:</h2>
        {reqs.map((req, index) => {
          return (
            <Feature
              {...req}
              key={index}
              onClick={this.toggleSelected.bind(this, index)}
            />
          )
        })}
        <h1>Estimated cost £{this.state.cost}</h1>
      </div>
    )
  }
}

export default Quote
