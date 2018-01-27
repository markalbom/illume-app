import React, { Component } from 'react'

function Charity({ charity }) {
  return (
    <div className="charities-list-results" >
      <div className="list-charity-name">{charity.charityName} </div>
      <div className="list-tag-line">{charity.tagLine} </div>
      <div className="list-rating">{charity.rating} </div>
    </div>
  )
}



export default function CharityList({ charities }) {
  debugger
  return Object.values(charities).map(charity => <Charity charity={charity} key={charity.orgID} />);
}
