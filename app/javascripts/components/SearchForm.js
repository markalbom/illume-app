import React from 'react'

function SearchForm(props) {
  return (
    <div className="search-form">
      <form onSubmit={props.handleSearchSubmit}>
        <label>
        I want to help
        </label>
          <input type="text" name='query' value={props.query} onChange={props.handleInputChange} />
        <label>
        in
        </label>
        <input type="text" name='selectedCity' value={props.selectedCity} onChange={props.handleInputChange} />
          <input type="submit" value="Let's see who we can help" />
      </form>
    </div>
  );
}
export default SearchForm;
