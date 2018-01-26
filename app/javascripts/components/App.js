import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import ListCharities from './ListCharities';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      inputs:{query: "", selectedCity: ""},
      query: '',
      selectedCity: '',
      apiResults: null,
      charityName: null,
      tagLine: null,
      rating: null
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
    axios.post(`http://localhost:3000/api/search/`, {query: this.state.query, selectedCity: this.state.selectedCity})
    .then (res => {
      this.setState({
        apiDataLoaded: true,
        apiResults: res.data.response_data,
        charityName: res.data.response_data.charityName,
        tagLine: res.data.response_data[0].tagLine,
        rating: res.data.response_data[0].currentRating.score
      })
    })
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
        <div>
        <ListCharities  charityName={this.state.charityName}
                        tagLine={this.state.tagLine} />
        </div>
      </div>
    );
  }

}

export default App;
