import React, { Component } from 'react'

//CharityDetails function takes in charity obj as param, returns the following divs
function CharityDetails({ charity }) {
  return (
    <div className="details-charity" >
      <div className="details-charity-name">{charity.charityName} </div>
      <div className="details-mission">{charity.mission} </div>
      <div className="details-rating">{charity.rating} </div>
      <div className="details-websiteURL">{charity.websiteURL} </div>
    </div>
  )
}

export default CharityDetails
