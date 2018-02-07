import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import CharityList from './CharityList';
// import Footer from './Footer';
// import CharityDetails from './CharityDetails';
import './App.css';


//global function unzipArray, takes in 2 params - array and field
//unzipArray returns the reduced array and is also a function that takes in coll and item. this function runs:
//coll is the key w/ value of [item[field]], and item is key w/ value of field
const unzipArray = (arr, field) => {
  return arr.reduce((coll, item) => {
    coll[item[field]] =  item;
    return coll;
  }, {})
};





class App extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      inputs:{query: "", selectedCity: ""},
      query: '',
      selectedCity: '',
      charityList: null,
      charity: null
    }

  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

  }



  // assigns the value of what is entered in input field for city and query, puts it in state so that it can be accessed by other components
   handleInputChange (e, inputs) {
     const value = e.target.value;
     const name = e.target.name;
     console.log(e.target.value)
     this.setState({
      [name]: value
     })

     console.log(`${name}: ${value}`)
  }


  // calls the internal API on the BackEnd to make the 3rd party API call, returns results in json object.  You shouldn't make the 3rd party API call on the FE - chance of api key and other valuable data being accessible by the user, is safer on the BE.
  handleSearchSubmit(event) {
    event.preventDefault();
    console.log('submittin')
    axios.post(`/api/search/`, {query: this.state.query, selectedCity: this.state.selectedCity})
    .then(({ data:{ response_data: res } }) => JSON.parse(res))
    .then((res) => {
      this.setState({
        apiDataLoaded: true,
        charityList: unzipArray(res, 'orgID'),
      })
    })
    .catch(err => {debugger} )
  }

  setCharity(id) {
    // find the Charity by ID
    // set in state
    //if it is not null, render charity
    //else, set state to null
    console.log('brb settin charity')
  }







  render() {
    //deconstructing state.  instead of writing 'this.state.query', it now is just 'query', applied to every variable w stat
    const { apiDataLoaded, query, selectedCity, charityList, charity } = this.state;

    return (
      <div>
        <div className= "heading">
          <p>Illume: shining a light on where your contribution goes</p>
          <p>Type in a cause and city below to start giving wisely</p>
        </div>
        <div>
        <SearchForm     handleInputChange={this.handleInputChange}
                        handleSearchSubmit={this.handleSearchSubmit}
                        apiDataLoaded={apiDataLoaded}
                        query={query}
                        selectedCity={selectedCity} />
        </div>
      {/*if charityList is present and a single charity is not present, render the charityList component*/}
        {charityList && !charity && <CharityList charities={charityList} setCharity={this.setCharity} />}
        {charity && <CharityDetails charity={charity} /> }
      </div>
    );
  }

}

export default App;
