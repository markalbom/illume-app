import React, { Component } from 'react'

//why functional component? b/c it is actually a function - function runs within the component.
//CharityList function takes in charity obj as param, returns the three divs
function Charity(props) {
  const { charity, setCharity } = props;
  return (
    <div className="charities-list-results" >
      <div className="list-charity-name" onClick={() => setCharity(charity.orgID)}>{charity.charityName}</div>
      <div className="list-tag-line">"{charity.tagLine}" </div>
      <div className="list-rating">Charity Navigator Score: {charity.currentRating.score} </div>
    </div>
  )
}


//export the CharityList function which takes in param of charities
//obj.values turns charities obj into a new array
//map over the new array
//...passing props into charity
export default function CharityList({ charities, setCharity }) {
  return Object.values(charities).map(charity => <Charity charity={charity} setCharity={setCharity} key={charity.orgID} />);
}
