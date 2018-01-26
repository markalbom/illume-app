import React, { Component } from 'react'

class ListCharities extends Component {
  render () {
    return (
      <div classname="charities-list-results">
        <div className="list-charity-name">{this.props.charityName} </div>
        <div className="list-tag-line">{this.props.tagLine} </div>
        <div className="list-rating">{this.props.rating} </div>
      </div>
    );
  }
}
export default ListCharities
