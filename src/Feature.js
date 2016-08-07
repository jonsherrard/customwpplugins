import React, { Component } from 'react'

class Feature extends Component {

  render() {
    let selectedClass = this.props.selected ? 'Feature--selected' : ''
    return (
      <div
        onClick={this.props.onClick}
        className={'Feature ' + selectedClass}
      >
        <h3>{this.props.name}</h3>
        <br/>
        <p dangerouslySetInnerHTML={{__html:this.props.description}}></p>
      </div>
    )
  }    
}

export default Feature
