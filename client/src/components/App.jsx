import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import CharityList from './CharityList';
import './App.css';

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








  render() {
    return (
      <div>
        <div>
          <p>Hello and welcome to the charity app</p>
          <p>Type in a cause and city below to start your giving journey</p>
        </div>
        <div>
        <SearchForm     handleInputChange={this.handleInputChange}
                        handleSearchSubmit={this.handleSearchSubmit}
                        apiDataLoaded={this.state.apiDataLoaded}
                        query={this.state.query}
                        selectedCity={this.state.selectedCity} />
        </div>
        {this.state.charityList && <CharityList charities={this.state.charityList} />}
      </div>
    );
  }

}

export default App;
